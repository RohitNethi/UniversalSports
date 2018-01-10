//Server Setup
var express         = require("express"),
    bodyParser      = require("body-parser"),
    mongoose        = require('mongoose'),
    app             = express(),
    nodemailer      = require('nodemailer'),
    Member          = require('./models/member'),
    Admin           = require('./models/admin'),
    flash           = require('connect-flash'),
    passport        = require('passport'),
    seedDB          = require('./seeds'),
    sanitizer       = require('express-sanitizer'),
    LocalStrategy   = require('passport-local'),
    transporter     = require('./middleware/middleware');

mongoose.connect("mongodb://localhost/universalsports");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("assets"));

app.use(require('express-session')({
    secret : "This is the secret to getting a job",
    resave : false,
    saveUninitialized : false
}));

app.use(sanitizer());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

app.use(flash());

app.use(function(req,res,next){
   res.locals.currentUser   = req.user;
   res.locals.error         = req.flash("error");
   res.locals.success       = req.flash("success");
   next();
});

seedDB();
//Routes

app.get("/", function(req,res){
   res.render("index");
});

app.get("/index", function(req,res){
   res.render("index");
});

app.get("/about", function(req,res){
   res.render("about"); 
});



//Routes 
var contactRoutes = require('./routes/contact'),
    trendingRoutes = require('./routes/trending');
    //adminRoutes = require('./routes/admin');


app.use("/contact", contactRoutes);
//app.use("/admin", adminRoutes);
app.use("/trending", trendingRoutes);


//Listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

