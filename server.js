const express = require("express");
const configs = require("./configs/index");
const db = require("./db/index");
const consts = require("./consts/index");
const router = require("./routers/index");
const utils = require("./utils/index");
const middlewares = require("./middlewares/index");

const app = express();

configs.serverConfig.initialServerConfig();
utils.helper.createUploadDir("./uploads");

const PORT = process.env.PORT || 3000;

app.use("/uploads", express.static("uploads"));
app.use(express.json());

app.use(middlewares.loggerMiddleware);

app.use(`${process.env.APP_PREFIX}${consts.router.USER}`, router.userRouter);
app.use(
  `${process.env.APP_PREFIX}${consts.router.ZODIAC}`,
  router.zodiacRouter
);

db.mongooseConnection.connectMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
  });
});
