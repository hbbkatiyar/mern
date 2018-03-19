const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] //This is for automatic encryption of data
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

/* app: Express app to register this route handler with
get: Watch for incoming requests with this method
/: Watch for requests trying to access /
req: Object representing the incoming request
res: Object representing the outgoing response
res:send(): Immediately send some JSON back to who ever made this request
listen(5000): express telling to node that watch to the any traffic comming from port 5000  */

// Look at the underlying environment that see if they have declared a port for us to use.
const PORT = process.env.PORT || 5000; 
//Here boolean condition has been added to hanle development environment
app.listen(PORT);

//Whenever heroku build any application then it always look into our package.json that we have 
//mentioned any specific version of node and npm or not.
