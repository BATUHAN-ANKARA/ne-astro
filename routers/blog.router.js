const express = require("express");
const controller = require("../controllers/index");
const router = express.Router();

router.post("/postBlog", controller.blogController.postBlog);
router.get("/getBlogById/:id", controller.blogController.getBlogById);
router.get("/listAll", controller.blogController.listAll);
module.exports = {
  blog: router,
};
