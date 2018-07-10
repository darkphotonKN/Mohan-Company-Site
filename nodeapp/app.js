
// extensions / dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path'); // core nodejs module

const app = express(); // initialize app variable 

// View engine setup 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder 
app.use('/public', express.static(path.join(__dirname, 'public'))); // where to look for pubic static folder

// Body Parser Middleware 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// create route 
app.get('/', (req, res) => {
    res.render('index'); // look for index.handlebars as render output
});

// takes info from submitted post form
app.post('/send', (req, res) => {
    //console.log(req.body); // using body parser
    const output = `
        <p>You have a new message from this contact: </p>
        <h3></h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Company: ${req.body.company} </li>        
            <li>Email: ${req.body.email} </li>
            <li>Phone: ${req.body.phone}</li>                
        </ul>
        <h3>A message came with these details:</h3>
        <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.krantinebhwani.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'darkphoton@krantinebhwani.com', // generated ethereal user
            pass: 'Kranti1992' // generated ethereal password
        },
        tls: { // standard encryption
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <darkphoton@krantinebhwani.com>', // sender address
        to: 'darkphoton@krantinebhwani.com, darkphoton@live.com', // list of receivers
        subject: 'New Message', // Subject line
        text: 'Hello world?', // plain text body
        html: output // output from pre-made 'output' var which took values from form
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        // errors 
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});



app.listen(3000, () => console.log("Server started.."));