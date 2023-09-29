const Blog = require("../models/blog.model");

const BlogDataAccess = {
  async create(blogModel) {
    return await blogModel.save();
  },
  async findOne(where) {
    return await Blog.findOne(where);
  },
  async find(where) {
    return await Blog.find(where);
  },
  async findById(id) {
    return await Blog.findById({ _id: id });
  },
  async updateById(id, body) {
    return await Blog.findByIdAndUpdate({ _id: id }, body, { new: true });
  },
};

module.exports = BlogDataAccess;
