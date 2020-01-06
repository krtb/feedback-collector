const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose');
const keys = require('../config/keys') // require keys object

// use model class to create new instance of a User
// testing envs, like mocha, cause issue w/Mongoose when repeatedly calling it
// instead of require, will use different method
const User = mongoose.model('users');

// take user Model, put some identifying piece of info into the cookie
passport.serializeUser((user, done) => {
    // done is a callback
    // user is object, just pulled out of database below
    done(null, user.id)
})

// deserialize user from above
// pull cookie back out, turn back into a user
passport.deserializeUser((user, done)=> {
    User.find(user.id).then( user => {
        done(null, user)
    })
})
// after deserialized, added to request object as req.user

// passport.use = make passport aware of new strategy
// create new instance of Google Passport Strategy, pass in configurations
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
        // add function to check if User instance already exists in DB
        // when reaching out to DB, initiate async action
        // query returns a promise
        const existingUser = await User.findOne({ googleId: profile.id })
            // if User already exists
            if(existingUser) {
                // Done: tells Passport that we have finished creating user, should resume Auth process
                // done takes 2 objects, first is an Error, second is

                // if creating user, no error, pass null
                done(null, existingUser)
            } else {
                // don't have an existing user with this Id, make a new recorda
                // profile.id is coming from signed in user Google profile
                const user = await new User({ googleId: profile.id }).save()
                done(null, user)
                // user object is then passed to serializer
            }

    }
));