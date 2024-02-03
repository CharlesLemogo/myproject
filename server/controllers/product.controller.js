const Product = require('../models/product.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
          /* The method below is new */
module.exports.createProduct = (request, response) => {
    Product.create(request.body) 
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProduct = (request, response) => {
    Product.find({})
        .then(products=> {
            console.log(products); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(products);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
  }
  
  module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err));
  }
  
  module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}