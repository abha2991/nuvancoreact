const connection = require("../../db/conn");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const date = require("../date");
const cookieParser = require("cookie-parser");
const multer = require("multer");

const v4 = require("uuid");
const fs = require("fs");

require("dotenv").config({ path: `${__dirname}/../.env` });

module.exports.register = async (req, res, next) => {
  const { name, email, password, phoneNumber } = req.body;

  if (!name || !email || !password || !phoneNumber) {
    return res
      .status(400)
      .json({ status: "failed", message: "Plz fill the fields properly" });
  } else if (name.length < 3) {
    return res
      .status(400)
      .json({ status: "failed", message: "Name Length is Too Short" });
  } else if (phoneNumber.length < 10 || phoneNumber.length > 11) {
    return res.status(400).json({
      status: "failed",
      message: "Please Enter Correct Phone Number",
    });
  } else if (name && email && password) {
    await connection.query(
      `SELECT *
       FROM customer_masters
       WHERE LOWER(customer_email) = LOWER(${connection.escape(
         req.body.email
       )});`,
      (err, result) => {
        if (result.length) {
          return res.status(400).send({
            message: "This user is already in use!",
          });
        } else {
          bcrypt.hash(req.body.password, 12, (err, hash) => {
            if (err) {
              return res.status(400).send({
                message: err,
              });
            } else {
              // has hashed pw => add to database
              let hashedPassword = hash;

              connection.query(
                "INSERT INTO `customer_masters`(`customer_registration_id`,`customer_name`,`customer_email`,`customer_password`,`customer_mobile`,`created_at`,`customer_otp`,`customer_company_name`,`customer_photo`,`customer_approval_remark`,`customer_fcm`,`uuid`,`customer_country`,`customer_state`,`customer_city`,`customer_zipcode`,`customer_address`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [
                  "",
                  name,
                  email,
                  hashedPassword,
                  phoneNumber,
                  new Date(),
                  0,
                  "",
                  "",
                  "",
                  "",
                  "",
                  0,
                  0,
                  "",
                  "",
                  "",
                ],
                (err, result) => {
                  if (err) {
                    throw err;
                    return res.status(400).send({
                      message: err,
                    });
                  }
                  return res.status(200).send({
                    message: "The user has been registerd with us!",
                  });
                }
              );
            }
          });
        }
      }
    );
  }
};

// module.exports.register = async (req, res) => {
//   try {
//     const { name, email, password, phoneNumber } = req.body;
//
//     const hashedPassword = await bcrypt.hash(password, 12);
//
//     if (!name || !email || !password || !phoneNumber) {
//       return res
//         .status(400)
//         .json({ status: "failed", message: "Plz fill the fields properly" });
//     } else if (name.length < 3) {
//       return res
//         .status(400)
//         .json({ status: "failed", message: "Name Length is Too Short" });
//     } else if (phoneNumber.length < 10 || phoneNumber.length > 11) {
//       return res.status(400).json({
//         status: "failed",
//         message: "Please Enter Correct Phone Number",
//       });
//     } else if (name && email && password) {
//       await connection.query(
//         `Select * FROM customer_masters`,
//         function (error, results, fields) {
//           if (error) throw error;
//
//           if (results.length == 0) {
//             connection.query(
//               "INSERT INTO `customer_masters`(`customer_registration_id`,`customer_name`,`customer_email`,`customer_password`,`customer_mobile`,`created_at`,`customer_otp`,`customer_company_name`,`customer_photo`,`customer_approval_remark`,`customer_fcm`,`uuid`,`customer_country`,`customer_state`,`customer_city`,`customer_zipcode`,`customer_address`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
//               [
//                 "",
//                 name,
//                 email,
//                 hashedPassword,
//                 phoneNumber,
//                 new Date(),
//                 0,
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//                 0,
//                 0,
//                 "",
//                 "",
//                 "",
//               ]
//             );
//             return res.status(200).json({
//               status: "success",
//               message: "Registered Successfully",
//             });
//           } else {
//             results.forEach((result) => {
//               if (result.customer_email === email) {
//                 return res
//                   .status(400)
//                   .json({ status: "failed", message: "Email already present" });
//               } else {
//                 connection.query(
//                   "INSERT INTO `customer_masters`(`customer_registration_id`,`customer_name`,`customer_email`,`customer_password`,`customer_mobile`,`created_at`,`customer_otp`,`customer_company_name`,`customer_photo`,`customer_approval_remark`,`customer_fcm`,`uuid`,`customer_country`,`customer_state`,`customer_city`,`customer_zipcode`,`customer_address`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
//                   [
//                     "",
//                     name,
//                     email,
//                     hashedPassword,
//                     phoneNumber,
//                     new Date(),
//                     0,
//                     "",
//                     "",
//                     "",
//                     "",
//                     "",
//                     0,
//                     0,
//                     "",
//                     "",
//                     "",
//                   ]
//                 );
//
//                 return res.status(200).json({
//                   status: "success",
//                   message: "Registered Successfully",
//                 });
//               }
//             });
//           }
//         }
//       );
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  connection.query(
    "Select * FROM customer_masters WHERE customer_email=?",
    [email],
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          message: err,
        });
      }
      if (!result.length) {
        return res.status(400).send({
          message: "Email or password is incorrect!",
        });
      }
      // check password
      bcrypt.compare(
        req.body.password,
        result[0]["customer_password"],
        (bErr, bResult) => {
          if (bErr) {
            throw bErr;
            return res.status(400).send({
              message: "Email or password is incorrect!",
            });
          }
          if (bResult) {
            const token = jwt.sign(
              { id: result[0].customer_id },
              "yfgyesfg647373693683shdbcbdslbcj589u40u60476",
              { expiresIn: "1800d" }
            );

            res.cookie("token", token, {
              expires: new Date(Date.now() + 155520000000),
              httpOnly: true,
            });
            result[0].token = token;
            // connection.query(
            //   `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
            // );
            return res.status(200).send({
              message: "Logged in!",
              token,
              user: result[0],
            });
          }
          return res.status(400).send({
            message: "Email or password is incorrect!",
          });
        }
      );
    }
  );
};

// module.exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     let a = await bcrypt.hash(password, 12);
//
//     if (!email) {
//       return res
//         .status(400)
//         .json({ status: "failed", message: "Please Enter Email" });
//     } else if (!password) {
//       return res
//         .status(400)
//         .json({ status: "failed", message: "Please Enter Password" });
//     } else if (email && password) {
//       await connection.query(
//         "Select * FROM customer_masters WHERE customer_email=?",
//         [email],
//         function (error, results, fields) {
//           if (!results.length) {
//             return res.status(400).json({
//               status: "failed",
//               message: "Invalid Email Address",
//             });
//           } else if (results) {
//             results.forEach(async (result) => {
//               if (!result) {
//                 return res.status(400).json({
//                   status: "failed",
//                   message: "Invalid Email Address",
//                 });
//               } else {
//                 let passwordConfirmation = await bcrypt.compare(
//                   password,
//                   result.customer_password
//                 );
//
//                 if (!passwordConfirmation) {
//                   return res.status(400).json({
//                     status: "failed",
//                     message: "Incorrect Password",
//                   });
//                 }
//
//                 if (passwordConfirmation) {
//                   const token = jwt.sign(
//                     { id: result.customer_id },
//                     "yfgyesfg647373693683shdbcbdslbcj589u40u60476",
//                     { expiresIn: "1800d" }
//                   );
//                   res.cookie("token", token, {
//                     expires: new Date(Date.now() + 155520000000),
//                     httpOnly: true,
//                   });
//                   result.token = token;
//
//                   return res.status(200).json({
//                     status: "success",
//                     data: result,
//
//                     message: "Logged In Successfully",
//                   });
//                 }
//               }
//             });
//           }
//         }
//       );
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

module.exports.isUserLoggedIn = async (req, res) => {
  res.status(200).send(req?.user);
};

module.exports.logout = async (req, res) => {
  res.clearCookie("token", { path: "/" });

  res.status(200).json({ status: "success", message: "User Logged Out" });
};

module.exports.updateUserProfile = async (req, res) => {
  let year = new Date()?.getFullYear();

  let id = req?.user[0]?.customer_id;
  let date = ("0" + new Date().getDate()).slice(-2);
  let month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  let code = `NU${date}${month}${year}C${id}`;

  const { name, email, phoneNumber, country, state, city, pin, address } =
    req.body;

  let sql = `UPDATE customer_masters SET customer_registration_id = ?,customer_name = ?,customer_email=?, customer_mobile=?,customer_country=?,customer_state=?,customer_city=?,customer_zipcode=?,customer_address=?,updated_at=?
           WHERE customer_id = ?`;
  let data = [
    code,
    name,
    email,
    phoneNumber,
    country,
    state,
    city,
    pin,
    address,
    new Date(),
    id,
  ];
  connection.query(sql, data, (error, results, fields) => {
    if (error) {
      console.log({ error });
      return res
        .status(400)
        .json({ status: "failed", message: "Something Went Wrong!!!" });
    }

    return res.status(200).json({
      status: "success",
      message: "Update Successfully",
      data: results,
    });
  });
};

module.exports.uploadProfilePicture = async (req, res) => {
  const image = req.file;
  const id = req.user[0]?.customer_id;

  let sql = `UPDATE customer_masters SET customer_photo = ?
           WHERE customer_id = ?`;

  let data = [image.filename, id];

  connection.query(sql, data, (error, results, fields) => {
    if (error) {
      console.log({ error });
      return res
        .status(400)
        .json({ status: "failed", message: "Something Went Wrong!!!" });
    }

    return res.status(200).json({
      status: "success",
      message: "Profile Picture Updated Successfully",
    });
  });
};

module.exports.basicDetails = async (req, res) => {
  const {
    location,
    city,
    basicDetailsCustomerId,
    startPlanning,
    propertyStatus,
  } = req.body;

  await connection.query(
    `Select * FROM basic_details`,
    function (error, results, fields) {
      if (error) throw error;

      connection.query(
        "INSERT INTO `basic_details`(`customer_customer_id`,`basic_details_location`,`basic_details_city`,`basic_details_startplanning`,`property_status`,`uuid`,`created_at`) VALUES(?,?,?,?,?,?,?)",
        [
          basicDetailsCustomerId,

          location,
          city,

          startPlanning,
          propertyStatus,
          "",
          new Date(),
        ],
        (err, result) => {
          if (err) {
            throw err;
            return res.status(400).json({ status: "failed", message: err });
          } else {
            return res.status(200).json({
              status: "success",

              message: "Basic Details Entered Successfully",
              id: result.insertId,
            });
          }
        }
      );
    }
  );
};

module.exports.propertyDetails = async (req, res) => {
  const {
    propertyDetailsCustomerId,
    propertyDetailsBasicId,
    topSize,
    topName,
    rightSize,
    rightName,
    bottomSize,
    bottomName,
    leftSize,
    leftName,
    streetFacing,
    builtArea,
  } = req.body;

  await connection.query(
    `Select * FROM property_details`,
    function (error, results, fields) {
      if (error) throw error;

      connection.query(
        "INSERT INTO `property_details`(`pd_customer_id`,`pd_basic_id`,`pd_top_size`,`pd_top_name`,`pd_right_size`,`pd_right_name`,`pd_bottom_size`,`pd_bottom_name`,`pd_left_size`,`pd_left_name`,`pd_street_facing`,`pd_built_area`,`created_at`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          propertyDetailsCustomerId,
          propertyDetailsBasicId,
          topSize,
          topName,
          rightSize,
          rightName,
          bottomSize,
          bottomName,
          leftSize,
          leftName,
          streetFacing,
          builtArea,
          new Date(),
        ],
        (err, result) => {
          if (err) {
            throw err;
            return res.status(400).json({ status: "failed", message: err });
          } else {
            return res.status(200).json({
              status: "success",

              message: "Property Details Entered Successfully",
              id: result.insertId,
            });
          }
        }
      );
    }
  );
};

module.exports.additionalDetails = async (req, res) => {
  const image = req?.file;
  let additionalImage = image?.filename;

  const { additionalCustomerId, additionalBasicId, additionalRequirement } =
    req.body;

  await connection.query(
    `Select * FROM additional_details`,
    function (error, results, fields) {
      if (error) throw error;

      connection.query(
        "INSERT INTO `additional_details`(`ad_customer_id`,`ad_basic_id`,`ad_requirement`,`ad_image`,`created_at`) VALUES(?,?,?,?,?)",
        [
          additionalCustomerId,
          additionalBasicId,
          additionalRequirement,
          additionalImage,
          new Date(),
        ],
        (err, result) => {
          if (err) {
            throw err;
            return res.status(400).json({ status: "failed", message: err });
          } else {
            return res.status(200).json({
              status: "success",

              message: "Additional Details Entered Successfully",
              id: result.insertId,
            });
          }
        }
      );
    }
  );
};

module.exports.constructionDetails = async (req, res) => {
  const { data, basicId, customerId } = req.body;

  let val = JSON.stringify(data);
  await connection.query(
    `Select * FROM construction_details`,
    function (error, results, fields) {
      if (error) throw error;

      connection.query(
        "INSERT INTO `construction_details`(`cd_customer_id`,cd_basic_id,`cd_details`,`created_at`) VALUES(?,?,?,?)",
        [customerId, basicId, val, new Date()],
        (err, result) => {
          if (err) {
            throw err;
            return res.status(400).json({ status: "failed", message: err });
          } else {
            return res.status(200).json({
              status: "success",

              message: "Construction Details Entered Successfully",
              id: result.insertId,
            });
          }
        }
      );
    }
  );
};

module.exports.getDetails = async (req, res) => {
  const { id } = req.body;
  connection.query(
    "Select basic_details.*, property_details.*, construction_details.*, additional_details.* FROM basic_details inner join property_details on property_details.pd_basic_id=basic_details.basic_details_id inner join construction_details on construction_details.cd_basic_id=basic_details.basic_details_id  inner join additional_details on additional_details.ad_basic_id=basic_details.basic_details_id WHERE customer_customer_id=?",
    [id],
    function (error, result, fields) {
      if (error) throw error;

      return res.status(200).json({
        status: "success",
        data: result,
        message: "Fetch Successfully",
      });
    }
  );
};
