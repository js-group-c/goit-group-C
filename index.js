import{a as v,S as A,i as O}from"./assets/vendor-7_o5VXWO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const N="https://books-backend.p.goit.global/books/category-list";fetch(N).then(e=>e.json()).then(e=>{e.forEach(t=>{const n=`<li class="ctg"><a href="#" class='${t.list_name}'>${t.list_name}</a></li>`;document.getElementById("categories").insertAdjacentHTML("beforeend",n)})}).catch(function(e){console.log(e)});const E="https://books-backend.p.goit.global",S=["/books/category-list","/books/top-books","/books/category","/books"];async function D(){const e=`${E}${S[1]}`;try{return(await v.get(e)).data}catch(t){throw console.error("Error fetching top books: ",t),t}}async function P(e){const t=`${E}${S[2]}`,n={category:e};try{return(await v.get(t,{params:n})).data}catch(o){throw console.error("Error fetching books by category: ",o),o}}async function j(e){try{const t=[];for(const n of e){const o=`${E}${S[3]}/${n}`,s=await v.get(o);t.push(s.data)}return t}catch(t){throw console.error("Error fetching books by IDs: ",t),t}}var d=document.getElementById("login-modal"),g=document.getElementById("btn-sign-up"),J=document.getElementsByClassName("close-modal")[0],K=document.getElementsByClassName("submit-button")[0],h=document.getElementsByClassName("hmbrgr")[0];g.addEventListener("click",g.onclick);h.addEventListener("click",h.onclick);K.addEventListener("click",z);g.onclick=function(){d.style.display="flex"};h.onclick=function(){d.style.display="flex"};J.onclick=function(){d.style.display="none"};window.onclick=function(e){e.target==d&&(d.style.display="none")};function z(){var e=document.getElementById("username").value,t=document.getElementById("email").value,n=document.getElementById("password").value;e&&t&&n?(alert("Signup Successful!"),d.style.display="none"):alert("Please fill out all fields.")}let U={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};const $=new A(U),C=e=>{$.spin(e)},I=()=>{$.stop()},p=document.getElementById("bookModal"),R=document.querySelector(".close"),F=document.querySelector(".modalImage"),W=document.querySelector(".modalTitle"),Q=document.querySelector(".modalAuthor"),V=document.querySelector(".modalDescription"),Y=document.querySelector(".modalBuyLinks"),f=document.querySelector(".addToShoppingList"),k=document.querySelector(".removeFromShoppingList"),M=document.querySelector(".feedback-div");let a=JSON.parse(localStorage.getItem("shoppingList"))||[],c=null;const G={Amazon:"../img/png/Amazon_logo.png","Apple Books":"../img/png/apple-books.png","Barnes and Noble":"../img/png/barnes-noblepng.png","Books-A-Million":"../img/png//books-a-million.png",Bookshop:"../img/png/bookshop.png",IndieBound:"../img/png/indie-bound.png"};async function X(e){c=e;try{const t=await Z(e);t&&(F.src=t.book_image,W.textContent=t.title,Q.textContent=`Yazar: ${t.author}`,V.textContent=t.description||"Açıklama mevcut değil.",Y.innerHTML=t.buy_links.map(n=>{const o=G[n.name]||"./images/default-logo.png";return`<li><a href="${n.url}" target="_blank"><img src="${o}" alt="${n.name}" style="width: 40px; height: auto; margin-right: 10px;"></a></li>`}).join("")),_(e),p.style.display="block"}catch(t){console.error("Kitap bilgileri yüklenirken hata oluştu:",t)}}async function Z(e){try{const t=await fetch(`https://books-backend.p.goit.global/books/${e}`);if(!t.ok)throw new Error("Kitap bilgisi getirilemedi.");return await t.json()}catch(t){return console.error("API hatası:",t),null}}function _(e){a.includes(e)?(f.style.display="none",k.style.display="block"):(f.style.display="block",k.style.display="none")}f.addEventListener("click",()=>{a.includes(c)||(a.push(c),localStorage.setItem("shoppingList",JSON.stringify(a))),_(c),M.style.display="block"});k.addEventListener("click",()=>{a=a.filter(e=>e!==c),localStorage.setItem("shoppingList",JSON.stringify(a)),_(c),M.style.display="none"});R.addEventListener("click",()=>{p.style.display="none"});window.addEventListener("click",e=>{e.target===p&&(p.style.display="none")});function ee(){O.show({message:"There are no more books in this category",position:"topRight",backgroundColor:"#EAC645"})}const l={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title"),allCategoriesElement:document.querySelector("#categories")};let w=!1;document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",se),document.addEventListener("click",ne),document.addEventListener("click",le),window.addEventListener("scroll",H)});document.addEventListener("DOMContentLoaded",async function(){C(l.titleElement),l.topListElem.innerHTML="";const t=await D();let n="";t.forEach(o=>{n+=te(o)}),l.topListElem.innerHTML=n,I()});function te(e){return`<li class="top_list-container">
            <h2 class="top_list-category_name">${e.list_name}</h2>
            <ul class="top_list-cards">${oe(e.books)}</ul>
            <button class="top_list-see_more" data-category="${e.list_name}">See More</button>
        </li>`}function oe(e){let t=1;const n=e.map(o=>`
        <li class="top_list-card" data-book-sequence-number="${t++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${o._id}">
                <img class="top_list-book_cover" src="${o.book_image}" alt="${o.title}">
            <p class="top_list-quick">QUICK VIEW</p>
                </div>
            
            <h3 class="top_list-book_title">${o.title}</h3>
            <p class="top_list-book_author">${o.author}</p>
        </li>
        `).join("");return t++,n}const ne=function(e){const t=e.target.closest(".top_list-book_cover_wrapper");if(t){const n=t.dataset.bookid;X(n)}},se=function(e){if(e.target.classList.contains("top_list-see_more")){l.topListElem.classList.add("hidden"),l.categoryListElem.classList.remove("hidden");const t=e.target.dataset.category;ie(t),T(t),L(t)}},le=async function(e){e.target.classList.contains("all_categories")&&(l.titleElement.innerHTML="Best Sellers <span>Books</span>",l.categoryListElem.classList.add("hidden"),l.topListElem.classList.remove("hidden"),L("All categories")),e.target.classList.contains("...")&&(l.titleElement.innerHTML=category,l.categoryListElem.classList.remove("hidden"),l.topListElem.classList.add("hidden"),L(category),await T(category))};async function T(e){try{C(l.titleElement),l.categoryListElem.innerHTML="";const t=await P(e);let n="";t.forEach(o=>{n+=`
          <li class="category_list-card">
              <div class="top_list-book_cover_wrapper" data-bookid="${o._id}">
                  <img class="top_list-book_cover" src="${o.book_image}" alt="${o.title}">
              </div>
              <h3 class="top_list-book_title">${o.title}</h3>
              <p class="top_list-book_author">${o.author}</p>
          </li>
          `}),n+='<li><button class="all_categories">All Categories</button></li>',l.categoryListElem.innerHTML=n}catch(t){console.error("Kategori verisi alınırken hata oluştu:",t),l.categoryListElem.innerHTML="<p>Kitaplar yüklenirken bir hata oluştu.</p>"}finally{I()}}function ie(e){l.titleElement.innerHTML="";const t=e.split(" ");if(t.length===1){l.titleElement.textContent=e;return}const n=t.pop();l.titleElement.textContent=t.join(" ");const o=document.createElement("span");o.textContent=" "+n,l.titleElement.appendChild(o)}function L(e){document.querySelectorAll("..."),l.allCategoriesElement.forEach(t=>{t.textContent.trim()===e?t.classList.add("active"):t.classList.remove("active")})}function H(){const e=document.querySelector(".all_categories");if(e){const t=e.getBoundingClientRect(),n=window.innerHeight;t.top<n&&!w&&l.topListElem.classList.contains("hidden")&&(ee(),w=!0)}}let y;window.addEventListener("scroll",function(){y&&clearTimeout(y),y=setTimeout(function(){H()},300)});document.addEventListener("DOMContentLoaded",function(){fetch("../partials/header.html").then(e=>e.text()).then(e=>{document.getElementById("header-placeholder").innerHTML=e}).catch(e=>console.error("Header yüklenirken hata oluştu:",e)),fetch("../partials/support-ukr.html").then(e=>e.text()).then(e=>{document.getElementById("support-ukr-placeholder").innerHTML=e}).catch(e=>console.error("Support-ukr yüklenirken hata oluştu:",e))});const b=JSON.parse(localStorage.getItem("shoppingList"))||[];async function x(){const e=document.getElementById("book-container"),t=document.querySelector(".empty-list");if(b.length===0){t.style.display="block",e.innerHTML="";return}else t.style.display="none";e.innerHTML="";try{(await j(b)).forEach(o=>{const s=document.createElement("div");s.classList.add("book-card"),s.innerHTML=`
          <img src="${o.book_image}" alt="${o.title}" class="book-cover">
          <div class="book-info">
            <h3>${o.title}</h3>
            <p class="category">${o.list_name}</p>
            <p class="description">${o.description}</p>
            <p class="author">By: ${o.author}</p>
            <a href="${o.buy_links[0].url}" target="_blank" class="buy-button">Buy</a>
            <button class="delete-btn" data-id="${o._id}">🗑 Remove</button>
          </div>
        `,e.appendChild(s)})}catch(n){console.error("Error",n)}}document.addEventListener("DOMContentLoaded",x);document.getElementById("book-container").addEventListener("click",function(e){if(e.target.classList.contains("delete-btn")){const t=e.target.dataset.id;let n=JSON.parse(localStorage.getItem("shoppingList"))||[];n=n.filter(o=>o!==t),localStorage.setItem("shoppingList",JSON.stringify(n)),x()}});const q=document.querySelector(".pagination");b.length===0?q.style.display="none":q.style.display="flex";var re=document.querySelector("div.support-ukr > div.slider-div"),u=document.getElementById("slider");re.addEventListener("click",ae);function ae(){de(),ce()}function ce(){u.src.includes("/slider.svg#slider")?u.src="../img/blocks/sliderUp.svg#sliderUp":u.src="../img/blocks/slider.svg#slider"}function de(){if(u.src.includes("/slider.svg#slider")){var e=document.querySelector("ol.support-list > li:nth-child(1)"),t=document.querySelector("ol.support-list > li:nth-child(2)"),n=document.querySelector("ol.support-list > li:nth-child(3)");e.style.display="none",t.style.display="none",n.style.display="none";var o=document.querySelector("ol.support-list");o.style.counterSet="custom 3";var s=document.querySelector("ol.support-list > li:nth-child(7)"),i=document.querySelector("ol.support-list > li:nth-child(8)"),r=document.querySelector("ol.support-list > li:nth-child(9)");s.style.display="flex",i.style.display="flex",r.style.display="flex";var B=document.querySelectorAll("ol.support-list > li.last3 > a > img ");B.forEach(m=>m.style.position="relative"),B.forEach(m=>m.style.top="0px")}else{var e=document.querySelector("ol.support-list > li:nth-child(1)"),t=document.querySelector("ol.support-list > li:nth-child(2)"),n=document.querySelector("ol.support-list > li:nth-child(3)");e.style.display="",t.style.display="",n.style.display="";var o=document.querySelector("ol.support-list");o.style.counterSet="custom 1";var s=document.querySelector("ol.support-list > li:nth-child(7)"),i=document.querySelector("ol.support-list > li:nth-child(8)"),r=document.querySelector("ol.support-list > li:nth-child(9)");s.style.display="none",i.style.display="none",r.style.display="none"}}
//# sourceMappingURL=index.js.map
