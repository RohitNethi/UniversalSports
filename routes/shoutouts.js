var express     = require('express'),
    passport    = require('passport'),
    app         = express(),
    router      = express.Router(),
    Shoutout    = require('../models/shoutout'),
    middleware  = require('../middleware/middleware');
    

//Get all shoutouts
router.get("/", function(req,res){
    Shoutout.find({}, function(err,foundShoutout){
        if(err){
            req.flash("error",err);
            res.redirect("back");
        }
        else{
            res.render("shoutouts", {shoutout: foundShoutout});
        }
    })
});

router.get("/:id/edit", middleware.isLoggedIn, function(req,res){
    Shoutout.findById(req.params.id, function(err,foundShoutout){
        console.log(foundShoutout);
        if(err){
            req.flash("error",err);
            res.redirect("/shoutouts");
        }
        else{
            res.render("editshoutout", {shoutout: foundShoutout});
        }
    });
});

router.put("/:id", middleware.isLoggedIn, function(req,res){
    
    Shoutout.findByIdAndUpdate(req.params.id, req.body.shoutout, function(err,updatedShoutout){
        if(err){
           req.flash("error",err);
            res.redirect("/shoutouts");
        }
        else{
            req.flash("success", "Successfully updated Shoutout");
            res.redirect("/shoutouts");
        }
    });
});



module.exports = router;