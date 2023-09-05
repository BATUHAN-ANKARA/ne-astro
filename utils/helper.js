const md5 = require("md5");

const hashToPassword = (password) => {
  return md5(password);
};

module.exports = {
  hashToPassword,
};
