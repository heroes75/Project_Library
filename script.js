const myLibrary = [
    {
        name: "Titanic",
        author: "Cameroon",
        pages: 135,
        reads: false,
        getBook: function() {
            return `<div class="card">
            <button id="delete-book" class="delete-book"><iconify-icon icon="material-symbols:close" width="24" height="24"  style="color: red"></iconify-icon></button>
                <p>${this.name}</p><p>${this.author}</p><p>${this.pages} pages</p><p>${this.read ? "read" : "not read"}</p>
            </div>`
        },
        toggleRead: function() {
            this.reads = !this.reads
        }
    },
    {
        name: "Monte Christo",
        author: "Alexandre Dumas",
        pages: 135,
        reads: true,
        getBook: function() {
            return `<div class="card">
            <button id="delete-book" class="delete-book"><iconify-icon icon="material-symbols:close" width="24" height="24"  style="color: red"></iconify-icon></button>
                <p>${this.name}</p><p>${this.author}</p><p>${this.pages} pages</p><p>${this.read ? "read" : "not read"}</p>
            </div>`
        },
        toggleRead: function() {
            this.reads = !this.reads
        }
    },
    {
        name: "Monte Christo",
        author: "Alexandre Dumas",
        pages: 135,
        reads: true,
        getBook: function() {
            return `<div class="card">
            <button id="delete-book" class="delete-book"><iconify-icon icon="material-symbols:close" width="24" height="24"  style="color: red"></iconify-icon></button>
                <p>${this.name}</p><p>${this.author}</p><p>${this.pages} pages</p><p>${this.read ? "read" : "not read"}</p>
            </div>`
        },
        toggleRead: function() {
            this.reads = !this.reads
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
//const deleteBook = document.querySelectorAll(".delete-book");



function Book(name, author, pages, booleen) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.reads = booleen;
    this.getBook = function() {
        console.log("in Book",this.reads, this.author)
        return `<div class="card">
        <button id="delete-book" class="delete-book"><iconify-icon icon="material-symbols:close" width="24" height="24"  style="color: red"></iconify-icon></button>
            <p>${this.name}</p><p>${this.author}</p><p>${this.pages} pages</p><p>${(this.reads ? "reads" : "not read")}</p>
        </div>`
    }
}

Book.prototype.toggleRead = function() {
    this.reads = !this.reads;
    
}

/*deleteBook.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "red";
        console.log(button.id)
    })
});*/

//console.log(deleteBook[1].id);

function addBookToLibrary(name, author, pages, booleen) {
    myLibrary.push(new Book(name, author, pages, booleen));
} 

function displayBook() {
    //const bookInformation = myLibrary.map(el => el.getBook()).join("");
    //bookContainer.innerHTML = bookInformation;
    bookContainer.textContent = ""
    myLibrary.forEach((element, i) => {
        const card = document.createElement("div");
        const deleteButton = document.createElement("button");
        const buttonToggle = document.createElement("button");
        buttonToggle.textContent = element.reads ? "read" : "not Read";
        buttonToggle.style.backgroundColor = element.reads ? "green" : "red";
        card.appendChild(deleteButton);
        deleteButton.setAttribute("id", "delete-book");
        deleteButton.style.padding = "0"
        deleteButton.style.border = "0"
        deleteButton.innerHTML = '<iconify-icon icon="material-symbols:close" style="margin: 0; border: 0;" width="24" height="24"  style="color: red"></iconify-icon>'
        card.classList.add("card");
        bookContainer.appendChild(card);
        const p1 = document.createElement("p");
        card.appendChild(p1);
        card.appendChild(buttonToggle);
        p1.textContent = element.getBook();
        deleteButton.onclick = (e) => {
            e.preventDefault();
            e.target.style.backgroundColor = "red";
            myLibrary.splice(i, 1);
            displayBook();
        }
        buttonToggle.onclick = function name() {
            element.toggleRead();
            buttonToggle.textContent = element.reads ? "read" : "not Read";
            buttonToggle.style.backgroundColor = element.reads ? "green" : "red";
        } 
    });
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
    const booleen = read.checked == true ? read.value : notRead.value;
    console.log("bool ",booleen);
    console.log(notRead.value);
    addBookToLibrary(name, author, pages, booleen);
    //console.log(myLibrary);
    e.target.style.backgroundColor = "red"
    displayBook()

})

displayBook();


