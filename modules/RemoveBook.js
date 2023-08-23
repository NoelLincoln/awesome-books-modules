const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
const updateLocalStorage = () => {
  localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
};
const removeBook = (index) => {
  savedBooks.splice(index, 1);
  updateLocalStorage();
};

export default removeBook;
