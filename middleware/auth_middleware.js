const jwt = require("jsonwebtoken");
const User = require("../models/user_model");
const auth_middleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SIGN_KEY);
    const userData = await User.findOne({ email: verified.email }).select({
      password: 0,
    });

    console.log(userData);

    req.user = userData;
    next();
    console.log(verified);
  } catch (error) {
    res.status(400).json({ msg: "no token" });
    next(error);
  }
};

module.exports = auth_middleware;
