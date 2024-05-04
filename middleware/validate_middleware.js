const validate = (schema) => async (req, res, next) => {
  try {
    const check_data = await schema.parseAsync(req.body);
    console.log(check_data);
    req.body = check_data;
    next();
  } catch (err) {
    // console.log(err);

    const status = 422;
    const message = "give input correctly";
    const extra_details = err.errors[0].message;

    const error = {
      status,
      message,
      extra_details,
    };
    console.log(error);
    // res.status(status).json({ message, extra_details });
    next(error);
  }
};
module.exports = validate;
