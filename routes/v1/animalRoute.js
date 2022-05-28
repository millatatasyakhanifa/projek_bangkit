const express = require("express");
const router = express.Router();

const animalController = require("../../controllers/animalController");

const auth = require("../../middlewares/auth");

router
  .route("/")
  .get(animalController.getAnimal)
  .post(animalController.createAnimal);

router
  .route("/:id")
  .delete(animalController.deleteAnimal)
  .put(animalController.updateAnimal)
  .get(animalController.getAnimalById);

router.route("/key/name").get(animalController.getAnimalByName);

module.exports = router;
