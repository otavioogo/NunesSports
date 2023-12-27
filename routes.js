const express = require('express');
const { Product } = require('./models');

const router = express.Router();

/* CRUD DO PROJETO*/

// Listar produtos
router.get('/products', async (req, res) => {
 const products = await Product.findAll();
 res.json(products);
});


// Criar produto
router.post('/products', async (req, res) => {
 const { name, code, description, price } = req.body;
 const product = await Product.create({ name, code, description, price });
 res.json(product);
});


// Editar produto
router.put('/products/:id', async (req, res) => {
 const { id } = req.params;
 const { name, code, description, price } = req.body;
 const product = await Product.findByPk(id);
 if (product) {
    await product.update({ name, code, description, price });
    res.json(product);
 } else {
    res.status(404).json({ error: 'Produto não encontrado' });
 }
});


// Deletar produto
router.delete('/products/:id', async (req, res) => {
 const { id } = req.params;
 const product = await Product.findByPk(id);
 if (product) {
    await product.destroy();
    res.json({ message: 'Produto deletado com sucesso' });
 } else {
    res.status(404).json({ error: 'Produto não encontrado' });
 }
});


module.exports = (app) => {
 app.use(router);
};