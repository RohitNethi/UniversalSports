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


module.exports = router;