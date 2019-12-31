// require = using common JS modules,
// import express = makes use of ES2015 modules
const express = require('express')
require('./services/passport')
// below takes app object and attaches two routes to it
const authRoutes = require('./routes/authRoutes')
const app = express()

// call authRoutes with the app object
authRoutes(app)

// HEROKU injects env vars, after deployment
// OR, if there isn't a prod env variable, set it to be 5000 for local dev
const PORT = process.env.PORT || 5000
console.log(`App is running on port ${PORT}`)
app.listen(PORT)