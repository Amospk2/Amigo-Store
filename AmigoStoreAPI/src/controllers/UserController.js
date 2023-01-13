const User = require('../models/User');
const { Op } = require("sequelize");
const multer = require('multer');
const parser = multer({ dest: 'public/uploads/' });


module.exports = {
    async list(req, res) {
        try {
            const user = await User.findAll()
            return res.status(200).json({ data: user });
        } catch (error) {
            return res.status(500).json("Falha ao listar usuários.", error);
        }
    },
    async show(req, res) {
        try {
            const user = await User.findOne({ where: { idUser: req.params.id } });
            if (user)
                return res.status(200).json({ data: user });
            else
                return res.status(404).json({ msg: 'Usuário não encontrado.' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: 'Falha ao buscar usuário.' }, error);
        }
    },
    async create(req, res) {
        try {
            if (req.file == undefined) {
                return res.status(404).send({ msg: 'Preencha os campos corretamente antes de enviar.' });
            } else {
                const image = `/uploads/${req.file.filename}`;
                const { name, email, birthDate, password } = req.body;
                if (await User.findOne({ where: { email: email } })) {
                    return res.status(404).json({ msg: 'Usuário já existe.' });
                }
                if (name, email, birthDate, image, password) {
                    const user = await User.create({ name, email, type: "User", birthDate, image, password });
                    res.status(201).send(user);
                } else {
                    return res.status(404).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
                }
            }

        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: 'Falha ao criar usuário.' }, error);
        }
    },
    async update(req, res) {
        try {
            const { name, email, birthDate, type, image, password } = req.body;

            if (name, email, birthDate, type, image, password) {
                if (await findUserWithId(req.params.id)) {
                    return res.status(404).json({ msg: 'Usuário não encontrado.' });
                }

                await User.update({ name, email, birthDate, type, image, password }, { where: { idUser: { [Op.eq]: req.params.id } } });
                const user = await User.findOne({ where: { idUser: req.params.id } });
                return res(201).json({ data: user });

            } else {
                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }

        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao atualizar usuário.' }, error);
        }
    },
    async delete(req, res) {
        try {
            if (await findUserWithId(req.params.id)) {
                return res.status(404).json({ msg: 'Usuário não encontrado.' });
            }
            await User.destroy({ where: { idUser: req.params.id } });
            return res.status(200).json({ msg: 'Exclusão feita com sucesso!' });
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao excluir usuário.' }, error);
        }
    },
}

async function findUserWithId(id) {
    return await User.findOne({ where: { idUser: id } }) == null;
}