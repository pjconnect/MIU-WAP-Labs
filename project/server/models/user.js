let db = [
    {id: 1, username: 'John', password: '111'},
    {id: 2, username: 'Edward', password: '222'}
];

module.exports  = class User{
    static getAll(){
        return db;
    }
}