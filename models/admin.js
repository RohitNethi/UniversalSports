var mongoose = require('mongoose'),
    passportLocalMongoose   = require('passport-local-mongoose'),
    adminSchema = new mongoose.Schema({
    name: String,
	email: String,
	password: String,
});

adminSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Admin",adminSchema);
