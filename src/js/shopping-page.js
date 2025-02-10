import { getBookByIds } from './booksAPI.js';
let savedBooks = JSON.parse(localStorage.getItem('shoppingList')) || [];
const booksContainer = document.getElementById('book-container');
const emptyListMessage = document.querySelector('.empty-list');
let booksPerPage = 4; // her sayfada 4 kitap
let currentPage = 1;
async function fetchBooks() {
  if (savedBooks.length === 0) {
    emptyListMessage.style.display = 'block';
    booksContainer.innerHTML = '';
    renderPagination();
    return;
  } else {
    emptyListMessage.style.display = 'none';
  }
  booksContainer.innerHTML = '';
  const validBookIds = savedBooks.filter(id => id !== null && id !== undefined && id !== '');
  if (validBookIds.length === 0) {
    emptyListMessage.style.display = 'block';
    booksContainer.innerHTML = '';
    renderPagination();
    return;
  }
  try {
    const books = await getBookByIds(validBookIds);
    displayBooks(books);
    renderPagination();
  } catch (error) {
    console.error('Error', error);
  }
}
function displayBooks(books) {
  booksContainer.innerHTML = '';
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToShow = books.slice(startIndex, endIndex);
  booksToShow.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.setAttribute('data-index', index + 1);
    bookCard.innerHTML = `
      <img src="${book.book_image}" alt="${book.title}" class="book-cover">
      <div class="book-info">
        <button class="delete-btn" data-id="${book._id}">&#128465;</button>
        <h3>${book.title}</h3>
        <p class="category">${book.list_name}</p>
        <p class="description">${book.description}</p>
        <p class="author">${book.author}</p>
        <a href="${book.buy_links[0].url}" target="_blank" class="buy-button"><img src="../img/png/Amazon_logo.png" alt="icon" class="amazon-icon"></a>
      </div>
    `;
    booksContainer.appendChild(bookCard);
  });
}
function renderPagination() {
  const totalPages = Math.ceil(savedBooks.length / booksPerPage); // total page sayısını gsöterir
  const paginationContainer = document.getElementById("pagination-container");
  paginationContainer.innerHTML = '';
  if (totalPages <= 1) return; // eğer sadece 1 sayfa varsa paginatonu göstermez
  // first page
  paginationContainer.innerHTML += `
    <button class="pagination-btn first-page" ${currentPage === 1 ? 'disabled' : ''}>⏮</button>
  `;
  // prev page
  paginationContainer.innerHTML += `
    <button class="pagination-btn prev-page" ${currentPage === 1 ? 'disabled' : ''}>◀</button>
  `;
  // page numbers
  for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
    paginationContainer.innerHTML += `
      <button class="pagination-btn page-number ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>
    `;
  }
  // next page
  paginationContainer.innerHTML += `
    <button class="pagination-btn next-page" ${currentPage === totalPages ? 'disabled' : ''}>▶</button>
  `;
  // last page
  paginationContainer.innerHTML += `
    <button class="pagination-btn last-page" ${currentPage === totalPages ? 'disabled' : ''}>⏭</button>
  `;
}
// pagination click event
document.addEventListener("click", function (event) {
  if (event.target.classList.contains('page-number')) {
    currentPage = parseInt(event.target.dataset.page);
    fetchBooks();
  } else if (event.target.classList.contains('first-page')) {
    currentPage = 1;
    fetchBooks();
  } else if (event.target.classList.contains('prev-page')) {
    if (currentPage > 1) {
      currentPage--;
      fetchBooks();
    }
  } else if (event.target.classList.contains('next-page')) {
    if (currentPage < Math.ceil(savedBooks.length / booksPerPage)) {
      currentPage++;
      fetchBooks();
    }
  } else if (event.target.classList.contains('last-page')) {
    currentPage = Math.ceil(savedBooks.length / booksPerPage);
    fetchBooks();
  }
});
document.addEventListener('DOMContentLoaded', fetchBooks);
// this is for delete book
document.getElementById('book-container').addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const bookId = event.target.dataset.id;
    savedBooks = savedBooks.filter(id => id !== bookId);
    updateShoppingList(savedBooks);
    fetchBooks();
  }
});
// update the localstorage
function updateShoppingList(updatedBooks) {
  localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
}