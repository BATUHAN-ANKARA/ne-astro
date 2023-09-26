const fileService = require("./file.service");
const Coffee = require("../models/coffee.model");
const coffeeDal = require("../dal/index");

exports.uploadCoffee = async (req, res) => {
  try {
    const { id } = req.params;
    const arr = await fileService.uploadImageMultiple(req, res);
    const coffee = new Coffee({
      uri: arr,
      user: id,
    });
    const json = await coffeeDal.coffee.create(coffee);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
