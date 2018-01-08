var express     = require('express'),
    passport    = require('passport'),
    router      = express.Router(),
    Admin       = require('../models/admin'),
    Member      = require('../models/member'),
    middleware  = require('../middleware/middleware');
    


router.get("/",middleware.isLoggedIn, function(req,res){
    res.render("adminpanel/admin");
});

router.get("/login", function(req,res){
   res.render("adminpanel/login"); 
});

router.post("/login", passport.authenticate("local",
    {
        failureRedirect: "/admin/login",
        failureFlash: true
    }), function(req,res){
        req.flash("success", "Welcome " + req.body.username +"!");
        res.redirect("/admin");
    });

//Logout Route
router.get("/logout", function(req,res){
    req.logout();
    req.flash("success","Successfully logged out!");
    res.redirect("/");
});

router.get("/members", middleware.isLoggedIn, function(req,res){
    Member.find({},function(err,members){
        if(err){
            console.log(err);
        }
        else{
            res.render('adminpanel/members', {members: members});
        }
    })
    
});

module.exports = router;
