const admin_middleware = (req, res, next) => {
  try {
    console.log(req.user);
    const adminRole = req.user.admin;
    if (!adminRole) {
      res.status(403).json({ msg: "access denied" });
    }
    next();
  } catch (error) {
    res.status(400).json({ msg: "no admin" });
    next(error);
  }
};

module.exports = admin_middleware;
