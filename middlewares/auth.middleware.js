const helper = require("../utils/index");
const { StatusCodes } = require("http-status-codes");
const consts = require("../consts/index");

module.exports = (req, res, next) => {
  try {
    if (!req.url.includes("/api/v1/user/login")) {
      const token = req.headers.authorization.split(" ")[1];
      console.log("token=>", token);
      const decodeToken = helper.helper.verifyToken(token);
      if (decodeToken.decodeToken === null) {
        console.log("null");
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ message: consts.auth.UNAUHTORIZATION_MESSAGE });
      }
      req.user = decodeToken;
      next();
      return;
    }
    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ message: consts.auth.UNAUHTORIZATION_MESSAGE });
  }
};
