const catchAsync = require("../utils/catchAsync");
const { Animal } = require("../models");
const { pagination } = require("../utils/helper");
const { Sequelize } = require("sequelize");
const sequelize = Sequelize;

exports.getAnimal = catchAsync(async (req, res, next) => {
  const rows = await Animal.findAll({
    ...pagination(req),
    order: sequelize.literal("createdAt	DESC"),
  });

  res.status(200).json({
    status: "success",
    results: rows.length,
    data: {
      categories: rows,
    },
  });
});

exports.createAnimal = catchAsync(async (req, res, next) => {
  const rows = await Animal.create({
    name: req.body.name,
    animalType: req.body.animalType,
    health: req.body.health,
    personality: req.body.personality,
    grooming: req.body.grooming,
  });

  res.status(200).json({
    status: "success",
    data: {
      categories: rows,
    },
  });
});

exports.deleteAnimal = catchAsync(async (req, res, next) => {
  const rows = await Animal.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({
    status: "success",
    data: {
      categories: rows,
    },
  });
});

exports.updateAnimal = catchAsync(async (req, res, next) => {
  const rows = await Animal.update(
    { name: req.body.name },
    // { animalType: req.body.animalType },
    // { health: req.body.health },
    // { personality: req.body.personality },
    // { grooming: req.body.grooming },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.status(200).json({
    status: "success",
    data: {
      categories: rows,
    },
  });
});

exports.getAnimalById = catchAsync(async (req, res, next) => {
  const rows = await Animal.findByPk(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      categories: rows,
    },
  });
});
