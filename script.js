const form = document.querySelector("form");
const main = document.querySelector("main");
const cardTemplate = document.querySelector("#cardTemplate");
const addBookBtn = document.querySelector(".addBook");
const modal = document.querySelector("dialog");
const closeModalBtn = document.querySelector(".closeModal");
let myLibrary = [];

addBookBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const modal = document.querySelector("dialog");
	modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
	modal.close();
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const bookTitle = document.querySelector("#title").value;
	const bookAuthor = document.querySelector("#author").value;
	const bookDate = document.querySelector("#date").value;
	const bookPages = document.querySelector("#pages").value;
	const bookRead = document.querySelector("#read").checked;
	const book = new Book(bookTitle, bookAuthor, bookDate, bookPages, bookRead);
	addBookToLibrary(book);
	displayLibrary(myLibrary);
	modal.close();
});

const book1 = new Book("Dune", "Frank Herbert", 1958, 850, false);
const book2 = new Book(
	"Harry Potter and the Philosopher's Stone",
	"J. K. Rowling",
	1997,
	223,
	false
);
myLibrary.push(book1, book2);
displayLibrary(myLibrary);

function Book(title, author, year, pages, read) {
	this.title = title;
	this.author = author;
	this.year = year;
	this.pages = pages;
	this.read = Boolean(read);
	this.id = Date.now() + Math.random();
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function displayLibrary(books) {
	main.replaceChildren();
	for (let book of books) {
		const node = cardTemplate.content.cloneNode(true);
		const nodeTitle = node.querySelector(".bookTitle");
		nodeTitle.textContent = book.title;
		const nodeAuthor = node.querySelector(".bookAuthor");
		nodeAuthor.textContent = book.author;
		const nodeYear = node.querySelector(".bookYear");
		nodeYear.textContent = book.year;
		const nodePages = node.querySelector(".bookPages");
		nodePages.textContent = `${book.pages} pages`;
		const nodeBtnToggle = node.querySelector("#bookBtnToggle");
		nodeBtnToggle.dataset.read = book.read;
		handleToggle(nodeBtnToggle);
		nodeBtnToggle.addEventListener("click", (e) => handleToggle(e.target));
		const nodeBtnDelete = node.querySelector("#bookBtnDelete");
		nodeBtnDelete.addEventListener("click", (e) => handleDelete(book.id));
		main.appendChild(node);
	}
}

function handleToggle(node) {
	if (node.dataset.read === "true") {
		node.dataset.read = "false";
		node.textContent = "Start";
	} else {
		node.dataset.read = "true";
		node.textContent = "Finished";
	}
}

function handleDelete(id) {
	myLibrary = myLibrary.filter((book) => book.id !== id);
	displayLibrary(myLibrary);
}
