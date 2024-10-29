const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  cardName: { type: String, required: true },
  cardTitle: { type: String, required: true },
  cardBullets: { type: [String], required: true },
  cardImage: { type: String, required: true },
  cardParagraph: { type: String, required: true },
  category: {
    type: String,
    enum: ['vihar', 'gruh', 'insta'], // Specify allowed categories
    required: true
  }
});

module.exports = mongoose.model('CardData', cardSchema);
