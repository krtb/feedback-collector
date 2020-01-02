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
        // add function to check if User instance already exists in DB
        // when reaching out to DB, initiate async action
        // query returns a promise
        User.findOne({ googleId: profile.id })
        .then( (existingUser) => {
            // if User already exists
            if(existingUser) {
                // Done: tells Passport that we have finished creating user, should resume Auth process
                // done takes 2 objects, first is an Error, second is

                // if creating user, no error, pass null
                done(null, existingUser)
            } else {
                // don't have an existing user with this Id, make a new recorda
                // profile.id is coming from signed in user Google profile
                new User({ googleId: profile.id })
                .save()
                .then(user => done(null, user))
            }
        } )

    }
));