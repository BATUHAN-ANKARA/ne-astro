const helper = require("../utils/index");
const { StatusCodes } = require("http-status-codes");
const consts = require("../consts/index");

module.exports = (req, res, next) => {
  try {
    let query = consts.general.ROUTES.find((item) => {
      if (req.url.includes(item)) {
        return true;
      } else {
        return false;
      }
    });
    if (!query) {
      const token = req.headers.authorization.split(" ")[1];
      const decodeToken = helper.helper.verifyToken(token);
      if (decodeToken.decodeToken === null) {
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
