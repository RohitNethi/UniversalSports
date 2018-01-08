var mongoose    = require('mongoose'),
    Contact     = require('./models/contact.js'),
    Member      = require('./models/member'),
    contactdata        = [{
        email: "snethi@uncc.edu",
        relationship: "Parent",
        message: "New comment",
        },
    {
        email: "vkandal1@uncc.edu",
        relationship: "Guardian",
        message: "Query regarding sport"
        },
    {
        email: "sdingre@uncc.edu",
        relationship: "self",
        message: "What?",
    }],
    memberdata = [{
    email:       'sdingre@uncc.edu',
    firstname:   'Sneha',
    lastname:    'Dingre',
    Age:         '24',
    Phone:       '7049078939',
    birthday:    '10-24-1993'
    },
    {
    email:       'vkandal1@uncc.edu',
    firstname:   'Vineeta',
    lastname:    'Kandala',
    Age:         '23',
    Phone:       '7044925393',
    birthday:    '09-22-1994'
    }]
    
    function seedDB(){
    //Remove all Campgrounds
    Contact.remove({},function(err){
      if(err){
          console.log("error");
      } 
     else{
          console.log("Removed all comments");
          //Adding a few campgrounds
            contactdata.forEach(function(seed){
                Contact.create(seed,function(err,comment){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(comment);
                    }
                });
            });
     }
    });
    Member.remove({},function(err){
      if(err){
          console.log("error");
      } 
     else{
          console.log("Removed all members");
          //Adding a few campgrounds
            memberdata.forEach(function(seed){
                Member.create(seed,function(err,member){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(member);
                    }
                });
            });
     }
    });
    
}
    //Adding comments

module.exports = seedDB;