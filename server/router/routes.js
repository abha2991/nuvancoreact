const express = require("express");
const router = express.Router();
const user = require("./User/user");
const multer = require("multer");

const static = require("./Static/staticApis");
const authenticateUser = require("../middleware/authenticateUser");
const fs = require("fs");

router.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // let dir = "./uploads/ProfileImage";
    let dir = "uploads/" + req.params.type;

    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    } catch (err) {
      console.error(err);
    }

    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage, limits: { fileSize: 104857600 } });

router.post("/user-register", user.register);
router.post("/user-login", user.login);
router.get("/is-user-loggedIn", authenticateUser, user.isUserLoggedIn);
router.get("/user-logout", user.logout);

router.post("/user-basic-details", user.basicDetails);
router.post("/user-property-details", user.propertyDetails);
router.post("/user-basic-details-id", user.getBasicDetailsById);
router.post("/user-property-details-id", user.getPropertyDetailsByBasicId);

router.post(
  "/user-basic-details-list-draft",
  user.basicDetailsByCustomerIdDraft
);
router.post(
  "/user-basic-details-list-complete",
  user.basicDetailsByCustomerIdComplete
);
router.post(
  "/user-additional-details/:type",
  authenticateUser,
  upload.single("file"),
  user.additionalDetails
);

router.post("/user-get-details", user.getDetails);

router.post("/user-construction-details", user.constructionDetails);
router.post("/user-update-profile", authenticateUser, user.updateUserProfile);
router.post(
  "/user-update-profilepic/:type",
  authenticateUser,
  upload.single("file"),
  user.uploadProfilePicture
);

router.post("/getCity", static.getCity);
router.post("/getState", static.getState);
router.get("/getCountry", static.getCountry);

module.exports = router;
