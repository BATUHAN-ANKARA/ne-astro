const userService = require("./user.service");
const zodiacService = require("./zodiac.service");
const fileService = require("./file.service");
const coffeeService = require('./coffee.service')

module.exports = {
  user: userService,
  zodiac: zodiacService,
  file: fileService,
  coffee: coffeeService
};
