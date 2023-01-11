const User = require('../models/User');


module.exports = {
    async create(req, res) {
        try {
            const { name, email, birthDate, image, password } = req.body;
            const user = await User.create({ name, email, type: "User", birthDate, image, password });
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}