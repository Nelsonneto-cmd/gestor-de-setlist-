const mongoose = require('mongoose');

const setlistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  bandName: { type: String, required: true },
  songs: [{
    title: { type: String, required: true },
    artist: String,
    key: String,      // Ex: Am, G
    duration: String  // Ex: 3:30
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Setlist', setlistSchema);