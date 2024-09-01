const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cartItems: [
    {
      productId: String,
      title: String,
      quantity: Number,
      price: Number,
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
