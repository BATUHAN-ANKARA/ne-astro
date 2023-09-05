const express = require("express");
const controller = require("../controllers/index");
const router = express.Router();

router.post("/createUser", controller.userController.createUser);
router.post("/login", controller.userController.login);
router.get("/getUserById/:id", controller.userController.getUserById);
router.get("/getUserByName/:name", controller.userController.getUserByName);
router.put("/updateUser/:id", controller.userController.updateUser);
router.put("/updatePassword/:id", controller.userController.updatePassword);
module.exports = {
  user: router,
};
