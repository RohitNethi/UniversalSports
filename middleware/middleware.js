var nodemailer = require('nodemailer'),
    middlewareObj = {};
    
    middlewareObj.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'beyrohit@gmail.com',
        pass: 'PerfectTwo4!'
    }
});

module.exports = middlewareObj;