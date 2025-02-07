const url = 'https://books-backend.p.goit.global/books/category-list';
fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(cat => {
      const markup = `<li class="ctg"><a href="#" class='sideCat'>${cat.list_name}</a></li>`;
      document
        .getElementById('categories')
        .insertAdjacentHTML('beforeend', markup);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
