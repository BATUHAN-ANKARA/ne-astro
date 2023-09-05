const express = require("express");
const configs = require("./configs/index");
const db = require("./db/index");
const consts = require("./consts/index");
const router = require("./routers/index");

const app = express();

configs.serverConfig.initialServerConfig();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(`${process.env.APP_PREFIX}${consts.router.USER}`, router.userRouter);
app.use(`${process.env.APP_PREFIX}${consts.router.ZODIAC}`, router.zodiacRouter)
//app.use('/api/v1/user', router.userRouter)

db.mongooseConnection.connectMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
  });
});
