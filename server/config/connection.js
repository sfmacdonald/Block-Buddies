const mongoose = require('mongoose');

// Define the MongoDB connection URI
const uri = process.env.MONGODB_URI;

// Connect to MongoDB using the defined URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Log MongoDB connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

module.exports = db;