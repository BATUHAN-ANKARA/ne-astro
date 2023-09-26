const { body, query, param } = require("express-validator");

const userValidator = {
  validateLogin() {
    return [
      body("email").not().isEmpty().isEmail(),
      body("password").not().isEmpty(),
      body("password").isLength({ min: 4, max: 8 }),
    ];
  },
  validateRegister() {
    return [
      body("name").not().isEmpty(),
      body("surname").not().isEmpty(),
      body("birthDate").not().isEmpty(),
      body("password").not().isEmpty(),
      body("password").isLength({ min: 4, max: 8 }),
      body("email").not().isEmpty().isEmail(),
    ];
  },
};

module.exports = userValidator;
