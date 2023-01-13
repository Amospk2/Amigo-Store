const Product = require('../models/Product');

module.exports = {
    async create(req, res) {
        try {
            if (req.file == undefined) {
                return res.status(404).send({ msg: 'Preencha os campos corretamente antes de enviar.' });
            } else {
                const image = `/uploads/${req.file.filename}`;
                const { titulo, descricao, preco, quantidade, tags, categoriaID } = req.body;
                if (titulo, descricao, preco, quantidade, tags, categoriaID) {
                    const product = await Product.create(
                        {
                            title: titulo, description: descricao,
                            price: preco, quantity: quantidade,
                            tags: tags, image: image,
                            ProductCategoryIdProductCategory: categoriaID
                        }
                    );
                    return res.status(201).json(product);
                } else {

                    return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
                }
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: 'Falha ao registrar produto.' }, error);
        }
    },
    async update(req, res) {
        try {
            const { titulo, descricao, preco, quantidade, tags, image, categoriaID } = req.body;
            const product = await Product.findOne({ where: { idProduct: req.params.id } });
            if (titulo, descricao, preco, quantidade, tags, image, categoriaID) {
                if (!product) {
                    return res.status(404).json({ msg: 'Produto não encontrado.' });
                }
                await Product.update(
                    {
                        title: titulo, description: descricao,
                        price: preco, quantity: quantidade,
                        tags: tags, image: image,
                        ProductCategoryIdProcutCategory: categoriaID
                    },
                    { where: { idProduct: req.params.id } }
                );

                return res.status(200).json(await product.reload());
            }
            else {
                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao atualizar produto.' }, error);
        }
    },
    async show(req, res) {
        try {
            const product = await Product.findOne({ where: { idProduct: req.params.id } });
            if (product)
                return res.status(200).json(product);
            else
                return res.status(404).json({ msg: 'Produto não encontrado.' });
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar produto.' }, error);
        }
    },
    async list(req, res) {
        try {
            const product = await Product.findAll();
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar produto(s).' }, error);
        }
    },
    async delete(req, res) {
        try {
            const product = await Product.findOne({ where: { idProduct: req.params.id } });
            if (!product) {
                return res.status(404).json({ msg: 'Produto não encontrado.' });
            }
            await product.destroy();
            await product.save()
            return res.status(200).json({ msg: 'Exclusão feita com sucesso!' });
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao excluir produto.', error });

        }
    }
}


