const myLibrary = [];

function Book(title,year,author,pages){
    this.title=title;
    this.year=year;
    this.author=author;
    this.pages=pages;
}
function addBookToLibrary(title,year,author,pages){
    const book= new Book(title,year,author,pages);
    myLibrary.push(book);
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

    card.appendChild(bookTitle);
    card.appendChild(authorHeader);
    card.appendChild(author);
    card.appendChild(yearHeader);
    card.appendChild(year);
    card.appendChild(pagesHeader);
    card.appendChild(pages);

    return card;
}


const testBook1=new Book("Harry Potter","2004","JK Rowling","320");
const testBook2=new Book("Palabras Radiantes","2017","Brandon Sanderson","3450");
const testBook3=new Book("Palabras Radiantes","2017","Brandon Sanderson","3450");
myLibrary.push(testBook1);
myLibrary.push(testBook2);
myLibrary.push(testBook3);

function showBooks(){
    const gridContainer=document.getElementById('grid-container');
    for(let step = 0;step<myLibrary.length;step++){
        gridContainer.appendChild(addCard(myLibrary[step]));
    }
}

showBooks();