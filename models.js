var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  email: String,
  content: String,
  createt: Date
});

exports.Message = mongoose.model("Message", MessageSchema);
