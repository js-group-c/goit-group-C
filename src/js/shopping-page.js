import { getBookById, getBookByIds } from './booksAPI.js';

// document.addEventListener('DOMContentLoaded', function () {
//   // header.html'i yükle
//   fetch('../partials/header.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('header-placeholder').innerHTML = data;
//     })
//     .catch(error => console.error('Header yüklenirken hata oluştu:', error));

//   // support-ukr.html'i yükle
//   fetch('../partials/support-ukr.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('support-ukr-placeholder').innerHTML = data;
//     })
//     .catch(error =>
//       console.error('Support-ukr yüklenirken hata oluştu:', error)
//     );
// });

const savedBooks = JSON.parse(localStorage.getItem('shoppingList')) || [];

async function fetchBooks() {
  const booksContainer = document.getElementById('book-container');
  const emptyListMessage = document.querySelector('.empty-list');

  if (savedBooks.length === 0) {
    emptyListMessage.style.display = 'block'; // Boş liste mesajını göster
    booksContainer.innerHTML = ''; // Kitap listesini temizle
    return;
  } else {
    emptyListMessage.style.display = 'none'; // Boş liste mesajını gizle
  }

  booksContainer.innerHTML = ''; // Önce kitapları temizleyelim

  try {
    const books = await getBookByIds(savedBooks); // API’den kitapları çek

    books.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');

      bookCard.innerHTML = `
          <img src="${book.book_image}" alt="${book.title}" class="book-cover">
          <div class="book-info">
            <h3>${book.title}</h3>
            <p class="category">${book.list_name}</p>
            <p class="description">${book.description}</p>
            <p class="author">By: ${book.author}</p>
            <a href="${book.buy_links[0].url}" target="_blank" class="buy-button">Buy</a>
            <button class="delete-btn" data-id="${book._id}">🗑 Remove</button>
          </div>
        `;

      booksContainer.appendChild(bookCard);
    });
  } catch (error) {
    console.error('Error', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchBooks);

document
  .getElementById('book-container')
  .addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
      const bookId = event.target.dataset.id;

      // LocalStorage'dan kaldır
      let savedBooks = JSON.parse(localStorage.getItem('shoppingList')) || [];
      savedBooks = savedBooks.filter(id => id !== bookId);
      localStorage.setItem('shoppingList', JSON.stringify(savedBooks));

      // Kitap listesini güncelle
      fetchBooks();
    }
  });

const pagination = document.querySelector('.pagination');

if (savedBooks.length === 0) {
  pagination.style.display = 'none';
} else {
  pagination.style.display = 'flex';
}
