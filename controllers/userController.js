const catchAsync = require("../utils/catchAsync");
const { User } = require("../models/index");
const { pagination } = require("../utils/helper");

exports.getUsers = catchAsync(async (req, res, next) => {
  const { count, rows } = await User.findAndCountAll({
    ...pagination(req),
  });

  res.status(200).json({
    status: "success",
    count,
    results: rows.length,
    data: {
      users: rows,
    },
  });
});

exports.getUserByToken = catchAsync(async (req, res, next) => {
  const rows = await User.findOne({
    where: {
      id: req.user.id,
    },
  });

  res.status(200).json({
    status: "success",
    results: rows.length,
    data: {
      users: rows,
    },
  });
});
