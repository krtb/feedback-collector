// require npm file
const passport = require('passport')

// user comes to this route,
// managed by passport,
// asking for specific scopes from users google account
module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: [
                'profile', 'email'
            ]
        }
        )
    )

    app.get('/auth/google/callback', passport.authenticate('google'))

    app.get('/api/logout', (req, res) => {
        req.logout()
        res.send(req.user)
    })

    // route that decides IF a user is signed into the application
    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
}
