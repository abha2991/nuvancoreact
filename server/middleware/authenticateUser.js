const jwt = require("jsonwebtoken");

const connection = require("../db/conn");

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (token) {
      decodedData = await jwt.verify(
        token,
        "yfgyesfg647373693683shdbcbdslbcj589u40u60476"
      );

      req.id = decodedData.id;

      await connection.query(
        "Select * FROM customer_masters WHERE customer_id=?",
        [decodedData.id],
        function (error, user, fields) {
          if (error) {
            return res.status(400).json({
              status: "failed",
              message: "Something Went Wrong",
            });
          } else {
            req.user = user;

            next();
          }
        }
      );
    } else {
      req.user = undefined;
      next();
    }

    // await connection.query(
    //       "Select * FROM user_master WHERE user_id=?",
    //       [decodedData.user_id],
    //       function (error, result, fields) {
    //         if (error) {
    //         } else {
    //        return result;
    //
    //         }
    //       }
    //     );

    // next();
  } catch (e) {}
};
module.exports = authenticateUser;
