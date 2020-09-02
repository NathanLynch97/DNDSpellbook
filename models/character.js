var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const spellSchema = new Schema({ index: 'string' })

const characterSchema = new Schema({
  name: String,
  class: String,
  level: Number,
  spells: [spellSchema],
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Character', characterSchema);