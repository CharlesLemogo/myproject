const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/products', ProductController.createProduct);     
    app.get('/products', ProductController.getAllProduct);     
    app.get('/products/:id', ProductController.getProduct); 
    app.patch('/products/:id', ProductController.updateProduct);
    app.delete('/products/:id', ProductController.deleteProduct);
}

