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

exports.getCoffeeByUser = async (req) => {
  try {
    const { userId } = req.params;
    const json = await coffeeDal.coffee.find({ user: userId });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCoffeeById = async (req) => {
  try {
    const { id } = req.params;
    const json = await coffeeDal.coffee.findById(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCoffeeById = async (req) => {
  try {
    const { id } = req.params;
    const { status, result } = req.body;
    const json = await coffeeDal.coffee.updateById(id, {
      status,
      result,
    });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getFinishedCoffee = async (req) => {
  try {
    const { userId } = req.params;
    const json = await coffeeDal.coffee.find({ user: userId, status: "Bitti" });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCanceledCoffee = async (req) => {
  try {
    const { userId } = req.params;
    const json = await coffeeDal.coffee.find({ user: userId, status: "İptal" });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getContinueCoffee = async (req) => {
  try {
    const { userId } = req.params;
    const json = await coffeeDal.coffee.find({
      user: userId,
      status: "Hazırlanıyor",
    });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
