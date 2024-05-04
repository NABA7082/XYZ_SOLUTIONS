const service_s = require("../models/service_model");

const service_f = async (req, res) => {
  try {
    const service = await service_s.find();
    res.status(200).json({ message: service });
  } catch (error) {
    console.log(error);
  }
};
module.exports = service_f;
