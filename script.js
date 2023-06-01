let myLibrary = [];
let id = 0;


function Book(title, author, pages, year, read, id){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.year = year,
    this.read = read,
    this.id = id
}

function addBookToLibrary(title,author,pages,year,read){
    return myLibrary.push(new Book(title,author,pages,year,read,id++));
}


function updateDisplay(){
    const catalog = document.getElementById('output-library');
    catalog.innerHTML = '';
    createCardDisplay(catalog);
}

function createCardDisplay(catalog){
    myLibrary.map((e)=>{
    let element = document.createElement('div');
    element.className = "card border-dark mb-3";
    element.style = "max-width: 18rem;";
    element.innerHTML= `<div class="card-header">Title: "<strong>${e.title}</strong>"</div>
    <div class="card-body text-dark">
    <h5 class="card-title">Author: "${e.author}"</h5>
    <p class="card-text">Number of Pages: ${e.pages}</p>
    <p class="card-text">Year Published: ${e.year}</p>
    ${getRead(e)}
    <a class="btn btn-danger" onClick="deleteCard(${e.id})">Delete</a>`
    catalog.appendChild(element);
    });
}


function getRead(e){
    return e.read ? `<div class="card-footer bg-transparent border-success">Read: <a class="btn btn-outline-success btn-sm" onClick="toggleRead(${e.id})">"Yes"</a></div>`:`<div class="card-footer bg-transparent border-danger">Read: <a class="btn btn-outline-danger btn-sm" onClick="toggleRead(${e.id})">"No"</a></div>`
}


function deleteCard(e){
    let arrIndex = myLibrary.findIndex(((obj) => obj.id === e));
    myLibrary.splice(arrIndex,1);
    updateDisplay();
}

function toggleRead (e){
    let arrIndex = myLibrary.findIndex(((obj)=> obj.id===e));
    myLibrary[arrIndex].read ? myLibrary[arrIndex].read = false : myLibrary[arrIndex].read = true;
    updateDisplay();
}