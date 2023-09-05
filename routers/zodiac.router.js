const express = require("express");
const controller = require("../controllers/index");
const router = express.Router();

router.post("/createZodiac", controller.zodiacController.createZodiac);
router.get("/getDaily/:title", controller.zodiacController.getDaily);
router.get("/getWeekly/:title", controller.zodiacController.getWeekly);
router.get("/getMonthly/:title", controller.zodiacController.getMonthly);
//update user, getUserById, getUserByName
module.exports = {
  zodiac: router,
};
