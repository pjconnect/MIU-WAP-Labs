class DbContext {
    books = [];

    static thisContext = null;

    static getDbContext() {
        if (this.thisContext == null) {
            this.thisContext = new DbContext();
        }
        return this.thisContext;
    }

    //books
    addBook(book) {
        this.books.push(book);
    }

    updateBook(bookId, book) {
        let index = this.books.findIndex(t => t.id == bookId);
        if (index != -1) {
            this.books[index] = book;
            return this.books[index];
        }
        return {success: false, message: 'not found'}
    }

    deleteBook(bookId) {
        const i = this.books.findIndex(t => t.id == bookId);
        this.books.splice(i, 1);
    }
}

module.exports = DbContext;