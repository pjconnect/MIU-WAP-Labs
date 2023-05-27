const Cart = require("../models/cart");
const Product = require("../models/product");
exports.addToCart = function (req, res, next) {
    const user = req.user;
    const prod = Product.getAll().find(t => t.id == req.body.prodId);
    let exist = Cart.getAll(user).find(t => t.prod.id == req.body.prodId && t.user == user);
    // var x = Cart.getAll();

    if(prod.stock == 0 || exist?.qty + 1 > prod.stock){
        res.status(400).send({error: "no stock"})
        return;
    }

    Cart.addItem({
        qty: 1,
        user,
        prod
    }, user);

    res.send({success: true})
}


exports.purchase = function (req,res,next){
    var cart = Cart.getAll(req.user);
    for(let c of cart){
        Product.deductStock(c.prod.id, c.qty)
    }
    Cart.clearAll(req.user);
    res.send({success:true});
}

exports.removeFromCart = function (req, res, next) {
    Cart.removeItem(req.params.productId, req.user);
    res.send({success: true})
}

exports.getAll = function (req, res, next) {
    res.status(200).send(Cart.getAll(req.user));
}