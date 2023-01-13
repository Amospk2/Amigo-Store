const jsonwebtoken = require('jsonwebtoken');

module.exports = {
    async AuthCheck(req, res, next){
        if (!req.session.token) return res.status(401).send('Acesso negado, sessão expirada.');
        try {
            const payload = jsonwebtoken.verify(req.session.token, process.env.PRIVATE_KEY);
            const UserIDFromToken = typeof payload != 'string' && payload.user;
            if (!UserIDFromToken) {
                return res.send(401).send({ message: 'Session Expired' });
            }
            next();

        } catch (error) {
            return res.status(401).json({ message: 'Session Expired' });
        }
    
        
    }
}