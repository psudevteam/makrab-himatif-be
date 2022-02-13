const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const userSchema = new Schema({
    name: String,
    email: String,
    noWa: Number,
    Nim: Number,
    
  });

  const user = mongoose.model('User', userSchema)
  module.exports = user