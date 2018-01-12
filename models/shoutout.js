var mongoose = require('mongoose'),
   shoutoutSchema = new mongoose.Schema({
   title:   String,
   message:    String,
   image: String,
   created: {type:Date, default: Date.now}
});

module.exports = mongoose.model("Shoutout",shoutoutSchema);