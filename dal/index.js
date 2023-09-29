const userDal = require("./user.dal");
const zodiacDal = require("./zodiac.dal");
const coffeeDal = require("./coffee.dal");
const relationshipDal = require("./relationship.dal");
const blogDal = require("./blog.dal");

module.exports = {
  user: userDal,
  zodiac: zodiacDal,
  coffee: coffeeDal,
  relationship: relationshipDal,
  blog: blogDal,
};
