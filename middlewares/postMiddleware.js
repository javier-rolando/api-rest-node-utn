const schemas = require("../schemas/postValidation");

const validateCreate = (req, res, next) => {
  const { error } = schemas.create.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ status: "failed", message: error.details[0].message });

  next();
};

const validateUpdate = (req, res, next) => {
  const { error } = schemas.update.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ status: "failed", message: error.details[0].message });

  next();
};

module.exports = { validateCreate, validateUpdate };
