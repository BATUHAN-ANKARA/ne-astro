const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const relationshipSchema = new Schema(
  {
    title1: {
      type: Schema.Types.String,
      required: false,
    },
    title2: {
      type: Schema.Types.String,
      required: false,
    },
    relationship: {
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

const Relationship = mongoose.model(
  "Relationship",
  relationshipSchema,
  "relationship"
);

module.exports = Relationship;
