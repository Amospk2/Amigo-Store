const ProductCategory = require('../models/ProductCategory');


module.exports = {
    async create(req, res) {
        try {
            const { name, description } = req.body;
            if (name, description) {
                const productCategory = await ProductCategory.create({ name: name, description: description });
                return res.status(201).json(productCategory);
            } else {
                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao registrar Categoria.' }, error);
        }
    },
    async update(req, res) {
        try {
            const { name, description } = req.body;
            const category = await ProductCategory.findOne({ where: { idProductCategory: req.params.id } });
            if (name, description) {
                if (!category) {
                    return res.status(404).json({ msg: 'Categoria não encontrado.' });
                }
                await ProductCategory.update(
                    { name: name, description: description },
                    { where: { idProductCategory: req.params.id } }
                );

                return res.status(200).json(await category.reload());
            }
            else {
                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao atualizar Categoria.' }, error);
        }
    },
    async show(req, res) {
        try {
            const category = await ProductCategory.findOne({ where: { idProductCategory: req.params.id } });
            if (category)
                return res.status(200).json(category);
            else
                return res.status(404).json({ msg: 'Categoria não encontrado.' });
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar Categoria.' }, error);
        }
    },
    async list(req, res) {
        try {
            const categories = await ProductCategory.findAll();
            return res.status(200).json(categories);
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar Categoria(s).' }, error);
        }
    },
    async delete(req, res) {
        try {
            const category = await ProductCategory.findOne({ where: { idProductCategory: req.params.id } });
            if (!category) {
                return res.status(404).json({ msg: 'Categoria não encontrado.' });
            }
            await category.destroy();
            await category.save()
            return res.status(200).json({ msg: 'Exclusão feita com sucesso!' });
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao excluir Categoria.', error });

        }
    }
}


