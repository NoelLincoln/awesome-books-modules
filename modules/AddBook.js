import renderBooks from './RenderBooks.js';

const addBook = () => {
  const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const title = bookTitle.value.trim();
  const author = bookAuthor.value.trim();
  const updateLocalStorage = () => {
    localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
  };
  if (title && author) {
    savedBooks.push({ title, author });
    updateLocalStorage();
  }
  const addButton = document.getElementById('add');

  const handleOnClickAddBook = (event) => {
    event.preventDefault();
    addBook();
    renderBooks();
    bookTitle.value = '';
    bookAuthor.value = '';
  };
  addButton.addEventListener('click', handleOnClickAddBook);
};
export default addBook;
