class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class BookFactory{
    addbooktolist(book) {
        let bookList = document.getElementById('book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        bookList.append(row);
        console.log(row);
    }
    clearFields() {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }
    
    showAlert(message, classname){
        const messagediv = document.createElement('div');
        messagediv.className = `alert ${classname}`;
        messagediv.appendChild(document.createTextNode(message));
    
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(messagediv, form);
    
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000)
    }
    
    deleteBook(target){
        if (target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    
    }
}
class Store{
    static getBooks(){
        let books = localStorage.getItem('books');
        if(books === null){
             books = []
        }
        else{
            books = JSON.parse(books);
        }
        return books
    }
    static displaybooks(){
        const bookfactory = new BookFactory();
        const books = Store.getBooks();
        console.log(books);
        books.forEach(function(book){
            bookfactory.addbooktolist(book);
        })

    }
    static addbook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removebook(isbn){
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        })
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded',
Store.displaybooks);

document.getElementById('book-form').addEventListener('submit', function(e){

    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    isbn = document.getElementById('isbn').value;
    const bookfactory = new BookFactory();
    if(title === '' || author === '' || isbn === ''){
        bookfactory.showAlert('Please enter the mandatory fields', 'error');
    }
    else {
        const book = new Book(title, author, isbn);
        bookfactory.addbooktolist(book);
        Store.addbook(book);
        bookfactory.showAlert('Added book successfully', 'success');
        bookfactory.clearFields();
    }
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function(e){
    const bookfactory2 = new BookFactory();
    bookfactory2.deleteBook(e.target);
    Store.removebook(e.target.parentElement.previousElementSibling.textContent);
    bookfactory2.showAlert('Successfully deleted!', 'success');
    e.preventDefault();
});