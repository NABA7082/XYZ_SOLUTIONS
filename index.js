const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const authRouter = require("./router/auth_router");
const serviceRouter = require("./router/service_route");
const getAllUsers = require("./router/admin_router");
const db = require("./utils/db");
const validate_error = require("./middleware/error_middleware");

// const corsOptions = {
//   origin: "http://localhost:5173",
//   methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
//   credentials: true,
// };

const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/api", authRouter);
app.use("/api", serviceRouter);
app.use("/api", getAllUsers);
// app.use("/form", router_contact);

app.use(validate_error);
db().then(() => {
  app.listen(port, () => {
    console.log("server is running");
  });
});
// app.listen(3001, () => {
//   console.log("server is running");
// });
