const myLibrary = [
    {
        name: "Titanic",
        author: "Cameroon",
        pages: 135,
        read: false,
        getBook: function() {
            return `<div class="card">
                <p>${this.name}</p><p>${this.author}</p><p>${this.pages} pages</p><p>${this.read ? "read" : "not read"}</p>
            </div>`
        }
    },
    {
        name: "Monte Christo",
        author: "Alexandre Dumas",
        pages: 135,
        read: true,
        getBook: function() {
            return `<div class="card">
                <p>${this.name}</p><p>${this.author}</p><p>${this.pages} pages</p><p>${this.read ? "read" : "not read"}</p>
            </div>`
        }
    },
    {
        name: "Monte Christo",
        author: "Alexandre Dumas",
        pages: 135,
        read: true,
        getBook: function() {
            return `<div class="card">
                <p>${this.name}</p><p>${this.author}</p><p>${this.pages} pages</p><p>${this.read ? "read" : "not read"}</p>
            </div>`
        }
    }
];
const bookContainer = document.querySelector(".book-container");
const addButton = document.querySelector(".add-button");
const dialog = document.querySelector("dialog");
const addBookForm = document.querySelector("#add-book-form");
const addBook = document.getElementById("add-book");
const nameBook = document.getElementById("name");
const nameAuthor = document.getElementById("author");
const namepages = document.getElementById("pages");
const read = document.getElementById("read");
const notRead = document.getElementById("notRead");


function Book(name, author, pages, booleen) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.reads = booleen;
    this.getBook = function() {
        console.log("in Book",this.reads, this.author)
        return `<div class="card">
            <p>${this.name}</p><p>${this.author}</p><p>${this.pages} pages</p><p>${(this.reads ? "reads" : "not read")}</p>
        </div>`
    }
}

function addBookToLibrary(name, author, pages, booleen) {
    myLibrary.push(new Book(name, author, pages, booleen));
} 

function displayBook() {
    const bookInformation = myLibrary.map(el => el.getBook()).join("");
    bookContainer.innerHTML = bookInformation;
    
}
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookForm.className = "add-book-form-hide"
})
addBook.addEventListener("click", (e) => {
    e.preventDefault();
    const name = nameBook.value;
    const author = nameAuthor.value;
    const pages = namepages.value;
    const booleen = read.checked === true ? read.value : notRead.value;
    console.log("bool ",booleen);
    console.log(notRead.value);
    addBookToLibrary(name, author, pages, booleen);
    console.log(myLibrary);
    displayBook()
})
console.log("out scope", myLibrary)
displayBook()
