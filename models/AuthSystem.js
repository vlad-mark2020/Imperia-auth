// models/AuthSystem.js
const mongoose = require('mongoose');

const AuthSystemSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  lastActive: { type: Date, required: true }
});

module.exports = mongoose.model('AuthSystem', AuthSystemSchema);
