var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars') // set up view
var path = require('path');
var publicPath =  path.join(__dirname, './app/public');
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(publicPath));

// For Passport

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './app/views')
app.engine("hbs", exphbs({ defaultLayout: "main" }));
// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));

app.set('view engine', '.hbs');

app.get('/', function(req, res) {

    // res.send('Welcome to Passport with Sequelize');
res.render('signin.hbs');
});
//test
app.get('/home', function(req, res) {
  res.render('main.hbs');
})


//Models
var models = require("./app/models");

// import this route in our server.js and pass app as an argument.
//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);

//load passport strategies : below route import
require('./app/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});



app.listen(5000, function(err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});
