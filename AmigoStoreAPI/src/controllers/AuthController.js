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
            if (!user) return res.status(404).json({ msg: "Usuário não encontrado." });
            if (user.authenticate(password)) {
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

                return res.status(404).json({ msg: "Dados incorretos, verifique o contéudo de faça uma nova requisição." });
            }
        } catch (error) {
            res.status(500).json({msg: "Falha ao autentificar usuário."});
        }
    },
    async logout(req, res) {
        req.session.destroy();
        res.status(200).json({ msg: 'logout' });
    }
}