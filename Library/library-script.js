//Array to store data
let library = [];

let newBookButton = document.querySelector('#new-book-button');
let newBookForm = document.querySelector('#new-book-form');
newBookForm.style.display = 'none';

//Activate the new book button
newBookButton.addEventListener('click', () => {
    newBookForm.style.display = 'block';
 });

//Submit button funciton to add new book to array
document.querySelector('#submit-button').addEventListener('click', () => {
    event.preventDefault();
    addBook();
});

//Instantion of the new book
function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
};

//Object method to add new book to library
function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let numberOfPages = document.querySelector('#pages').value;
    let read = document.querySelector('#read-checkbox').checked;
    let newBook = new Book(title, author, numberOfPages, read);
    library.push(newBook);
    console.log(library);
};

//Renders the book as cards in a div element
function renderBook() {
    let libraryElement = document.querySelector('.library');
    for(const element of library) {
        let book = element;
        let newBook = document.createElement('div');
       
    };
    
}