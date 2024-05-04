const user = require("../models/user_model");
const contact = require("../models/contact_model");
const getAllUsers = async (req, res) => {
  try {
    const response = await user.find().select({ password: 0 });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json("admin error");
  }
};

const getAllContacts = async (req, res) => {
  try {
    const response = await contact.find().select({ password: 0 });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: "no admin" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await user.deleteOne({ _id: id });
    console.log(response);
    res.status(200).json("sucessfully deleted");
  } catch (error) {
    res.status(400).json("deletion error");
  }
};
const deleteUserContact = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await contact.deleteOne({ _id: id });
    console.log(response);
    res.status(200).json("sucessfully deleted");
  } catch (error) {
    res.status(400).json("deletion error");
  }
};

const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await user.findOne({ _id: id });
    console.log("hello", response);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(" getting single user error");
  }
};
const getSingleUserUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await user.updateOne(
      { _id: id },
      {
        $set: data,
      }
    );
    console.log("update", response);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(" getting single user error in update");
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUser,
  getSingleUser,
  getSingleUserUpdate,
  deleteUserContact,
};
