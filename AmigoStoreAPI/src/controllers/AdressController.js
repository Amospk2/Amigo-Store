const Adress = require('../models/Adress');
const { list } = require('./UserController');


module.exports = {
    async create(req, res) {
        try {
            const { rua, bairro, cep, complemento, user } = req.body;
            const adress = await Adress.create({
                street: rua,
                neighborhood: bairro,
                zipCode: cep,
                complement: complemento,
                userIdUser: user
            });
            return res.status(200).json({ msg: `Endereço criado com sucesso.` }, adress);
        } catch (error) {
            return res.status(400).json({ msg: `Falha ao registrar endereço.` }, error);
        }
    },
    async update(req, res) {
        try {
            const { rua, bairro, cep, complemento, user } = req.body;
            const adress = await Adress.update(
                { rua, bairro, cep, complemento, user },
                { where: { id: { [Op.eq]: req.params.id } } }
            );
            res.status(200).json({ msg: `Endereço atualizado com sucesso.`, adress });
        } catch (error) {
            return res.status(400).json({ msg: `Falha ao atualizar endereço.` }, error);
        }
    },
    async show(req, res) {
        try {
            const adresses = Adress.findOne({ where: { idAdress: { [Op.eq]: req.params.id } } });
            res.status(200).json(adresses);
        } catch (error) {
            return res.status(400).json({ msg: `Falha ao encontrar endereço.` }, error);
        }
    },
    async list(req, res) {
        try {
            const adresses = Adress.findAll({ where: { userIdUser: { [Op.eq]: req.params.id } } });
            res.status(200).json(adresses);
        } catch (error) {
            return res.status(400).json({ msg: `Falha ao encontrar endereço(s).` }, error);
        }
    },
    async delete(req, res) {
        try {
            await Adress.destroy({ where: { id: req.params.id } });
            return res.json({ msg: `Exclusão feita com sucesso!` });
        } catch (error) {
            return console.error({ msg: `Falha ao excluir endereço.` }, error);
        }
    }
}