import { getTopBooks, getBooksByCategory } from './booksAPI.js';
import { spinnerPlay, spinnerStop } from './spinner.js';
// import { onOpenModal } from './modal.js';
//import {showNoBooksWarning } from './warnings.js';

const references = {
  topListElem: document.querySelector('#topList'),
  categoryListElem: document.querySelector('#categoryList'),
  titleElement: document.querySelector('.top_list-title'),
  allCategoriesElement: document.querySelector('#categories'),
};

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', clickSeeMore); //See More butonuna tıklanınca ilgili kategoriye ait kitapları gösterir.
  document.addEventListener('click', clickByBook); //Bir kitap kartına tıklanınca detaylarını gösteren modal açar.
  document.addEventListener('click', clickByAllCategories); //Bir kategoriye tıklanınca bu kategorinin kitapları gösterir.
});

//En Çok Satanlar Listesini Getirme
document.addEventListener('DOMContentLoaded', async function () {
  spinnerPlay(references.titleElement);
  references.topListElem.innerHTML = '';
  const topListData = getTopBooks();
  const topList = await topListData;
  let html = '';
  topList.forEach(elem => {
    html += renderTopList(elem);
  });
  references.topListElem.innerHTML = html;
  spinnerStop();
});

//En Çok Satanlar Listesini Renderleme
function renderTopList(elem) {
  return `<li class="top_list-container">
            <h2 class="top_list-category_name">${elem.list_name}</h2>
            <ul class="top_list-cards">${renderBooks(elem.books)}</ul>
            <button class="top_list-see_more" data-category="${
              elem.list_name
            }">See More</button>
        </li>`;
}

//Kitap kartlarının oluşturulması (kapak, başlık ve yazar ismi)
function renderBooks(books) {
  let i = 1;
  const bookHtml = books
    .map(
      book => `
        <li class="top_list-card" data-book-sequence-number="${i++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${book._id}">
                <img class="top_list-book_cover" src="${book.book_image}" alt="${book.title}">
            </div>
            <h3 class="top_list-book_title">${book.title}</h3>
            <p class="top_list-book_author">${book.author}</p>
        </li>
        `
    )
    .join('');
  i++;
  return bookHtml; 
}

const clickByBook = function (event) {
  const bookWrapper = event.target.closest('.top_list-book_cover_wrapper');
  if (bookWrapper) {
    const bookId = bookWrapper.dataset.bookid;
    onOpenModal(bookId); //kitap ID' si ile birlikte modal açma fonksiyonunu çalıştırır.
  }
};

const clickSeeMore = function (event) {  
    if (event.target.classList.contains("top_list-see_more")) { 
        references.topListElem.classList.add("hidden");   //Üst kısımdaki kitap listesi gizlenir.
        references.categoryListElem.classList.remove("hidden");   //Kategorilerin bulunduğu liste alanı gösterilir.
        const category = event.target.dataset.category;
        titleCategory(category);   //Seçilen kategorinin başlığını değiştirir.
        categoryList(category);   //Seçilen kategoriye ait kitapları getirip listeler.
        allCategoriesActive(category);   //Seçilen kategoriyi aktif hale getirir. Görsel vurgulama ekler.
    }
};

const clickByAllCategories = async function (event) {
  if (event.target.classList.contains('all_categories')) {
    references.titleElement.innerHTML = 'Best Sellers <span>Books</span>';
    references.categoryListElem.classList.add('hidden');
    references.topListElem.classList.remove('hidden');
    allCategoriesActive('All categories');
  }
  if (event.target.classList.contains('link')) {
    references.titleElement.innerHTML = 'Best Sellers <span>Books</span>';
    references.categoryListElem.classList.add('hidden');
    references.topListElem.classList.remove('hidden');
  }
};

//Kategoriye Ait Kitapların Listesini Getirme
async function categoryList(category) {
  try {
    spinnerPlay(references.titleElement);
    references.categoryListElem.innerHTML = '';

    const categoryData = await getBooksByCategory(category);
    let html = '';

    categoryData.forEach(book => {
      html += `
          <li class="category_list-card">
              <div class="top_list-book_cover_wrapper" data-bookid="${book._id}">
                  <img class="top_list-book_cover" src="${book.book_image}" alt="${book.title}">
              </div>
              <h3 class="top_list-book_title">${book.title}</h3>
              <p class="top_list-book_author">${book.author}</p>
          </li>
          `;
    });

    html += `<li><button class="all_categories">All Categories</button></li>`;
    references.categoryListElem.innerHTML = html;
  } catch (error) {
    console.error('Kategori verisi alınırken hata oluştu:', error);
    references.categoryListElem.innerHTML = '<p>Kitaplar yüklenirken bir hata oluştu.</p>';
  } finally {
    spinnerStop();
  }
}
