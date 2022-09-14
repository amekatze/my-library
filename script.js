let myLibrary = [];


function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.info = function(){
    return (this.title + ", " + this.author + ", " + this.pages)
}


function addBookToLibrary() {
    
}
