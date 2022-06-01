const catchAsync = require("../utils/catchAsync");
const { Predict } = require("../models");
const { pagination } = require("../utils/helper");

exports.getPredict = catchAsync(async (req, res, next) => {
  const rows = await Predict.findAll({
    ...pagination(req),
  });

  res.status(200).json({
    status: "success",
    results: rows.length,
    data: {
      categories: rows,
    },
  });
});

exports.createPredict = catchAsync(async (req, res, next) => {
  if (req.file) req.body["photo"] = req.file.filename;
  const rows = await Predict.create({
    photo: req.body.photo,
  });

  res.status(200).json({
    status: "success",
    data: {
      categories: rows,
    },
    //photo: req.body["photo"],
  });
});
