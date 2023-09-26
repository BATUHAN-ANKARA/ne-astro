const singleImageUploadMiddleware = require("./singleimageupload.middleware");
const multipleImageuploadMiddleware = require("./multipleimageupload.middleware");
const loggerMiddleware = require("./logger.middleware");
const authMiddleware = require("./auth.middleware");

module.exports = {
  singleImageUploadMiddleware,
  multipleImageuploadMiddleware,
  loggerMiddleware,
  authMiddleware,
};
