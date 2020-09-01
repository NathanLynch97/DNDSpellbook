var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: String,
  class: String,
  level: Number
});

const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    characters: [characterSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
