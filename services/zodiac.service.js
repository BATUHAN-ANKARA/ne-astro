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

exports.getById = async (req) => {
  const { id } = req.params;
  try {
    const json = await zodiacDal.zodiac.findById(id);
    if (!json) {
      throw new Error("Burç bulunamadı");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getZodiacByTitle = async (req) => {
  const { title } = req.params;
  try {
    const json = await zodiacDal.zodiac.findOne({ title: title });
    if (!json) {
      throw new Error("Burç bulunamadı");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateZodiacById = async (req) => {
  const { id } = req.params;
  const { daily, weekly, monthly } = req.body;
  try {
    const json = await zodiacDal.zodiac.updateById(id, {
      daily,
      weekly,
      monthly,
    });
    if (!json) {
      throw new Error("Burç bulunamadı");
    } else {
      return json;
    }
  } catch (error) {
    throw new Error(error);
  }
};
