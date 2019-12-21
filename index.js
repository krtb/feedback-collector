// require = using common JS modules,
// import express = makes use of ES2015 modules
const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()

console.log('App is running on port')

// HEROKU injects env vars, after deployment
// OR, if there isn't a prod env variable, set it to be 5000 for local dev
const PORT = process.env.PORT || 5000
app.listen(PORT)