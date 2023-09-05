const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const zodiacSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: false,
    },
    daily: {
      type: Schema.Types.String,
      required: false,
    },
    weekly: {
      type: Schema.Types.String,
      required: false,
    },
    monthly: {
      type: Schema.Types.String,
      required: false,
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true,
  }
);

const Zodiac = mongoose.model("Zodiac", zodiacSchema, "zodiac");

module.exports = Zodiac;
