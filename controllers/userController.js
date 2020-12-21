const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  // Chequeando si el mail ya existe
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists)
    return res
      .status(400)
      .json({ error: "true", message: "El mail ya existe!" });

  // Hasheando la contraseña
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Creando un nuevo user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    isAdmin: req.body.isAdmin
  });

  try {
    const savedUser = await user.save();

    res.status(200).json({
      status: "success",
      message: "El usuario ha sido guardado satisfactoriamente.",
      userID: savedUser._id
    });
  } catch (err) {
    res
      .status(400)
      .json({ status: "failed", message: "El usuario no ha sido guardado." });
  }
};

const login = async (req, res) => {
  // Chequeando si el mail ya existe
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(401)
      .json({ status: "failed", message: "Email o contraseña incorrectos." });

  // Chequeando si la contraseña es correcta
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res
      .status(401)
      .json({ status: "failed", message: "Email o contraseña incorrectos." });

  // Creando un token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "3h"
  });
  res
    .header("auth-token", token)
    .json({ status: "success", message: "Logueado correctamente", token });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({}).select("-password");

  if (users.length === 0) {
    res
      .status(404)
      .json({ status: "failed", message: "No hay usuarios registrados." });
  } else {
    res.status(200).json({ status: "success", users });
  }
};

const getUser = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.status(200).json({ status: "success", user });
  } else {
    res
      .status(404)
      .json({ status: "failed", message: "Usuario no encontrado." });
  }
};

module.exports = {
  register,
  login,
  getUser,
  getAllUsers
};
