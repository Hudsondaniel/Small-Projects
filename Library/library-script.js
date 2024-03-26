//Array to store data
let library = [];

let newBookButton = document.querySelector('.new-book-button');
let newBookForm = document.querySelector('.new-book-form');
newBookForm.style.display = 'none';


//Activate the new book button
newBookButton.addEventListener('click', () => {
    newBookForm.style.display = 'block';
 });

//Submit button funciton to add new book to array
document.querySelector('.submit-button').addEventListener('click', () => {
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

Book.prototype.toggleRead = function () {
    this.read =!this.read;
};

function toggleRead(index) {
    library[index].toggleRead();
    renderBook();
};

//Function to delete the book   
function removeBook(index) {
    library.splice(index, 1)
    renderBook();
};

//Renders the book
function renderBook() {
    let libraryElement = document.querySelector('.library');
    libraryElement.innerHTML = '';
    for(const element of library.entries()) {
        const [index, book] = element;
        let newBook = document.createElement('div');
        newBook.innerHTML = `
        <div class="card-header">
            <h3 class = "title"> ${book.title} </h3>
            <h5 class = "author">${book.author}</h5>
        </div>
        <div class="card-body">
             <p>${book.numberOfPages} pages</p>
             <p class = "read-status">${book.read ? "read" : "Not read yet"} </p>
             <button class ="remove-button" onClick ="removeBook(${index})"> Remove</button>
             <button class = "toggle-read-button" onClick ="toggleRead(${index})">Toggle Read</button>`;
        libraryElement.appendChild(newBook);
    };  
}

//Object method to add new book to library
function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let numberOfPages = document.querySelector('#pages').value;
    let read = document.querySelector('#read-checkbox').checked;
    let newBook = new Book(title, author, numberOfPages, read);
    library.push(newBook);
    renderBook();
    console.log(library);
};

//Renders the book as cards in a div element
