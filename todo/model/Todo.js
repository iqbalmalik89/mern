const mongoose = require("mongoose");

module.exports = mongoose.model('Todo', { title: String, list: Array });