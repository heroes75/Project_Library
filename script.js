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
const addBookForm = document.querySelector("#add-book-form")


function Book(name, author, pages, booleen) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = booleen;
    this.getBook = function() {
        return `<div class="card">
            <p>${this.name}</p><p>${this.author}</p><p>${this.pages} pages</p><p>${this.read ? "read" : "not read"}</p>
        </div>`
    }
}

function addBookToLibrary(name, author, pages, booleen) {
    name = new Book(name, author, pages, booleen);
    myLibrary.push(name);
} 

const bookInformation = myLibrary.map(el => el.getBook()).join("");
bookContainer.innerHTML = bookInformation;
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookForm.className = "add-book-form-hide"
})