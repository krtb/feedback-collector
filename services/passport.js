const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys') // require keys object

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