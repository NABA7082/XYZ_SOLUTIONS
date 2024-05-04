// import user_model from "../models/user_models";
const bcrypt = require("bcrypt");
const User = require("../models/user_model");
const contact_m = require("../models/contact_model");

const home = async (req, res) => {
  try {
    res.send("hello word naba");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const old_user = await User.findOne({ email });
    if (old_user) {
      return res.status(400).send("email already exists");
    }
    const saltRounds = 10;
    const hasp = await bcrypt.hash(password, saltRounds);

    const user_create = await User.create({
      username,
      email,
      phone,
      password: hasp,
    });

    res.status(200).json({
      msg: "email registered sucessfully",
      token: user_create.generateToken(),
      userId: user_create._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const old_users = await User.findOne({ email });

    if (!old_users) {
      return res.status(400).send("invalid credentials");
    }

    const user_c = await old_users.comparePassword(password);

    console.log(user_c);
    if (user_c) {
      res.status(200).json({
        msg: "login sucessful",
        token: old_users.generateToken(),
        userId: old_users._id.toString(),
      });
    } else {
      res.status(401).send("invalid credentials");
    }
  } catch (error) {
    console.log(error);
  }
};

//new code
const contact = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    const contact_create = await contact_m.create({
      username,
      email,
      message,
    });
    console.log("hello", message);

    res.status(200).json({ msg: "message received", contact_create });
  } catch (error) {
    console.log(error);
  }
};

//to send user data
const user = async (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, register, login, contact, user };
