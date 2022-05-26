const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  getPostById,
  deletePost,
  getPostsByCategoryId,
} = require("../../controllers/postController");

const { uploadSingle } = require("../../utils/files");

router.post(
  "/feed",
  uploadSingle("photo", "photo", "./public/feeds"),
  createPost
);

router.route("/").get(getPosts);

router.route("/category/:categoryId").get(getPostsByCategoryId);

router.route("/:id").delete(deletePost).get(getPostById);

module.exports = router;
