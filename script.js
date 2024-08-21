// const library = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }


// function addBook(title, author, pages, read) {
//   const newBook = new Book(title, author, pages, read);
//   library.push(newBook);
//   displayBooks();
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(index) {
    this.books.splice(index, 1);
  }

  toggleReadStatus(index) {
    this.books[index].read = !this.books[index].read;
  }

  getBooks() {
    return this.books;
  }
}










function displayBooks() {
  const booksDisplay = document.querySelector('main');
  booksDisplay.innerHTML = '';

  library.forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const readStatus = book.read ? 'read' : 'unread';
    const readText = book.read ? 'Прочитано' : 'В процессе'

    bookElement.innerHTML = `
      <div class="title">${book.title}</div>
      <div class="author">${book.author}</div>
      <div class="pages">${book.pages}</div>
      <div class="${readStatus} status-toggle no-select" data-index="${index}">${readText}</div>
      <button class="delete-book" data-index="${index}">&times;</button>
    `;

    booksDisplay.appendChild(bookElement);
  });

  const statusElements = document.querySelectorAll('.status-toggle');
  statusElements.forEach(element => {
    element.addEventListener('click', () => {
      const index = element.getAttribute('data-index');
      library[index].read = !library[index].read;
      displayBooks();
    });
  });

  const deleteButton = document.querySelectorAll('.delete-book');
  deleteButton.forEach(button => {
    button.addEventListener('click', (event) => {
      const index = button.getAttribute('data-index');
      library.splice(index, 1);
      displayBooks();
      event.stopPropagation();      
    });
  });
}



document.querySelector('.add-book').addEventListener('click', () => {
  document.querySelector('.book-form').classList.toggle('active')
  ;
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.book-form').classList.remove('active');
});

document.querySelector('.form-book').addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;

  addBook(title, author, pages, read);

  document.querySelector('.book-form').classList.remove('active');
  document.querySelector('.form-book').reset();
});


displayBooks();