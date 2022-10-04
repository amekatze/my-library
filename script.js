const table = document.getElementById("book-table");
const addBookButton = document.getElementById("addnewbook");
const readCheck = "check_circle";
const notRead = "cancel";

let library = [
   {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        pages: 192,
        read: true,
        id: 1663185789550
    },
    {
        title: "Awareness",
        author: "Anthony De Mello",
        pages: 184,
        read: true,
        id: 1663185805860
    },
    {
        title: "The Laws of Human Nature",
        author: "Robert Greene",
        pages: 624,
        read: true,
        id: 1663185818993
    }
];

// book class
class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = Date.now();  
    }  
}

//iterate through existing library
library.forEach(book => { addToBookTable(book);})

//add event listeners
function addEvent(){
    const del = document.querySelectorAll('.del');
    del.forEach(btn => btn.addEventListener ('click', deleteRow))

    const readStatus = document.querySelectorAll('.read-status');
    readStatus.forEach(cell => cell.addEventListener('click', setRead))
}

//delete button
function deleteRow(){
    console.log(this.id)
    const index = library.findIndex((book) => book.id == this.id);
    library.splice(index,1);
    const row = this.parentNode.parentNode;
    row.parentNode.removeChild(row); 
}

//populate table
function addToBookTable(book) {
    let row = table.insertRow();
    let title = row.insertCell(0);
    title.innerHTML = book.title;
    let author = row.insertCell(1);
    author.innerHTML = book.author;
    let pages = row.insertCell(2);
    pages.innerHTML = book.pages;
    let read = row.insertCell(3);
    read.innerHTML = `<span class='read-status material-symbols-outlined' id='${book.id}'>` + (book.read ? readCheck : notRead )+ "</span>";
    let del = row.insertCell(4);
    del.innerHTML = `<button class='del' id='${book.id}'>Delete</button>`;
    addEvent();
}

// add book
function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let select = document.getElementById("read");
    let read = 
    select.options[select.selectedIndex].value ==
    'Read' ? true : false;
    console.log(title, author, pages, read)
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    clearForm();
}

function addBookToLibrary(book) {
    library.push(book);
    addToBookTable(book);
}

//clear form after adding book
function clearForm(){
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.value = '';
})
}

 function setRead(){
     let currentBook = library[library.findIndex((book) => book.id == this.id)];
     if (currentBook.read== true){
        this.innerHTML = notRead;
        currentBook.read = false;
     } else {
        this.innerHTML = readCheck;
        currentBook.read = true;
     } 
    }
