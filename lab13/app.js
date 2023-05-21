const express = require('express');
const DbContext = require('./model/dbcontext')
const Book = require('./model/book');
const {books} = require("./model/dbcontext");
const app = express()
const db = DbContext.getDbContext();
app.use(express.json());

app.get('/book', (req, res) => {
    res.status(200).send(books);
})
app.post('/book', (req, res) => {
    const b = new Book(
        db.books.length + 1,
        req.body.title,
        req.body.ISBN,
        req.body.publishDate,
    );
    db.addBook(b);
    res.status(200).send(b);
})
app.put('/book', (req, res) => {
    const b = new Book(
        req.body.id,
        req.body.title,
        req.body.ISBN,
        req.body.publishDate,
    );
    const addedBook = db.updateBook(req.body.id, b);
    res.status(200).send(addedBook)
})
app.delete('/book/:id', (req, res) => {
    db.deleteBook(req.params.id);
    res.status(200).send({delete:true});
})

app.listen(3000, () => {console.log('server started');})