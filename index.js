const express = require('express');
const app = express();

// app: Express app to register this route handler with
// get: Watch for incoming requests with this method
// /: Watch for requests trying to access /
// req: Object representing the incoming request
// res: Object representing the outgoing response
// res:send(): Immediately send some JSON back to who ever made this request
// listen(5000): express telling to node that watch to the any traffic comming from port 5000 

app.get('/', (req, res) => {
    res.send({ message: 'build deployment' });
});

// Look at the underlying environment that see if they have declared a port for us to use.
const PORT = process.env.PORT || 5000; 
//Here boolean condition has been added to hanle development environment
app.listen(PORT);

//Whenever heroku build any application then it always look into our package.json that we have 
//mentioned any specific version of node and npm or not.
