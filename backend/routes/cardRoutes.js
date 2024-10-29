const express = require('express');
const router = express.Router();
const { createCard, getCards, updateCard, deleteCard, viewAllCards, getCardsByCategory } = require('../controllers/cardController');
const authMiddleware = require('../middleware/authMiddleware');

// Public and authenticated access
router.get('/', getCards);

// Authenticated access only
router.post('/create', authMiddleware, createCard);
router.put('/update/:id', authMiddleware, updateCard);
router.delete('/delete/:id', authMiddleware, deleteCard);

// router.get('/view/', viewCards); add in const if u need
router.get('/view/all', viewAllCards); // Public access
router.get('/view/category/:category', getCardsByCategory); // Public access

module.exports = router;
