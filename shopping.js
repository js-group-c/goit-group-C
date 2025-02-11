import{g as u}from"./assets/support-ukr-DM50oc6P.js";import"./assets/vendor-C2dPOmMF.js";let i=JSON.parse(localStorage.getItem("shoppingList"))||[];const c=document.getElementById("book-container"),d=document.querySelector(".empty-list");let r=4,e=1;async function o(){if(i.length===0){d.style.display="block",c.innerHTML="",g();return}else d.style.display="none";c.innerHTML="";const t=i.filter(n=>n!=null&&n!=="");if(t.length===0){d.style.display="block",c.innerHTML="",g();return}try{const n=await u(t);b(n),g()}catch(n){console.error("Error",n)}}function b(t){c.innerHTML="";const n=(e-1)*r,a=n+r;t.slice(n,a).forEach((s,p)=>{const l=document.createElement("div");l.classList.add("book-card"),l.setAttribute("data-index",p+1),l.innerHTML=`
      <img src="${s.book_image}" alt="${s.title}" class="book-cover">
      <div class="book-info">
        <button class="delete-btn" data-id="${s._id}">&#128465;</button>
        <h3>${s.title}</h3>
        <p class="category">${s.list_name}</p>
        <p class="description">${s.description}</p>
        <p class="author">${s.author}</p>
        <a href="${s.buy_links[0].url}" target="_blank" class="buy-button"><img src="img/amazon.svg" alt="icon" class="amazon-icon"></a>
      </div>
    `,c.appendChild(l)})}function g(){const t=Math.ceil(i.length/r),n=document.getElementById("pagination-container");if(n.innerHTML="",!(t<=1)){n.innerHTML+=`
    <button class="pagination-btn first-page" ${e===1?"disabled":""}>⏮</button>
  `,n.innerHTML+=`
    <button class="pagination-btn prev-page" ${e===1?"disabled":""}>◀</button>
  `;for(let a=Math.max(1,e-2);a<=Math.min(t,e+2);a++)n.innerHTML+=`
      <button class="pagination-btn page-number ${a===e?"active":""}" data-page="${a}">${a}</button>
    `;n.innerHTML+=`
    <button class="pagination-btn next-page" ${e===t?"disabled":""}>▶</button>
  `,n.innerHTML+=`
    <button class="pagination-btn last-page" ${e===t?"disabled":""}>⏭</button>
  `}}document.addEventListener("click",function(t){t.target.classList.contains("page-number")?(e=parseInt(t.target.dataset.page),o()):t.target.classList.contains("first-page")?(e=1,o()):t.target.classList.contains("prev-page")?e>1&&(e--,o()):t.target.classList.contains("next-page")?e<Math.ceil(i.length/r)&&(e++,o()):t.target.classList.contains("last-page")&&(e=Math.ceil(i.length/r),o())});document.addEventListener("DOMContentLoaded",o);document.getElementById("book-container").addEventListener("click",function(t){if(t.target.classList.contains("delete-btn")){const n=t.target.dataset.id;i=i.filter(a=>a!==n),f(i),o()}});function f(t){localStorage.setItem("shoppingList",JSON.stringify(t))}
//# sourceMappingURL=shopping.js.map
