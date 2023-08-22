const bookContainer = document.getElementById('books-container');
const formSection = document.getElementById('form-section');
const contactSection = document.getElementById('contact-section');
const navUl = document.getElementById('nav_links');
const navLinks = navUl.getElementsByClassName('link');

formSection.style.display = 'none';
contactSection.style.display = 'none';

const InitializeApp = () => {
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', () => {
      const current = document.getElementsByClassName('active');
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
      }
      current.className += ' active';
      if (navLinks[i].innerHTML === 'List') {
        formSection.style.display = 'none';
        contactSection.style.display = 'none';
        bookContainer.style.display = 'block';
      } else if (navLinks[i].innerHTML === 'Add New') {
        formSection.style.display = 'block';
        contactSection.style.display = 'none';
        bookContainer.style.display = 'none';
      } else if (navLinks[i].innerHTML === 'Contact') {
        contactSection.style.display = 'block';
        formSection.style.display = 'none';
        bookContainer.style.display = 'none';
      }
    });
  }
};

export default InitializeApp;
