const myLibrary = [
    {
        name: "The Romance of the Three Kingdoms",
        author: "Luo Guanzhong",
        pages: 2500,
        reads: true,
        getBook: function() {
            return `<p id="name-book">${this.name}</p><p id="author-name">By <span>${this.author}</span></p><p id="number-pages">${this.pages} pages</p><p id="read-state">${this.reads ? "read" : "not read"}</p>`
        },
        toggleRead: function() {
            this.reads = !this.reads
        }
    },
    {
        name: "Water Margin",
        author: "Shi Nai'an or Luo Guanzhong",
        pages: 2500,
        reads: false,
        getBook: function() {
            return `<p id="name-book">${this.name}</p><p id="author-name">By <span>${this.author}</span></p><p id="number-pages">${this.pages} pages</p><p id="read-state">${this.reads ? "read" : "not read"}</p>`
        },
        toggleRead: function() {
            this.reads = !this.reads
        }
    },
    {
        name: "Journey to the West",
        author: "Wu Cheng'en",
        pages: 2400,
        reads: false,
        getBook: function() {
            return `<p id="name-book">${this.name}</p><p id="author-name">By <span>${this.author}</span></p><p id="number-pages">${this.pages} pages</p><p id="read-state">${this.reads ? "read" : "not read"}</p>`
        },
        toggleRead: function() {
            this.reads = !this.reads
        }
    },
    {
        name: "Jin Ping Mei",
        author: "Lanling Xiaoxiao Sheng ('The Scoffing Scholar of Lanling', pseudonym)",
        pages: 3000,
        reads: false,
        getBook: function() {
            return `<p id="name-book">${this.name}</p><p id="author-name">By <span>${this.author}</span></p><p id="number-pages">${this.pages} pages</p><p id="read-state">${this.reads ? "read" : "not read"}</p>`
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
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const stopAddBook =  document.getElementById("stop-add-book");


class Book {
    constructor(name, author, pages, booleen) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.reads = booleen;
        this.getBook = function () {
            console.log("in Book", this.reads, this.author);
            return `<p id="name-book">${this.name}</p><p id="author-name">By <span>${this.author}</span></p><p id="number-pages">${this.pages} pages</p><p id="read-state">${this.reads ? "read" : "not read"}</p>`;
        };
    }
    toggleRead() {
        this.reads = !this.reads;
    }
}


const resetFunction = () => {
    nameBook.value = "";
    nameAuthor.value = "";
    namepages.value = "";
    nameAuthor.value = "";
    read.checked = false;
    notRead.checked = false;
}

function addBookToLibrary(name, author, pages, booleen) {
    myLibrary.push(new Book(name, author, pages, booleen));
} 

function displayBook() {
    bookContainer.textContent = ""
    myLibrary.forEach((element, i) => {
        const card = document.createElement("div");
        const deleteButton = document.createElement("button");
        const buttonToggle = document.createElement("button");
        deleteButton.setAttribute("id", "delete-book");
        buttonToggle.setAttribute("id", "button-toggle")
        buttonToggle.textContent = element.reads ? "read" : "not Read";
        buttonToggle.style.backgroundColor = element.reads ? "green" : "red";
        card.appendChild(deleteButton);
        deleteButton.setAttribute("id", "delete-book");
        deleteButton.style.padding = "0"
        deleteButton.style.border = "0"
        deleteButton.innerHTML = '<iconify-icon icon="material-symbols:close" style="margin: 0; border: 0;" width="24" height="24"  style="color: red"></iconify-icon>'
        card.classList.add("card");
        bookContainer.appendChild(card);
        let p1 = document.createElement("p");
        card.appendChild(p1);
        card.appendChild(buttonToggle);
        p1.innerHTML = element.getBook();
        deleteButton.onclick = (e) => {
            e.preventDefault();
            favDialog.showModal();
            confirmBtn.value = i
        }
        
        buttonToggle.onclick = function name() {
            element.toggleRead();
            buttonToggle.textContent = element.reads ? "read" : "not Read";
            buttonToggle.style.backgroundColor = element.reads ? "green" : "red";
            p1.innerHTML = element.getBook();
        } 
    });
}
confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    myLibrary.splice(confirmBtn.value, 1);
    favDialog.close()
    displayBook()
})

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookForm.style.display = addBookForm.style.display === "flex" ? "" : "flex";
    resetFunction()

})

addBook.addEventListener("click", (e) => {
    if (!document.getElementById("form-add").checkValidity()) {
        document.getElementById("form-add").reportValidity();
        return
    }
    const name = nameBook.value;
    const author = nameAuthor.value;
    const pages = namepages.value;
    const booleen = read.checked == true ? read.value : notRead.value;
    console.log("bool ",booleen);
    console.log(notRead.value);
    addBookToLibrary(name, author, pages, booleen);
    e.target.style.backgroundColor = "red";
    displayBook();
    resetFunction();
    e.preventDefault();
})
stopAddBook.addEventListener("click", (e) => {
    e.preventDefault();
    addBookForm.style.display = ""
    resetFunction();
})

displayBook();


