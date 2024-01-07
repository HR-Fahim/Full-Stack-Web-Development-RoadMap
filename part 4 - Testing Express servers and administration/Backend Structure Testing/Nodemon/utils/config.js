// require('dotenv').config()

// const PORT = process.env.PORT
// const MONGODB_URI = process.env.MONGODB_URI

// module.exports = {
//   MONGODB_URI,
//   PORT
// }

// config.js

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
  MONGODB_URI,
  PORT
};