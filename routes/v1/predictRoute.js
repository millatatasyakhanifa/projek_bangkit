const express = require("express");
const router = express.Router();

const { createPredict, getPredict } = require("../../controllers/predict");

const { uploadSingle } = require("../../utils/files");

router
  .post("/", uploadSingle("photo", "photo", "./public/predict"), createPredict)
  .get(getPredict);

module.exports = router;
