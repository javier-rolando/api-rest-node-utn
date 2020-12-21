const Joi = require("joi");

const schemas = {
  create: Joi.object({
    title: Joi.string().required().min(5).max(30).messages({
      "string.base": "El título debe ser de tipo texto.",
      "string.empty": "El título no puede estar vacío.",
      "string.min": "El título debe tener al menos 5 caracteres.",
      "string.max": "El título no debe superar los 30 caracteres.",
      "any.required": "El título es obligatorio."
    }),
    body: Joi.string().required().min(10).max(500).messages({
      "string.base": "El contenido debe ser de tipo texto.",
      "string.empty": "El contenido no puede estar vacío.",
      "string.min": "El contenido debe tener al menos 10 caracteres.",
      "string.max": "El contenido no debe superar los 500 caracteres.",
      "any.required": "El contenido es obligatorio."
    })
  }),
  update: Joi.object({
    title: Joi.string().min(5).max(30).messages({
      "string.base": "El título debe ser de tipo texto.",
      "string.empty": "El título no puede estar vacío.",
      "string.min": "El título debe tener al menos 5 caracteres.",
      "string.max": "El título no debe superar los 30 caracteres."
    }),
    body: Joi.string().min(10).max(500).messages({
      "string.base": "El contenido debe ser de tipo texto.",
      "string.empty": "El contenido no puede estar vacío.",
      "string.min": "El contenido debe tener al menos 10 caracteres.",
      "string.max": "El contenido no debe superar los 500 caracteres."
    })
  })
};

module.exports = schemas;
