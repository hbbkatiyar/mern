const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const keys = require('./config/keys');
const app = express();

require('./models/User');
require('./models/Survey');
require('./services/passport');
require('./models/Entity');
require('./models/Crop');

mongoose.connect(keys.mongoURI);

app.use(cors());
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] //This is for automatic encryption of data
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/entityRoutes')(app);
require('./routes/cropRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

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
