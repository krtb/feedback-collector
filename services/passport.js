const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose');
const keys = require('../config/keys') // require keys object

// use model calss to create new instance of a User
// testing envs, like mocha, cause issue w/Mongoose when repeatedly calling it
// instead of require, will use different method
const User = mongoose.model('users');

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
        console.log('profile', profile);

        done(null, profile);
    }
));