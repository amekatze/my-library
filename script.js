
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

const table = document.getElementById("book-table");
library.forEach(book => { addToBookTable(book);})

function addToBookTable(book) {
    let row = table.insertRow();
    let title = row.insertCell(0);
    title.innerHTML = book.title;
    let author = row.insertCell(1);
    author.innerHTML = book.author;
    let pages = row.insertCell(2);
    pages.innerHTML = book.pages;
    let read = row.insertCell(3);
    read.innerHTML = book.read;
    let del = row.insertCell(4);
    del.innerHTML = `<button class='del' id='${book.id}'>DELETE</button>`;
}

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = Date.now();
}

Book.prototype.info = function(){
    return (this.title + ", " + this.author + ", " + this.pages)
}

function addBookToLibrary(book) {
    library.push(book);
    addToBookTable(book);
}


const addBookButton = document.getElementById("addnewbook");

function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    const book = new Book(title, author, pages, read);
    console.log(read)
    addBookToLibrary(book);
}

let del = document.querySelectorAll('.del');
del.forEach(btn => btn.onclick = function(){
    const index = library.findIndex((book) => book.id == this.id);
    library = library.slice(index)
    const row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
} )
