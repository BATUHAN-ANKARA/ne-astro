const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coffeeSchema = new Schema(
  {
    uri: [
      {
        type: Schema.Types.String,
        required: false,
      },
    ],
    user: {
      type: Schema.Types.String,
      required: false,
    },
    result: {
      type: Schema.Types.String,
      required: false,
      default:
        "Falınız şu an inceleniyor, fal sonucunuzu bildirim olarak görebileceksiniz.",
    },
    status: {
      type: Schema.Types.String,
      required: false,
      default: "Hazırlanıyor",
    },
    uploadedAt: {
      type: Schema.Types.Date,
      required: false,
      default: Date.now,
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true,
  }
);

const Coffee = mongoose.model("Coffee", coffeeSchema, "coffee");

module.exports = Coffee;
