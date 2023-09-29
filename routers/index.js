const userRouter = require("./user.router").user;
const zodiacRouter = require("./zodiac.router").zodiac;
const coffeeRouter = require("./coffee.router").coffee;
const blogRouter = require("./blog.router").blog;

module.exports = {
  userRouter,
  zodiacRouter,
  coffeeRouter,
  blogRouter,
};
