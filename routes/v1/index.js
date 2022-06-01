const express = require("express");
const authRoute = require("./authRoute");
const userRoute = require("./userRoute");
const categoryRoute = require("./categoryRoute");
const animalRoute = require("./animalRoute");
const postRoute = require("./postRoute");
const predictRoute = require("./predictRoute");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/categories",
    route: categoryRoute,
  },
  {
    path: "/animals",
    route: animalRoute,
  },

  {
    path: "/posts",
    route: postRoute,
  },
  {
    path: "/predict",
    route: predictRoute,
  },
];

defaultRoutes.map((route) => router.use(route.path, route.route));

module.exports = router;
