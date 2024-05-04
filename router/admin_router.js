const express = require("express");
const router = express.Router();
const auth_middleware = require("../middleware/auth_middleware");
const getAll = require("../controllers/admin_controllers");
const admin_middleware = require("../middleware/admin_middleware");
router
  .route("/admin/user")
  .get(auth_middleware, admin_middleware, getAll.getAllUsers);
router
  .route("/admin/contact")
  .get(auth_middleware, admin_middleware, getAll.getAllContacts);
router.route("/admin/user/delete/:id").delete(getAll.deleteUser);
router.route("/admin/contact/delete/:id").delete(getAll.deleteUserContact);

router.route("/admin/user/:id/edit").get(getAll.getSingleUser);
router.route("/admin/user/:id/edit/update").patch(getAll.getSingleUserUpdate);
module.exports = router;
