const express = require("express");
const controller = require("../controllers/index");
const router = express.Router();

router.post("/uploadCoffee/:id", controller.coffeeController.uploadCoffee);

module.exports = {
  coffee: router,
};
