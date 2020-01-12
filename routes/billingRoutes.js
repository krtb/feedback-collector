const keys = require('../config/keys');
const stripe = require('stripe');

module.exports = app => {
    // create Stripe post request handler for user credit payment
    app.post('/api/stripe', (req, res) => {
        stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })
    })
}