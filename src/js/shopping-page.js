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
  