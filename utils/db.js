const mongo = require("mongoose");
// const uri = "mongodb://127.0.0.1:27017/mern_admin";
const uri = process.env.MONGO_URI;
const connectdb = async () => {
  try {
    await mongo.connect(uri);
    console.log("connection with db sucessful");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = connectdb;
