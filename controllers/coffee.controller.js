const { StatusCodes } = require("http-status-codes");
const coffeeService = require("../services/index");
const baseResponse = require("../dto/baseResponse.dto");

exports.uploadCoffee = async (req, res) => {
  try {
    const json = await coffeeService.coffee.uploadCoffee(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      success: true,
      code: StatusCodes.CREATED,
      timestamp: new Date(),
      message: "Fal başarılı şekilde oluşturuldu.",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: "Fal eklenemedi! Hata: " + error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

// exports.getCoffeeById = async (req, res) => {
//   try {
//     const json = await caffeService.caffe.getCaffeById(req);
//     res.status(StatusCodes.CREATED).json({
//       ...baseResponse,
//       data: json,
//       success: true,
//       code: StatusCodes.OK,
//       timestamp: new Date(),
//       message: "Kahve parametresine göre kahve falı başarılı şekilde getirildi.",
//     });
//   } catch (error) {
//     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//       ...baseResponse,
//       success: false,
//       error: true,
//       timestamp: new Date(),
//       message: error.message,
//       code: StatusCodes.INTERNAL_SERVER_ERROR,
//     });
//   }
// };