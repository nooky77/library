// All of your book objects are going to be stored in an array, so add a function to the script (not the constructor)
//  that can take user’s input and store the new book objects into an array. Your code should look something like this:

const form = document.querySelector("form");
const main = document.querySelector("main");
const myLibrary = [];

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const bookTitle = document.querySelector("#title").value;
	const bookAuthor = document.querySelector("#author").value;
	const bookDate = document.querySelector("#date").value;
	const bookPages = document.querySelector("#pages").value;
	const bookRead = document.querySelector("#read").checked;
	const book = new Book(bookTitle, bookAuthor, bookDate, bookPages, bookRead);
	addBookToLibrary(book);
	displayLibrary();
});

function Book(title, author, year, pages, read) {
	this.title = title;
	this.author = author;
	this.year = year;
	this.pages = pages;
	this.read = Boolean(read);
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function displayLibrary() {
	for (let book of myLibrary) {
		const node = document.createElement("div");
		node.classList.add("card");
		// CONTINUE HERE
		console.log(book);
	}
}
