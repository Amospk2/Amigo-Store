const User = require('../models/User');
const jsonwebtoken = require('jsonwebtoken');

module.exports = {
    async auth(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            if (user && user.authenticate(password)) {
                const token = jsonwebtoken.sign({
                    user: user.email
                },
                    process.env.PRIVATE_KEY,
                    { expiresIn: '60m' }
                );
                req.session.token = token;
                req.session.save();
                return res.status(200).json({ data: { token } });
            } else {

                return res.status(400).send("Check Your Request Body!");
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async tokenValidate(req, res) {
        if (!req.session.token) return res.status(401).send('Acess denied. No token provided.');
        try {
            const payload = jsonwebtoken.verify(req.session.token, process.env.PRIVATE_KEY);
            const UserIDFromToken = typeof payload != 'string' && payload.user;
            if (!UserIDFromToken) {
                return res.send(401).send({ message: 'Invalid Token' });
            }
            const user = payload.user;
            return res.status(200).json({ data: { user } });

        } catch (error) {
            return res.status(401).json({ message: 'Invalid Token' });
        }
    },
    async logout(req, res) {
        req.session.destroy();
        res.status(200).send('logout');
    }
}