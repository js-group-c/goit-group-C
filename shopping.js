import{g as b}from"./assets/support-ukr-J0-nDD3z.js";import"./assets/vendor-C2dPOmMF.js";let i=JSON.parse(localStorage.getItem("shoppingList"))||[];const c=document.getElementById("book-container"),d=document.querySelector(".empty-list"),p={Amazon1:"img/amazon.svg",Amazon2:"img/amazon-dark.svg"};let r=4,a=1;async function o(){if(i.length===0){d.style.display="block",c.innerHTML="",g();return}else d.style.display="none";c.innerHTML="";const t=i.filter(n=>n!=null&&n!=="");if(t.length===0){d.style.display="block",c.innerHTML="",g();return}try{const n=await b(t);m(n),g()}catch(n){console.error("Error",n)}}function m(t){c.innerHTML="";const n=(a-1)*r,e=n+r;t.slice(n,e).forEach((s,u)=>{const l=document.createElement("div");l.classList.add("book-card"),l.setAttribute("data-index",u+1),l.innerHTML=`
      <img src="${s.book_image}" alt="${s.title}" class="book-cover">
      <div class="book-info">
        <button class="delete-btn" data-id="${s._id}">&#128465;</button>
        <h3>${s.title}</h3>
        <p class="category">${s.list_name}</p>
        <p class="description">${s.description}</p>
        <p class="author">${s.author}</p>    
        <a href="${s.buy_links[0].url}" target="_blank" class="buy-button"><img src="${p.Amazon1}"  alt="icon" class="amazon-icon"></a>
        <a href="${s.buy_links[0].url}" target="_blank" class="buy-button"><img src="${p.Amazon2}"  alt="icon" class="amazon-icon-dark"></a>
      </div>
    `,c.appendChild(l)})}function g(){const t=Math.ceil(i.length/r),n=document.getElementById("pagination-container");if(n.innerHTML="",!(t<=1)){n.innerHTML+=`
    <button class="pagination-btn first-page" ${a===1?"disabled":""}>⏮</button>
  `,n.innerHTML+=`
    <button class="pagination-btn prev-page" ${a===1?"disabled":""}>◀</button>
  `;for(let e=Math.max(1,a-2);e<=Math.min(t,a+2);e++)n.innerHTML+=`
      <button class="pagination-btn page-number ${e===a?"active":""}" data-page="${e}">${e}</button>
    `;n.innerHTML+=`
    <button class="pagination-btn next-page" ${a===t?"disabled":""}>▶</button>
  `,n.innerHTML+=`
    <button class="pagination-btn last-page" ${a===t?"disabled":""}>⏭</button>
  `}}document.addEventListener("click",function(t){t.target.classList.contains("page-number")?(a=parseInt(t.target.dataset.page),o()):t.target.classList.contains("first-page")?(a=1,o()):t.target.classList.contains("prev-page")?a>1&&(a--,o()):t.target.classList.contains("next-page")?a<Math.ceil(i.length/r)&&(a++,o()):t.target.classList.contains("last-page")&&(a=Math.ceil(i.length/r),o())});document.addEventListener("DOMContentLoaded",o);document.getElementById("book-container").addEventListener("click",function(t){if(t.target.classList.contains("delete-btn")){const n=t.target.dataset.id;i=i.filter(e=>e!==n),f(i),o()}});function f(t){localStorage.setItem("shoppingList",JSON.stringify(t))}
//# sourceMappingURL=shopping.js.map
