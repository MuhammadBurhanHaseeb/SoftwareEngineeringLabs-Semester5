const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.post('/card',cardController.createCard);
router.get('/getCard',cardController.getCard);
router.put('/updateCard/:id',cardController.updateCard);
router.delete('/deleteCard/:id',cardController.deleteCard);
module.exports = router;