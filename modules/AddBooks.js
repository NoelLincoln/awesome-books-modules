import renderBooks from './RenderBooks.js';

const addButton = document.getElementById('add');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];

const updateLocalStorage = () => {
  localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
};
const addBook = () => {
  const title = bookTitle.value.trim();
  const author = bookAuthor.value.trim();
  if (title && author) {
    savedBooks.push({ title, author });
    updateLocalStorage();
    renderBooks();
  }
};
export default addBook;

const handleOnClickAddBook = (e) => {
  e.preventDefault();
  addBook();
  //   renderBooks();
  bookTitle.value = '';
  bookAuthor.value = '';
};
addButton.addEventListener('click', handleOnClickAddBook);
