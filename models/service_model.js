const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const service_schema = new moongose.Schema({
  service: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
});

const service_model = new mongoose.model("Services", service_schema);

module.exports = service_model;
