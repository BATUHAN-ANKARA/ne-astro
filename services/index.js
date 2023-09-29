const userService = require("./user.service");
const zodiacService = require("./zodiac.service");
const fileService = require("./file.service");
const coffeeService = require("./coffee.service");
const blogService = require("./blog.service");

module.exports = {
  user: userService,
  zodiac: zodiacService,
  file: fileService,
  coffee: coffeeService,
  blog: blogService,
};
