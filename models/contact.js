var mongoose = require('mongoose'),
   contactSchema = new mongoose.Schema({
   email:   String,
   relationship:    String,
   message: String,
   created: {type:Date, default: Date.now}
});

module.exports = mongoose.model("Contact",contactSchema);