document.addEventListener('DOMContentLoaded', () => {
    const booksContainer = document.getElementById('books-container');
    const emptyListMessage = document.querySelector('.empty-list');
    const pagination = document.querySelector('.pagination');
  
    // 1. LocalStorage'dan kitapları al
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  
    // 2. Eğer liste boşsa, mesajı göster ve pagination'ı gizle
    if (shoppingList.length === 0) {
      emptyListMessage.style.display = 'block';
      pagination.style.display = 'none';
    } else {
      emptyListMessage.style.display = 'none';
      pagination.style.display = 'flex';
  
      // 3. Kitapları ekrana ekle
      displayBooks(shoppingList);
    }
  });
  
  function displayBooks(books) {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = ''; // Önce temizle
  
    books.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
  
      bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}" class="book-image">
        <div class="book-info">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <button class="remove-btn" data-id="${book.id}">🗑️</button>
        </div>
      `;
  
      booksContainer.appendChild(bookCard);
    });
  
    // Silme butonları
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', removeBook);
    });
  }
  
  function removeBook(event) {
    const bookId = event.target.dataset.id;
  
    // LocalStorage'daki veriyi güncelle
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    shoppingList = shoppingList.filter(book => book.id !== bookId);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  
    // Sayfayı güncelle
    displayBooks(shoppingList);
  }
  
  
//....................

function updatePaginationVisibility() {
    const bookList = document.querySelector(".book-list"); // Kitapları içeren alan
    const pagination = document.querySelector(".pagination"); // Sayfalama alanı
  
    if (bookList.children.length === 0) {
      pagination.style.display = "none"; // Eğer kitap yoksa gizle
    } else {
      pagination.style.display = "flex"; // Kitap varsa göster
    }
  }
  
  // Sayfa yüklendiğinde ve liste güncellendiğinde çağır
  document.addEventListener("DOMContentLoaded", updatePaginationVisibility);
  