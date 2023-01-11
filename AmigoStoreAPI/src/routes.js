const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const authController = require('./controllers/AuthController');
const jsonwebtoken = require('jsonwebtoken');


routes.post("/users", UserController.create);
routes.post("/auth", authController.auth);
routes.get("/valide-token", authController.tokenValidate);

routes.get('/', async (req, res)=>{
    if(req.session.token)
    {
        const userEmail = jsonwebtoken.verify(req.session.token, process.env.PRIVATE_KEY);
        return res.send(userEmail);
    } else {
        return res.send('Token Not Found');
    }
});

routes.get('/logout', async (req, res)=>{
    req.session.destroy();
    res.send('logout');
});



module.exports = routes;