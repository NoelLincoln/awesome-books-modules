const article = document.getElementById('bookList');
const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];

const updateLocalStorage = () => {
  localStorage.setItem('savedBooks', JSON.stringify(this.savedBooks));
};
const removeBook = (index) => {
  savedBooks.splice(index, 1);
  updateLocalStorage();
};

const renderBooks = () => {
  article.innerHTML = '';
  savedBooks.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `"${book.title}" by ${book.author}`;
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.addEventListener('click', () => {
      removeBook(index);
      renderBooks();
    });

    bookDiv.appendChild(removeBtn);
    article.appendChild(bookDiv);

    const booksdiv = document.querySelectorAll('.book');
    for (let i = 0; i < booksdiv.length; i += 1) {
      if (i % 2 !== 0) {
        booksdiv[i].classList.add('grey');
      }
    }
  });
};

export default renderBooks;
