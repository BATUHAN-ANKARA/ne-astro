const userRouter = require("./user.router").user;
const zodiacRouter = require("./zodiac.router").zodiac;
const coffeeRouter = require("./coffee.router").coffee;

module.exports = {
  userRouter,
  zodiacRouter,
  coffeeRouter,
};
