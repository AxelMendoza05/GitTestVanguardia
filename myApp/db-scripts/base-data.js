const BooksModel = require("../db-models/books.model")

module.exports = loadData = async ()=>{
    for (const book of booksJSON){
        await BooksModel.create(book);
    }

    console.log(`---LOADED ${booksJSON.length} BOOKS INTO DATABASE---`);
};