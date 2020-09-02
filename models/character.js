var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: String,
  class: String,
  level: Number
});