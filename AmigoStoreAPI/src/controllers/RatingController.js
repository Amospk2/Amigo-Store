const Rating = require('../models/Rating');

module.exports = {
    async create(req, res) {
        try {
            const { descricao, rate, userID, productID } = req.body;
            if (descricao, rate, userID, productID) {
                const rating = await Rating.create({ description: descricao, rate: rate, userIdUser: userID, ProductIdProduct: productID });
                return res.status(201).json(rating);
            } else {

                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            if (error.name = 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ msg: 'Este usuário já avaliou este produto.' });
            }

            return res.status(500).json({ msg: 'Falha ao registrar avaliação.' }, error);
        }
    },
    async update(req, res) {
        try {
            const { descricao, rate, userID, productID } = req.body;
            const rating = await Rating.findOne({ where: { idRating: req.params.id } });
            if (descricao, rate, userID, productID) {
                if (!rating) {
                    return res.status(404).json({ msg: 'Avaliação não encontrada.' });
                }
                await Rating.update(
                    { description: descricao, rate: rate, userIdUser: userID, ProductIdProduct: productID },
                    { where: { idRating: req.params.id } }
                );

                return res.status(200).json(await Rating.reload());
            }
            else {
                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao atualizar avaliação.' }, error);
        }
    },
    async show(req, res) {
        try {
            const rating = await Rating.findAll({ where: { ProductIdProduct: req.params.id }, });
            if (rating)
                return res.status(200).json(rating);
            else
                return res.status(404).json({ msg: 'Avaliação não encontrada.' });
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar avaliação.' }, error);
        }
    },
    async list(req, res) {
        try {
            const rating = await Rating.findAll({ userIdUser: req.params.id });
            return res.status(200).json(rating);
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar avaliações.' }, error);
        }
    },
    async delete(req, res) {
        try {
            const rating = await Rating.findOne({ where: { idRating: req.params.id } });
            if (!rating) {
                return res.status(404).json({ msg: 'Avaliação não encontrada.' });
            }
            await rating.destroy();
            await rating.save();
            return res.status(200).json({ msg: 'Exclusão feita com sucesso!' });
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao excluir avaliação.', error });

        }
    }
}


