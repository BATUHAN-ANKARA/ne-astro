const express = require("express");
const controller = require("../controllers/index");
const router = express.Router();

router.post("/uploadCoffee/:userId", controller.coffeeController.uploadCoffee);
router.put("/updateCoffeeById/:id", controller.coffeeController.updateCoffeeById);
router.get("/getCanceledCoffee/:userId", controller.coffeeController.getCanceledCoffee);
router.get("/getCoffeeById/:id", controller.coffeeController.getCoffeeById);
router.get("/getCoffeeByUser/:userId", controller.coffeeController.getCoffeeByUser);
router.get("/getContinueCoffee/:userId", controller.coffeeController.getContinueCoffee);
router.get("/getFinishedCoffee/:userId", controller.coffeeController.getFinishedCoffee);

module.exports = {
  coffee: router,
};
