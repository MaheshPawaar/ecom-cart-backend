const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const checkoutRoutes = require('./routes/checkout');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

// Routes
app.use('/api', checkoutRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
