const Coffee = require("../models/coffee.model");

const CoffeeDataAccess = {
  async create(coffeeModel) {
    return await coffeeModel.save();
  },
  async findOne(where) {
    return await Coffee.findOne(where);
  },
  async find(where) {
    return await Coffee.find(where);
  },
  async findById(id) {
    return await Coffee.findById({ _id: id });
  },
  async updateById(id, body) {
    return await Coffee.findByIdAndUpdate({ _id: id }, body, { new: true });
  },
};

module.exports = CoffeeDataAccess;
