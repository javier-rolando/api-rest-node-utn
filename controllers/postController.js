const Post = require("../models/Post");

const createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    author: req.user._id
  });

  try {
    const savedPost = await post.save();

    res.status(200).json({ status: "success", savedPost });
  } catch (err) {
    res
      .status(400)
      .json({ status: "failed", message: "El post no se ha podido guardar." });
  }
};

const getPosts = async (req, res) => {
  const posts = await Post.find({}).populate("author", "name email");

  if (posts.length === 0) {
    res
      .status(404)
      .json({ status: "failed", message: "No existen posts guardados." });
  } else {
    res.status(200).json({ status: "success", posts });
  }
};

const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate(
    "author",
    "name email"
  );

  if (post) {
    res.status(200).json({ status: "success", post });
  } else {
    res.status(404).json({ status: "failed", message: "Post no encontrado." });
  }
};

const updatePost = async (req, res) => {
  await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPost) => {
      if (err) {
        return res
          .status(500)
          .json({ status: "failed", message: "No se ha podido actualizar." });
      }
      if (!updatedPost) {
        return res
          .status(404)
          .json({ status: "failed", message: "Post no encontrado." });
      }
      return res.status(200).json({
        status: "success",
        updatedPost
      });
    }
  );
};

const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "failed", message: "No se ha podido eliminar." });
    }
    if (!deletedPost) {
      return res
        .status(404)
        .json({ status: "failed", message: "Post no encontrado." });
    }
    return res.status(200).json({
      status: "success",
      message: "Post eliminado satisfactoriamente."
    });
  });
};

module.exports = { createPost, getPosts, getPost, updatePost, deletePost };
