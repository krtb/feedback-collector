// require = using common JS modules,
// import express = makes use of ES2015 modules
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/User') //define user model, before Passport makes use of it
require('./services/passport')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, });

// below takes app object and attaches two routes to it
const app = express()

// call authRoutes with the app object
// require returns a function, what was written in the file
// then immediately call that function with the app object
require('./routes/authRoutes')(app)

// HEROKU injects env vars, after deployment
// OR, if there isn't a prod env variable, set it to be 5000 for local dev
const PORT = process.env.PORT || 5000
console.log(`App is running on port ${PORT}`)
app.listen(PORT)