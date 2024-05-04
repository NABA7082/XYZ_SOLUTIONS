const mongoose = require("mongoose");

const contact_schema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const contact_model = new mongoose.model("contact", contact_schema);

module.exports = contact_model;
