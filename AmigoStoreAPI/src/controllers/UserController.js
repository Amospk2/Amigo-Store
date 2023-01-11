const User = require('../models/User');
const { Op } = require("sequelize");

module.exports = {
    async list(req, res) {
        try {
            const user = await User.findAll()
            return res.status(200).json(user);
        } catch (error) {
            return console.error("Falha ao listar usuários.", error);
        }
    },
    async show(req, res) {
        try {
            const user = await User.findAll({ where: { id: req.params.id } });
            return res.status(200).json(user);
        } catch (error) {
            return console.error({ msg: `Falha ao buscar usuário.` }, error);
        }
    },
    async create(req, res) {
        try {
            const { name, email, birthDate, image, password } = req.body;
            const user = await User.create({ name, email, type: "User", birthDate, image, password });
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send({ msg: `Falha ao criar usuário.` }, error);
        }
    },
    async update(req, res) {
        const { name, email, birthDate, type, image, password } = req.body;
        try {
            const user = await User.update({ name, email, birthDate, type, image, password }, { where: { id: { [Op.eq]: req.params.id } } });
            return res(200).json(user);
        } catch (err) {
            return res.status(400).json({ msg: `Falha ao atualizar usuário.` }, err);
        }
    },
    async delete(req, res) {
        try {
            await User.destroy({ where: { id: req.params.id } });
            return res.json({ msg: `Exclusão feita com sucesso!` });
        } catch (error) {
            return console.error({ msg: `Falha ao excluir usuário.` }, error);
        }
    },
}