//Server Setup

var express         = require("express"),
    bodyParser      = require("body-parser"),
    mongoose        = require('mongoose'),
    app             = express(),
    nodemailer      = require('nodemailer'),
    Member          = require('./models/member'),
    passport        = require('passport'),
    seedDB          = require('./seeds'),
    LocalStrategy   = require('passport-local'),
    transporter     = require('./middleware/middleware');

mongoose.connect("mongodb://localhost/universalsports");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("assets"));

seedDB();
//Routes
app.get("/", function(req,res){
   res.render("index");
});

app.get("/about", function(req,res){
   res.render("about"); 
});


var contactRoutes = require('./routes/contact');

app.use("/", contactRoutes);

//Listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

