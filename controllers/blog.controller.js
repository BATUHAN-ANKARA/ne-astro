const { StatusCodes } = require("http-status-codes");
const blogService = require("../services/index");
const baseResponse = require("../dto/baseResponse.dto");

exports.postBlog = async (req, res) => {
  try {
    const json = await blogService.blog.postBlog(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.CREATED,
      timestamp: new Date(),
      message: "Blog ekleme başarılı",
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

exports.getBlogById = async (req, res) => {
  try {
    const json = await blogService.blog.getBlogById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "",
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

exports.listAll = async (req, res) => {
  try {
    const json = await blogService.blog.listAll(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.OK,
      timestamp: new Date(),
      message: "Tüm Bloglar",
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