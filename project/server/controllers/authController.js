const user = require('../models/user');


exports.login = (req, res) => {
    const u = user.getAll().find(user => user.username.toLowerCase() === req.body.username.toLowerCase() && user.password === req.body.password);
    if(u){
        res.json({accessToken: `${u.id}-${u.username}-${Date.now().toString()}`})
    } else {
        res.json({error: 'Invalid username and password!'});
    }
}