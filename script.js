let library = [
   {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        pages: 192
    },
    {
        title: "Awareness",
        author: "Anthony De Mello",
        pages: 184
    }
];


function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.info = function(){
    return (this.title + ", " + this.author + ", " + this.pages)
}

function addBookToLibrary(book) {
    document.getElementById("test").innerHTML += "</br>" + Object.values(book);
    library.push(book);
}

library.forEach(book => document.getElementById("test").innerHTML += "</br>" + Object.values(book))


const addBookButton = document.getElementById("addnewbook");


function addBook() {
    console.log("button works")
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    const book = new Book(title, author, pages);
    addBookToLibrary(book);
}