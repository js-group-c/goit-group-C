import{a as l,S as d}from"./assets/vendor-CO2X5ukZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const p="https://books-backend.p.goit.global",u=["/books/category-list","/books/top-books","/books/category","/books"];async function f(){const e=`${p}${u[1]}`;try{return(await l.get(e)).data}catch(o){throw console.error("Error fetching top books: ",o),o}}let m={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};const a=new d(m),_=e=>{a.spin(e)},b=()=>{a.stop()},c={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title")};document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",clickSeeMore),document.addEventListener("click",y)});document.addEventListener("DOMContentLoaded",async function(){_(c.titleElement),c.topListElem.innerHTML="";const o=await f();let n="";o.forEach(r=>{n+=L(r)}),c.topListElem.innerHTML=n,b()});function L(e){return`<li class="top_list-container">
            <h2 class="top_list-category_name">${e.list_name}</h2>
            <ul class="top_list-cards">${g(e.books)}</ul>
            <button class="top_list-see_more" data-category="${e.list_name}">See More</button>
        </li>`}function g(e){let o=1;const n=e.map(r=>`
        <li class="top_list-card" data-book-sequence-number="${o++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${r._id}" tabindex="0">
                <img class="top_list-book_cover" src="${r.book_image}" alt="${r.title}">
                
            </div>
            <h3 class="top_list-book_title">${r.title}</h3>
            <p class="top_list-book_author">${r.author}</p>
        </li>
        `).join("");return o++,n}const y=function(e){if(e.target.classList.contains("top_list-book_cover_wrapper")){const o=e.target.dataset.bookid;onOpenModal(o)}};
//# sourceMappingURL=index.js.map
