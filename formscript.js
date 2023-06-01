const addBookButton = document.getElementById("add-book-button");
const addBookForm = document.getElementById('add-book-form');
const submitBookButton = document.getElementById('submit-book-button');
const resetLibraryButton = document.getElementById('reset-library-button');


const title = document.getElementById('form-title');
const author = document.getElementById('form-author');
const pages = document.getElementById('form-pages');
const year = document.getElementById('form-year');
const readYes = document.getElementById('form-read-yes');
const readNo = document.getElementById('form-read-no');


addBookButton.addEventListener("click", toggleDisplay);

function toggleDisplay(){
    addBookForm.className !== 'display-none' ? addBookForm.classList.add("display-none") : addBookForm.classList.remove("display-none");
}


submitBookButton.addEventListener("click",addBook);

function addBook(e){
    e.preventDefault();
    readYes.checked ? addBookToLibrary(title.value,author.value,pages.value,year.value,true) : addBookToLibrary(title.value,author.value,pages.value,year.value,false);
    updateDisplay();
}


resetLibraryButton.addEventListener("click",resetLibrary);

function resetLibrary(){
    myLibrary = [];
    updateDisplay();
}