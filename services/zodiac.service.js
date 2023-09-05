const Zodiac = require("../models/zodiac.model");
const zodiacDal = require("../dal/index");
const axios = require("axios");
const cheerio = require("cheerio");

exports.createZodiac = async (req) => {
  try {
    const { title, daily, weekly, monthly } = req.body;
    const zodiac = new Zodiac({
      title,
      daily,
      weekly,
      monthly,
    });
    const json = await zodiacDal.zodiac.create(zodiac);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getDaily = async (req) => {
  const { title } = req.params;
  try {
    const res = await axios.get(
      `https://www.hurriyet.com.tr/mahmure/astroloji/${title}-burcu/`
    );
    const $ = cheerio.load(res.data);
    return `${$(
      `body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div > p`
    ).text()}`;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getWeekly = async (req) => {
  const { title } = req.params;
  try {
    const res = await axios.get(
      `https://www.hurriyet.com.tr/mahmure/astroloji/${title}-burcu-haftalik-yorum/`
    );
    const $ = cheerio.load(res.data);
    return `${$(
      `body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`
    ).text()}`;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getMonthly = async (req) => {
  const { title } = req.params;
  try {
    const res = await axios.get(
      `https://www.hurriyet.com.tr/mahmure/astroloji/${title}-burcu-aylik-yorum/`
    );
    const $ = cheerio.load(res.data);
    return `${$(
      `body > div > div:nth-child(2) > div > div > div.region-type-2.col-lg-8.col-md-12 > div > div.horoscope-detail-tab > div.horoscope-detail-content > div`
    ).text()}`;
  } catch (error) {
    throw new Error(error);
  }
};
