const Card = require('../models/cardsdata');

// Create a new card (requires authentication)
const createCard = async (req, res) => {
  const { cardName, cardTitle, cardBullets, cardImage, cardParagraph, category } = req.body; // Include category

  try {
    const newCard = new Card({
      cardName,
      cardTitle,
      cardBullets,
      cardImage,
      cardParagraph,
      category // Add category to new card
    });

    await newCard.save();
    res.status(201).json({ message: 'Card created successfully', card: newCard });
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single card or all cards (public and user access)
const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update card data (requires authentication)
const updateCard = async (req, res) => {
  const { id } = req.params;
  const { cardName, cardTitle, cardBullets, cardImage, cardParagraph, category } = req.body; // Include category

  try {
    const updatedCard = await Card.findByIdAndUpdate(
      id,
      { cardName, cardTitle, cardBullets, cardImage, cardParagraph, category }, // Add category to update
      { new: true }
    );

    if (!updatedCard) {
      return res.status(404).json({ error: 'Card not found' });
    }

    res.json({ message: 'Card updated successfully', card: updatedCard });
  } catch (error) {
    console.error('Error updating card:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a card (requires authentication)
const deleteCard = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCard = await Card.findByIdAndDelete(id);

    if (!deletedCard) {
      return res.status(404).json({ error: 'Card not found' });
    }

    res.json({ message: 'Card deleted successfully' });
  } catch (error) {
    console.error('Error deleting card:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller to view all cards (accessible to both logged-in and public users)
const viewAllCards = async (req, res) => {
  try {
    const cards = await Card.find(); // Fetch all cards from the database
    res.status(200).json(cards); // Respond with the list of cards
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// Get cards by category (public access)
const getCardsByCategory = async (req, res) => {
  const { category } = req.params;
  
  try {
    const cards = await Card.find({ category }); // Fetch cards matching the category
    res.status(200).json(cards);
  } catch (error) {
    console.error('Error fetching cards by category:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { createCard, getCards, updateCard, deleteCard, viewAllCards, getCardsByCategory };
