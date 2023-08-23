import addBook from './modules/AddBook.js';
import GetTime from './modules/GetTime.js';
import navHandler from './modules/NavigationHandler.js';
import renderBooks from './modules/RenderBooks.js';

const initializeApp = () => {
  document.getElementById('form-section').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
  addBook();
  renderBooks();
  navHandler();
  GetTime();
};

document.addEventListener('DOMContentLoaded', initializeApp);
