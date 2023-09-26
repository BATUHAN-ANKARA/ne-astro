const winston = require("winston");
const logConfig = require("../configs/index");
const logger = winston.createLogger(logConfig.loggerConfig);

module.exports = logger;
