const Joi = require("joi");

const schemas = {
  register: Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
      "string.base": "El nombre debe ser de tipo texto",
      "string.min": "El nombre debe tener al menos 3 caracteres.",
      "string.max": "El nombre no debe superar los 30 caracteres.",
      "string.empty": "El nombre no puede estar vacío.",
      "any.required": "El nombre es obligatorio."
    }),
    email: Joi.string().min(6).max(255).required().email().messages({
      "string.base": "El email debe ser de tipo texto",
      "string.min": "El email debe tener al menos 6 caracteres.",
      "string.max": "El email no debe superar los 255 caracteres.",
      "string.empty": "El email no puede estar vacío.",
      "string.email": "El email no es válido.",
      "any.required": "El email es obligatorio."
    }),
    password: Joi.string().min(6).max(255).required().messages({
      "string.base": "La contraseña debe ser de tipo texto",
      "string.min": "La contraseña debe tener al menos 6 caracteres.",
      "string.max": "La contraseña no debe superar los 255 caracteres.",
      "string.empty": "La contraseña no puede estar vacía.",
      "any.required": "La contraseña es obligatoria."
    })
  }),
  login: Joi.object({
    email: Joi.string().min(6).max(255).required().email().messages({
      "string.base": "El email debe ser de tipo texto",
      "string.min": "El email debe tener al menos 6 caracteres.",
      "string.max": "El email no debe superar los 255 caracteres.",
      "string.empty": "El email no puede estar vacío.",
      "string.email": "El email no es válido.",
      "any.required": "El email es obligatorio."
    }),
    password: Joi.string().min(6).max(255).required().messages({
      "string.base": "La contraseña debe ser de tipo texto",
      "string.min": "La contraseña debe tener al menos 6 caracteres.",
      "string.max": "La contraseña no debe superar los 255 caracteres.",
      "string.empty": "La contraseña no puede estar vacía.",
      "any.required": "La contraseña es obligatoria."
    })
  })
};

module.exports = schemas;
