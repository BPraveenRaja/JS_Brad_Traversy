function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function BookFactory(){}

BookFactory.prototype.addbooktolist = function (book){
    bookList = document.getElementById('book-list');
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
BookFactory.prototype.clearFields = function(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}

BookFactory.prototype.showAlert = function(message, classname){
    const messagediv = document.createElement('div');
    messagediv.className = `alert ${classname}`;
    messagediv.appendChild(document.createTextNode(message));

    container = document.querySelector('.container');
    form = document.querySelector('#book-form');
    container.insertBefore(messagediv, form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)
}

BookFactory.prototype.deleteBook = function(target){
    if (target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }

}
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
        bookfactory.showAlert('Added book successfully', 'success');
        bookfactory.clearFields();
    }
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function(e){
    const bookfactory2 = new BookFactory();
    bookfactory2.deleteBook(e.target);
    bookfactory2.showAlert('Successfully deleted!', 'success');
    e.preventDefault();
});