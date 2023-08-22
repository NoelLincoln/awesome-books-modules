import BookManager from './modules/BookManager.js';
import GetTime from './modules/GetTime.js';
import navHandler from './modules/NavigationHandler.js';

function initializeApp() {
  const app = new BookManager();

  document.getElementById('form-section').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';

  navHandler();
  app.navHandler();
  return app;
}

GetTime();

document.addEventListener('DOMContentLoaded', initializeApp);
