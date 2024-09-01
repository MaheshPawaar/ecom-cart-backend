const User = require('../models/User');
const Cart = require('../models/Cart');

const handleCheckout = async (req, res) => {
  const { user, cartItems } = req.body;
  const { name, email } = user || {};

  try {
    if (!name || !email || !cartItems) {
      throw new Error('Missing required fields: name, email, or cartItems');
    }

    let existingUser = await User.findOne({ email });

    if (!existingUser) {
      existingUser = new User({ name, email });
      await existingUser.save();
    } else {
      existingUser.name = name;
      await existingUser.save();
    }

    const cart = new Cart({ userId: existingUser._id, cartItems });
    await cart.save();

    res.status(200).json({ message: 'Order placed successfully! 🥳' });
  } catch (error) {
    console.error('Error placing order:', error.message);
    res
      .status(500)
      .json({ error: error.message || 'Failed to place order.🥲' });
  }
};

module.exports = { handleCheckout };
