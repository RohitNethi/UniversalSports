var mongoose = require('mongoose'),
   memberSchema = new mongoose.Schema({
   email:       String,
   firstname:   String,
   lastname:    String,
   Age:         Number,
   Phone:       Number,
   birthday:    Date,
   created:     {type:Date, default: Date.now}
});

module.exports = mongoose.model("Member", memberSchema);