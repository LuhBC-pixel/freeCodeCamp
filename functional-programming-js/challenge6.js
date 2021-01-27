// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
    let books = [...arr];
    books.push(bookName);
    return books;
}

function remove(arr, bookName) {
    var book_index = arr.indexOf(bookName);
    let bookRemoved = [...arr];
    if (book_index >= 0) {

        bookRemoved.splice(book_index, 1);
        return bookRemoved;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newestBookList);