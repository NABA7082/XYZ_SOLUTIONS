const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const user_schema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

user_schema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.admin,
      },
      process.env.JWT_SIGN_KEY
    );
  } catch (error) {
    console.log(error);
  }
};

user_schema.methods.comparePassword = function (password) {
  try {
    return bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error);
  }
};

const user_model = new mongoose.model("users", user_schema);

module.exports = user_model;
