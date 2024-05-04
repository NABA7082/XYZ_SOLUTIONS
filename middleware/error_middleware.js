const error_middleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extra_details = err.extra_details || "error from Backend";

  res.status(status).json({ message, extra_details });
  next();
};
module.exports = error_middleware;
