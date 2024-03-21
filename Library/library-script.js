let newBookButton = document.querySelector('#new-book-button');
let newBookForm = document.querySelector('#new-book-form');
newBookForm.style.display = 'none';

let library = [];

function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let numberOfPages = document.querySelector('#pages').value;
    let read = document.querySelector('#read-checkbox').checked;
    let newBook = new Book(title, author, numberOfPages, read);
    library.push(newBook);
    console.log(library);
    //library.push(newBook);
};

function Book(title, author, numberOfPages, read) {

     this.title = title;
     this.author = author;
     this.numberOfPages = numberOfPages;
     this.read = read;

};

document.querySelector('#submit-button').addEventListener('click', () => {
    event.preventDefault();
    addBook();
});


newBookButton.addEventListener('click', () => {
   newBookForm.style.display = 'block';
});
