const myLibrary = [];

function Book(title,year,author,pages,isRead){
    this.title=title;
    this.year=year;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
}

Book.prototype.toggleReadStatus= function(){
    this.isRead = !this.isRead;
}

function addBookToLibrary(title,year,author,pages,readStatus){
    const book= new Book(title,year,author,pages,readStatus);
    myLibrary.push(book);
    return book;
}

/*Function to add card to the main container*/

function addCard(book){
    //Creating main card container
    const card= document.createElement('div');
    card.classList.add('book-card');

    //Book title
    const bookTitle=document.createElement('h3');
    bookTitle.classList.add('title');
    bookTitle.textContent=book.title;

    //Author header and author
    const authorHeader=document.createElement('h4');
    authorHeader.classList.add('author-header');
    authorHeader.textContent="Author";

    const author=document.createElement('p');
    author.classList.add('author');
    author.textContent=book.author;

    //Year header and year
    const yearHeader=document.createElement('h4');
    yearHeader.classList.add('year-header');
    yearHeader.textContent="Year";

    const year=document.createElement('p');
    year.classList.add('year');
    year.textContent=book.year;

    //Pages header and pages
    const pagesHeader=document.createElement('h4');
    pagesHeader.classList.add('pages-header');
    pagesHeader.textContent="Pages";

    const pages=document.createElement('p');
    pages.classList.add('pages');
    pages.textContent= book.pages;

    const readStatus=document.createElement('h4');
    readStatus.classList.add('read-status');
    readStatus.textContent="Read Status";

    
    const bookReaded=document.createElement('p');
    bookReaded.classList.add('readed-book');
    bookReaded.textContent= book.isRead;

    const toggleReadStatusButton=document.createElement('button');
    toggleReadStatusButton.classList.add('read-status-button');
    toggleReadStatusButton.textContent="Toggle Read Status";

    const deleteButton=document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent="Delete Book";

    

    


    card.appendChild(bookTitle);
    card.appendChild(authorHeader);
    card.appendChild(author);
    card.appendChild(yearHeader);
    card.appendChild(year);
    card.appendChild(pagesHeader);
    card.appendChild(pages);
    card.appendChild(readStatus);
    card.appendChild(bookReaded);
    card.appendChild(toggleReadStatusButton);
    card.appendChild(deleteButton);
    return card;
}

//Function to show books in the page
function showBooks(){
    const gridContainer=document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    for(let step = 0;step<myLibrary.length;step++){
        gridContainer.appendChild(addCard(myLibrary[step],step));
    }
}

//Open the dialog with the form
const addBookButton= document.querySelector('.add-book');
const dialog=document.querySelector('.form-dialog');

addBookButton.addEventListener('click',()=>{
    dialog.showModal();
})


//Add a new element to the page completing the form
const formEl= document.querySelector("#form-add-book");

formEl.addEventListener("submit",e=>{
    e.preventDefault();
    const bookName=document.getElementById("book-name");
    const author=document.getElementById("author");
    const year=document.getElementById("year");
    const pages=document.getElementById("pages");
    const seleccionado = document.querySelector('input[name="readStatus"]:checked');

    const bookNameValue= bookName.value;
    const authorValue= author.value;
    const yearValue= year.value;
    const pagesValue= pages.value;
    const bookReadStatus= seleccionado.value;
    
    
    const newBook=addBookToLibrary(bookNameValue,yearValue,authorValue,pagesValue,bookReadStatus);

    const gridContainer=document.getElementById('grid-container');
    gridContainer.appendChild(addCard(newBook));

    dialog.close();
    console.log(myLibrary);
});
// Contenedor principal donde se añaden los libros
const gridContainer = document.getElementById('grid-container');

gridContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-button")){
        const card= e.target.closest(".book-card");
        const index= Array.from(gridContainer.children).indexOf(card);

        if(index > -1){
            myLibrary.splice(index,1);
            card.remove();
        }
    }
     // Alternar estado de lectura
     if (e.target.classList.contains("read-status-button")) {
        const card = e.target.closest(".book-card");
        const index = Array.from(gridContainer.children).indexOf(card);

        if (index > -1) {
            // Alternar estado de lectura en el objeto del libro
            const book = myLibrary[index];
            book.toggleReadStatus();

            // Actualizar el texto en el DOM
            const readStatusText = card.querySelector(".readed-book");
            readStatusText.textContent = book.isRead ? "Read" : "Not Read";
        }
    }
});




showBooks()