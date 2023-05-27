let db = []

module.exports = class  Cart{
    static getAll(user){
        const cartI = db.filter(t => t.user == user);
        return cartI;
    }

    static addItem(item, user){
        let exist = db.find(t => t.prod.id == item.prod.id && t.user == user);
        if(exist){
            exist.qty +=1;
        }else{
            db.push(item);
        }
    }

    static clearAll(user){
        const prod = db.filter(t=> t.user != user);
        db = prod;
    }

    static removeItem(id, user){
        const prod = db.find(t=>t.prod.id == id && t.user == user);
        prod.qty -= 1;
        if(prod.qty <= 0){
            //remove
            let f = db.filter(t=>t.prod.id != id);
            db = f;
        }
    }
}