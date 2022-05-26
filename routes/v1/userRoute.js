const express = require("express");
const router = express.Router();

const userController = require("../../controllers/userController");

const auth = require("../../middlewares/auth");

router.route("/").get(auth("user"), userController.getUsers);
router.route("/session").get(auth(), userController.getUserByToken);

module.exports = router;
