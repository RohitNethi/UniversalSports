var nodemailer = require('nodemailer'),
    middlewareObj = {};
    
    middlewareObj.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'beyrohit@gmail.com',
        pass: 'PerfectTwo4!'
    }
});

middlewareObj.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else{
        req.flash("error", "Login first!");
        res.redirect("/admin/login");
    }
}

module.exports = middlewareObj;