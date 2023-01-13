const Adress = require('../models/Adress');
const { Op } = require("sequelize");

module.exports = {
    async create(req, res) {
        try {
            const { street, neighborhood, zipCode, complement, userID } = req.body;
            if (street, neighborhood, zipCode, complement, userID) {
                const adress = await Adress.create({
                    street: street,
                    neighborhood: neighborhood,
                    zipCode: zipCode,
                    complement: complement,
                    userIdUser: userID
                });
                return res.status(201).json(adress);
            } else {
                return res.status(404).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao registrar endereço.' }, error);
        }
    },
    async update(req, res) {
        try {
            const { street, neighborhood, zipCode, complement } = req.body;
            if (street, neighborhood, zipCode) {
                if (await findAdressWithId(req.params.id)) {
                    return res.status(404).json({ msg: 'Endereço não encontrado.' });
                }
                await Adress.update(
                    { street: street, neighborhood: neighborhood, zipCode: zipCode, complement: complement },
                    { where: { idAdress: { [Op.eq]: req.params.id } } }
                );
                const address = await Adress.findOne({ where: { idAdress: { [Op.eq]: req.params.id } } });
                return res.status(200).json(address);
            }
            else {
                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao atualizar endereço.' }, error);
        }
    },
    async show(req, res) {
        try {
            const address = await Adress.findOne({ where: { idAdress: req.params.id } });
            if (address)
                return res.status(200).json(address);
            else
                return res.status(404).json({ msg: 'Endereço não encontrado.' });
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar endereço.' }, error);
        }
    },
    async findUserAdress(req, res) {
        try {
            const adresses = await Adress.findAll({ where: { userIdUser: req.params.id } });
            return res.status(200).json(adresses);
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar endereço(s).' }, error);
        }
    },
    async delete(req, res) {
        try {
            if (await findAdressWithId(req.params.id)) {
                return res.status(404).json({ msg: 'Endereço não encontrado.' });
            }
            await Adress.destroy({ where: { idAdress: req.params.id } });
            return res.status(200).json({ msg: 'Exclusão feita com sucesso!' });
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao excluir endereço.', error });

        }
    }
}


async function findAdressWithId(id) {
    return await Adress.findOne({ where: { idAdress: id } }) == null;
}