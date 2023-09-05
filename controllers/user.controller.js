const { StatusCodes } = require("http-status-codes");
const userService = require("../services/index");
const baseResponse = require("../dto/baseResponse.dto");

exports.createUser = async (req, res) => {
  try {
    const json = await userService.user.createUser(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.CREATED,
      timestamp: new Date(),
      message: "Kullanıcı kaydı başarılı.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const json = await userService.user.getUserById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Kullanıcı başarılı şekilde bulundu.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.getUserByName = async (req, res) => {
  try {
    const json = await userService.user.getUserByName(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Kullanıcı başarılı şekilde bulundu.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const json = await userService.user.updateUser(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Kullanıcı başarılı şekilde güncellendi.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const json = await userService.user.updatePassword(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Kullanıcı şifresi güncellendi.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const json = await userService.user.login(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Giriş başarılı!",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
