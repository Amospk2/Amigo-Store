const Card = require('../models/Card');
const User = require('../models/User');


module.exports = {
    async create(req, res) {
        try {
            const { number, cvv, expDate, userID } = req.body;
            if (number, cvv, expDate, userID) {
                const user = await User.findOne({ where: { idUser: userID } });

                const card = await Card.create({
                    number,
                    cvv,
                    expDate
                });

                user.addCard(card);
                user.save();
                res.status(201).json(card);
            } else {
                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            res.send(500).json({ msg: 'Falha ao criar cartão' }, error);
        }
    },
    async update(req, res) {
        try {
            const { number, cvv, expDate } = req.body;

            if (number, cvv, expDate) {

                if (await findCardWithId(req.params.id)) {
                    return res.status(404).json({ msg: 'Cartão não encontrado.' });
                }

                await Card.update({
                    number,
                    cvv,
                    expDate
                }, {
                    where: {
                        idCard: req.params.id
                    },

                });
                const card = await Card.findOne({ where: { idCard: req.params.id } });
                res.status(200).json(card);


            } else {
                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao atualizar cartão.' }, error);
        }
    },
    async show(req, res) {
        try {
            const card = await Card.findOne({ where: { idCard: req.params.id } });

            if (card)
                return res.status(200).json(card);
            else
                return res.status(404).json({ msg: 'Cartão não encontrado.' });

        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar cartão.' }, error);
        }
    },
    async list(req, res) {
        try {
            const card = await Card.findAll();
            return res.status(200).json(card);
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar cartões.' }, error);
        }
    },
    async delete(req, res) {
        try {
            if (await findCardWithId(req.params.id)) {
                return res.status(404).json({ msg: 'Cartão não encontrado.' });
            }
            await Card.destroy({
                where: {
                    idCard: req.params.id
                }
            });
            return res.json({ msg: 'Exclusão feita com sucesso!' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: 'Falha ao excluir cartão.' }, error);
        }
    },


}


async function findCardWithId(id) {
    return await Card.findOne({ where: { idCard: id } }) == null;
}