// require = using common JS modules,
// import express = makes use of ES2015 modules
const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys') // require keys object

const app = express()

// passport.use = make passport aware of new strategy
// create new instance of Google Passport Strategy, pass in configurations
passport.use(new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'http://localhost:5000/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {

        console.log('ACCESS TOKEN', accessToken);
        console.log('REFRESH TOKEN', refreshToken);
        console.log('profile:', profile);
        
        done(null, profile);
    }
));

// user comes to this route,
// managed by passport,
// asking for specific scopes from users google account
app.get('/auth/google', 
    passport.authenticate('google', {
    scope: [
        'profile', 'email'
    ]
    }
    )
)

app.get('/auth/google/callback', passport.authenticate('google'))

// HEROKU injects env vars, after deployment
// OR, if there isn't a prod env variable, set it to be 5000 for local dev
const PORT = process.env.PORT || 5000
console.log(`App is running on port ${PORT}`)
app.listen(PORT)