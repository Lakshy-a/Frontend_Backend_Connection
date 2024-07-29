const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  // other fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
