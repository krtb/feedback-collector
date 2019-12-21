// require = using common JS modules,
// import express = makes use of ES2015 modules
const express = require('express')
const app = express()

// app object, represents underlying express server
app.get('/', (req, res) => {
    res.send({ hi: 'there' })
})

console.log('App is running on port')

// HEROKU injects env vars, after deployment
// OR, if there isn't a prod env variable, set it to be 5000 for local dev
const PORT = process.env.PORT || 5000
app.listen(PORT)