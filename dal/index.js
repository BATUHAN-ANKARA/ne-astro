const userDal = require("./user.dal");
const zodiacDal = require("./zodiac.dal");

module.exports = {
  user: userDal,
  zodiac: zodiacDal,
};
