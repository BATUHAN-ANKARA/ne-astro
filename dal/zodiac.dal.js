const Zodiac = require("../models/zodiac.model");

const ZodiacDataAccess = {
  async create(zodiacModel) {
    return await zodiacModel.save();
  },
  async findOne(where) {
    return await Zodiac.findOne(where);
  },
  async find(where) {
    return await Zodiac.find(where);
  },
  async findById(id) {
    return await Zodiac.findById({ _id: id });
  },
  async updateById(id, body) {
    return await Zodiac.findByIdAndUpdate({ _id: id }, body, { new: true });
  }
};

module.exports = ZodiacDataAccess
