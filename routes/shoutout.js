var express     = require('express'),
    passport    = require('passport'),
    router      = express.Router(),
    Shoutout    = require('../models/shoutout'),
    Admin       = require('../models/admin'),
    Member      = require('../models/member'),
    middleware  = require('../middleware/middleware');
    

//Get all trending posts
router.get("/", function(req,res){
    res.render("trending/index");
});

//Get a trending post form - Admin only
router.get("/new", middleware.isLoggedIn , function(req,res){
   res.render("trending/new") 
});

//This posts to the trending page and displays index - Admin only
router.post("/", middleware.isLoggedIn, function(req,res){
   res.redirect("trending/index"); 
});

//Edit form for modifying trending post - Admin only
router.get("/edit", middleware.isLoggedIn, function(req,res){
   res.render("trending/edit"); 
});

//Puts into trending post to edit - Admin only
router.put("/", middleware.isLoggedIn, function(req,res){
    res.redirect("trending/index");
})

module.exports = router;