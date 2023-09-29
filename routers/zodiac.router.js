const express = require("express");
const controller = require("../controllers/index");
const router = express.Router();

router.post("/createZodiac", controller.zodiacController.createZodiac);
router.get("/getDaily/:title", controller.zodiacController.getDaily);
router.get("/getWeekly/:title", controller.zodiacController.getWeekly);
router.get("/getMonthly/:title", controller.zodiacController.getMonthly);
router.get("/getById/:id", controller.zodiacController.getById);
router.put(
  "/updateZodiacById/:id",
  controller.zodiacController.updateZodiacById
);
router.get(
  "/getZodiacByTitle/:title",
  controller.zodiacController.getZodiacByTitle
);
router.post("/postRelationship", controller.zodiacController.postRelationship);
router.get("/getRelationship", controller.zodiacController.getRelationship);
module.exports = {
  zodiac: router,
};
