const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  model: {
    type: String,
    default: null
  },
  rfid: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model('User', UserSchema);
