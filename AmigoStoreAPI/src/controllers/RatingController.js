const Rating = require('../models/Rating');

module.exports = {
    async create(req, res) {
        try {
            const { description, rate, userID, productID } = req.body;
            if (description, rate, userID, productID) {
                const rating = await Rating.create({ description: description, rate: rate, userIdUser: userID, ProductIdProduct: productID });
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
            const { description, rate, userID, productID } = req.body;
            const rating = await Rating.findOne({ where: { idRating: req.params.id } });
            if (description, rate, userID, productID) {
                if (!rating) {
                    return res.status(404).json({ msg: 'Avaliação não encontrada.' });
                }
                await Rating.update(
                    { description: description, rate: rate, userIdUser: userID, ProductIdProduct: productID },
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
    async productRatings(req, res) {
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
    async userRatings(req, res) {
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


