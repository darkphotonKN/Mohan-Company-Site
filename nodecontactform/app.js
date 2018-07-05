
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
    res.render('contact');
});

app.post('/send', (req, res) => {
    console.log(req.body); // using body parser
});

app.listen(3000, () => console.log("Server started.."));