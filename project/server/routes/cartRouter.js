const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.post('/', cartController.addToCart);
router.get('/', cartController.getAll);
router.post('/purchase', cartController.purchase);
router.delete('/:productId', cartController.removeFromCart);


module.exports = router;