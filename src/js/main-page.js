import { getTopList, getBooksByCategory } from './booksAPI.js';
import { spinnerPlay, spinnerStop } from './spinner.js';


const references = {
  topListElem: document.querySelector('#topList'),
  categoryListElem: document.querySelector('#categoryList'),
  titleElement: document.querySelector('.top_list-title'),
};


document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', clickSeeMore);
  document.addEventListener('click', clickByBook);
  document.addEventListener('click', clickByAllCategory);
  window.addEventListener('scroll', scrollHandler);
});


//En Çok Satanlar Listesini Getirme
document.addEventListener('DOMContentLoaded', async function () {
  spinnerPlay(references.titleElement);
  references.topListElem.innerHTML = '';
  const topListData = getTopList();
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
  const bookHtml = books.map(book => `
        <li class="top_list-card" data-book-sequence-number="${i++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${
              book._id
            }" tabindex="0">
                <img class="top_list-book_cover" src="${
                  book.book_image
                }" alt="${book.title}">
                <div class="quick-view-text">Quick view</div>
            </div>
            <h3 class="top_list-book_title">${book.title}</h3>
            <p class="top_list-book_author">${book.author}</p>
        </li>
        `).join('');
  i++;
  return bookHtml;
}