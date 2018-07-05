const passport = require('passport');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send({ message: 'build deployment' });
    });
    
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/');
        } 
    );

    app.get('/api/logout', (req, res) => {
        //logout is function automatically attached with req object by passport. It kills the cookies
        req.logout();
        //res.send(req.user);
        res.redirect('/');
        // as soon as req.logout() will get executed, passport will automatically destroyed user object associated with req object
    });

    app.get('/api/current_user', (req, res) => {
        //res.send(req.session);
        res.send(req.user);
    });
    
};
