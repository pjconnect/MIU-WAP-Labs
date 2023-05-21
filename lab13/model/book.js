class Book{
    id;
    title;
    ISBN;
    publishDate;

    constructor(id, title, isbn, publishDate){
        this.id = id;
        this.title = title;
        this.ISBN = isbn;
        this.publishDate = publishDate;
    }
}

module.exports = Book;