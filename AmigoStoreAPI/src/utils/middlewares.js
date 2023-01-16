const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/User');


module.exports = {
    async AuthCheck(req, res, next) {
        if (!req.session.token) return res.status(401).send('Acesso negado, realize o login no sistema.');
        try {
            const payload = jsonwebtoken.verify(req.session.token, process.env.PRIVATE_KEY);
            const UserIDFromToken = typeof payload != 'string' && payload.user;
            if (!UserIDFromToken) {
                return res.send(401).send({ message: 'Sessão expirada, realize o login no sistema' });
            }
            console.log(req.session.token);
            next();

        } catch (error) {
            return res.status(401).json({ message: 'Sessão expirada, realize o login no sistema' });
        }
    },
    async typeCheck(req, res, next) {
        if (!req.session.token) return res.status(401).send('Acesso negado, realize o login no sistema.');
        try {
            const payload = jsonwebtoken.verify(req.session.token, process.env.PRIVATE_KEY);
            const UserIDFromToken = typeof payload != 'string' && payload.user;
            if (!UserIDFromToken) {
                return res.send(401).send({ message: 'Sessão expirada, realize o login no sistema' });
            } else {
                const user = await User.findOne({ where: { email: payload.user } });
                if (user.type != "User") {
                    return res.status(401).json({ message: 'Sessão expirada, realize o login no sistema' });
                }
            }
            next();

        } catch (error) {
            return res.status(401).json({ message: 'Sessão expirada, realize o login no sistema' });
        }


    }
}