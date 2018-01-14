//Server Setup
var express         = require("express"),
    bodyParser      = require("body-parser"),
    mongoose        = require('mongoose'),
    app             = express(),
    Admin           = require('./models/admin.js'),
    Member          = require('./models/member.js'),
    nodemailer      = require('nodemailer'),
    flash           = require('connect-flash'),
    passport        = require('passport'),
    seedDB          = require('./seeds'),
    sanitizer       = require('express-sanitizer'),
    LocalStrategy   = require('passport-local'),
    methodOverride  = require('method-override'),
    transporter     = require('./middleware/middleware');

mongoose.connect("mongodb://rohitnethi:univsports2018@ds255787.mlab.com:55787/universalsports");
app.use(methodOverride("_method"));
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
    shoutoutRoutes = require('./routes/shoutouts'),
    adminRoutes = require('./routes/admin');


app.use("/contact", contactRoutes);
app.use("/admin", adminRoutes);
app.use("/shoutouts", shoutoutRoutes);


//Listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

