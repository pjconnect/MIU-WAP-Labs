const Product = require('../models/product');

//add sample
new Product(11,"Coffee Machine","https://m.media-amazon.com/images/I/81q-SpYIDUL._AC_SX679_.jpg", 10,9.99,8).save();
new Product(22,"Apple Ipad","https://m.media-amazon.com/images/I/418Ty89Cf3L._AC_SR400,600_.jpg", 11,19.99,5).save();
new Product(33,"Headphones","https://m.media-amazon.com/images/I/61rLO8WiDTL._AC_SY879_.jpg",12, 29.99,13).save();

exports.save = (req, res, next) => {
    const addedProd = new Product(null, req.body.title, req.body.url, req.body.stock, req.body.price).save();
    res.status(201).json(addedProd);
}

exports.getAll = (req, res, next) => {
    res.status(200).json(Product.getAll());
}

exports.deleteById = (req, res, next) => {
    res.json(Product.deleteById(req.params.productId));
}

exports.edit = (req, res) => {
    const editedProd = new Product(req.params.productId, req.body.title, req.body.description, req.body.price).edit();
    res.json(editedProd);
}