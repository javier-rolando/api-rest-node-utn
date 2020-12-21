const schemas = require("../schemas/userValidation");

const validateRegister = (req, res, next) => {
  const { error } = schemas.register.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ status: "failed", message: error.details[0].message });

  next();
};

const validateLogin = (req, res, next) => {
  const { error } = schemas.login.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ status: "failed", message: error.details[0].message });

  next();
};

module.exports = { validateRegister, validateLogin };
