// require = using common JS modules,
// import express = makes use of ES2015 modules
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
require('./models/User') //define user model, before Passport makes use of it
require('./services/passport')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, });

// below takes app object and attaches two routes to it
const app = express()

app.use(bodyParser.json());

// using Cookie-session package, as express doesn't handle by default
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
// tell passport that it should make user of cookies
app.use(passport.initialize())
app.use(passport.session())
// call authRoutes with the app object
// require returns a function, what was written in the file
// then immediately call that function with the app object
require('./routes/authRoutes')(app)
// route returns a function which them is immediately called with app
require('./routes/billingRoutes')(app);


// configuration for Express, ONLY when in production environment
if(process.env.NODE_ENV === 'production'){
    // Express will serve up production assets
    // like main.js or main.css files
    app.use(express.static('client/build'));
    // Express will sever up the index.html file
    // if it doesn't recognize the route.
    const path  = require('path');
    app.get('*', (req, res)=> {
        path.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


// HEROKU injects env vars, after deployment
// OR, if there isn't a prod env variable, set it to be 5000 for local dev
const PORT = process.env.PORT || 5000
console.log(`App is running on port ${PORT}`)
app.listen(PORT)