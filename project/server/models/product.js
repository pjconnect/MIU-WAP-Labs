

let db = [];
let counter = 0;

module.exports = class Product {
    constructor(id, title, url, stock, price) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.stock = stock;
        this.price = price;
    }

    save(){
        this.id = ++counter; //start with 1;
        db.push(this);
        return this;
    }

    edit(){
        const index = db.findIndex(prod => prod.id == this.id);
        db.splice(index, 1, this);
        return this;
    }

    static deductStock(id, qty) {
        const prod = db.find(prod => prod.id == id);
        prod.stock -= qty;
    }

    static getAll(){
        return db;
    }

    static deleteById(prodId){
        const index = db.findIndex(prod => prod.id == prodId);
        const deletedProd = db[index];
        db.splice(index, 1);
        return deletedProd;
    }

}
