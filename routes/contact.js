var express     = require('express'),
    app         = express(),
    router      = express.Router(),
    middleware  = require('../middleware/middleware'),
    Contact     = require('../models/contact');

router.post("/", function(req,res){
    var contact = {
        email: req.body.person.email,
        relationship: req.body.person.relationship,
        message: req.body.person.message
    }
    Contact.create(contact,function(err,newPerson){
        if(err){
            console.log("error");
        }
        else{
            console.log("success");
            var mailOptions = {
            from: 'beyrohit@gmail.com', // sender address
            to: "beyrohit@gmail.com", // list of receivers
            subject: 'Web Universal Sports', // Subject line
            text: 'Email: '+ contact.email + '\n Relationship: ' +contact.relationship +
                    '\n Message: ' + contact.message, // plain text body
            }
            // send mail with defined transport object
            middleware.transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                }
                else{
                    console.log("Successfully mailed");
                }
                });
            }
            
        });
        res.send(contact);
    });
    
module.exports = router;