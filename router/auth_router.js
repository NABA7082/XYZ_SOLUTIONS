const express = require("express");
const router = express.Router();
const {
  home,
  register,
  login,
  contact,
  user,
} = require("../controllers/auth_controllers");

const validate = require("../middleware/validate_middleware");
const signup = require("../validation/auth_validation");
const auth_middleware = require("../middleware/auth_middleware");
const log_in = require("../validation/auth_validation_login");
const contact_check = require("../validation/contact_validation");
router.route("/").get(home);
router.route("/register").post(validate(signup), register);
router.route("/login").post(validate(log_in), login);
router.route("/contact").post(validate(contact_check), contact);
router.route("/user").get(auth_middleware, user);

module.exports = router;
