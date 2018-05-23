const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    // Here express takes the reference of requireLogin function and call this internally as a function
    app.post('/api/stripe', requireLogin, async (req, res) => {

        if(!req.user) {
            return res.status(401).send({ error: 'You must log in!' });
        }

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};

// Here we can inject n number of middlewares, 
// the only requirement is that app.post must have a function for parsing req & respond backk 