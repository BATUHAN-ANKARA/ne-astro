const Relationship = require("../models/relationship.model");

const RelationshipDataAccess = {
  async create(relationshipModel) {
    return await relationshipModel.save();
  },
  async findOne(where) {
    return await Relationship.findOne(where);
  },
  async find(where) {
    return await Relationship.find(where);
  },
  async findById(id) {
    return await Relationship.findById({ _id: id });
  },
  async updateById(id, body) {
    return await Relationship.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
  },
};

module.exports = RelationshipDataAccess;
