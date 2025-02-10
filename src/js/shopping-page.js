import { getBookByIds } from './booksAPI.js';
let savedBooks = JSON.parse(localStorage.getItem('shoppingList')) || [];
const booksContainer = document.getElementById('book-container');
const emptyListMessage = document.querySelector('.empty-list');
let booksPerPage = 4
let currentPage = 1
async function fetchBooks() {
  if (savedBooks.length === 0) {
    emptyListMessage.style.display = 'block';
    booksContainer.innerHTML = '';
    renderPagination()
    return;
  } else {
    emptyListMessage.style.display = 'none';
  }
  booksContainer.innerHTML = '';
  const validBookIds = savedBooks.filter(id => id !== null && id !== undefined && id !== '');
  if (validBookIds.length === 0) {
    emptyListMessage.style.display = 'block';
    booksContainer.innerHTML = '';
    renderPagination()
    return;
  }
  try {
    const books = await getBookByIds(validBookIds);
    displayBooks(books);
    renderPagination()
  } catch (error) {
    console.error('Error', error);
  }
}
function displayBooks(books) {
  booksContainer.innerHTML = '';
const startIndex = (currentPage -1) * booksPerPage
const endIndex = startIndex + booksPerPage
const booksToShow = books.slice(startIndex,endIndex)
  books.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.setAttribute('data-index', index + 1);
    bookCard.innerHTML = `
      <img src="${book.book_image}" alt="${book.title}" class="book-cover">
      <div class="book-info">
        <button class="delete-btn" data-id="${book._id}">&#x1F5D1</button>
        <h3>${book.title}</h3>
        <p class="category">${book.list_name}</p>
        <p class="description">${book.description}</p>
        <p class="author">${book.author}</p>
        <a href="${book.buy_links[0].url}" target="_blank" class="buy-button"><img src="../img/links.svg" alt="icon" class="amazon-icon"></a>
      </div>
    `;
    booksContainer.appendChild(bookCard);
  });
}
function renderPagination(){
  const totalPages = Math.ceil(savedBooks.length / booksPerPage)
  const paginationContainer = document.getElementById("pagination-container")
  paginationContainer.innerHTML = ''
  if(totalPages <= 1) return
  paginationContainer.innerHTML += `
  <button class="pagination-btn first-page" ${currentPage === 1 ? 'disabled' : ''} >⏮</button>
  `
  paginationContainer.innerHTML += `
  <button class="pagination-btn prev-page" ${currentPage === 1 ? 'disabled' : ''} >◀</button>
  `
  for(let i = Math.max(1,currentPage - 2); i <= Math.min(totalPages,currentPage + 2); i++){
    paginationContainer.innerHTML += `
    <button class="pagination-btn page-number ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>
    `
  }
  paginationContainer.innerHTML += `
  <button class="pagination-btn next-page" ${currentPage === totalPages ? 'disabled' : ''}>▶</button>
  `
  paginationContainer.innerHTML += `
  <button class="pagination-btn last-page" ${currentPage === totalPages ? 'disabled' : ''}>⏭</button>
`;
}
document.addEventListener("click",function (event){
  if(event.target.classList.contains('page-number')){
    currentPage = parseInt(event.target.dataset.page)
    fetchBooks()
  }else if(event.target.classList.contains('first-page')){
    currentPage =1
    fetchBooks()
  }else if(event.target.classList.contains('prev-page')){
    if(currentPage > 1){
      currentPage--
      fetchBooks()
    }
  }else if(event.target.classList.contains('next-page')){
    if(currentPage < Math.ceil(savedBooks.length / booksPerPage)){
      currentPage++
      fetchBooks()
    }
  }
})
document.addEventListener('DOMContentLoaded', fetchBooks);
document.getElementById('book-container').addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const bookId = event.target.dataset.id;
    savedBooks = savedBooks.filter(id => id !== bookId);
    updateShoppingList(savedBooks);
    fetchBooks();
  }
});
function updateShoppingList(updatedBooks) {
  localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
}