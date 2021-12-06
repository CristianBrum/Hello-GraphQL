const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_URL = process.env.ATLAS_URI;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () =>
  db ? Promisse : mongoose.connect(MONGO_DB_URL, OPTIONS);

mongoose.connection.once('open', () => {
  console.log('Connected to Atlas DB');
});

mongoose.connection.on('error', () => {
  console.log('Database Connection Error');
});

module.exports = connection;
