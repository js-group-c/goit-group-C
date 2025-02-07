import{a as w,S as j,i as z}from"./assets/vendor-C2dPOmMF.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const K="https://books-backend.p.goit.global/books/category-list";fetch(K).then(t=>t.json()).then(t=>{t.forEach(e=>{const o=`<li class="ctg"><a href="#" class='${e.list_name}'>${e.list_name}</a></li>`;document.getElementById("categories").insertAdjacentHTML("beforeend",o)})}).catch(function(t){console.log(t)});const _="https://books-backend.p.goit.global",B=["/books/category-list","/books/top-books","/books/category","/books"];async function J(){const t=`${_}${B[1]}`;try{return(await w.get(t)).data}catch(e){throw console.error("Error fetching top books: ",e),e}}async function U(t){const e=`${_}${B[2]}`,o={category:t};try{return(await w.get(e,{params:o})).data}catch(l){throw console.error("Error fetching books by category: ",l),l}}async function R(t){try{const e=[];for(let o of t){const l=`${_}${B[3]}/${o}`,s=await w.get(l);e.push(s.data)}return e}catch(e){throw console.error("Error fetching books by IDs: ",e),e}}var y=document.getElementById("login-modal"),b=document.getElementById("btn-sign-up"),W=document.getElementsByClassName("close-modal")[0],Q=document.getElementsByClassName("submit-button")[0],k=document.getElementsByClassName("hmbrgr")[0],V=document.querySelector("div.right-container > a.switcher-2");b.addEventListener("click",b.onclick);k.addEventListener("click",k.onclick);Q.addEventListener("click",Y);V.addEventListener("click",G);b.onclick=function(){y.style.display="flex"};k.onclick=function(){y.style.display="flex"};W.onclick=function(){y.style.display="none"};window.onclick=function(t){t.target==y&&(y.style.display="none")};function Y(){var t=document.getElementById("username").value,e=document.getElementById("email").value,o=document.getElementById("password").value;t&&e&&o?(alert("Signup Successful!"),y.style.display="none"):alert("Please fill out all fields.")}function G(){var t=document.querySelector("svg.swicther-2-svg"),e=document.querySelector("header.header"),o=document.querySelector("svg.nav-logo-txt"),l=document.querySelector("svg.hmbrgr-menu"),s=document.querySelector("a.nav-link.shopping-list"),n=document.querySelector("svg.lock-02"),c=document.querySelector("body"),m=document.querySelectorAll("ul#categories > li.ctg"),d=document.querySelector(".top_list-title"),C=document.querySelectorAll(".top_list-book_title "),$=document.querySelectorAll(".top_list-see_more"),I=document.querySelector(".all_categories");t.innerHTML.includes("Switcher-2@2x.svg#switcher2")?(t.innerHTML='<use href="../img/SwitcherDark@2x.svg#switcherDark"></use>',e.style.backgroundColor="var(--black)",e.style.border=" 1.5px solid #FFFFFF",o.style.filter="brightness(0) invert(1)",l.style.filter="brightness(0) invert(1)",s.style.color="var(--white)",n.style.filter="brightness(0) invert(1)",c.style.backgroundColor="var(--black)",m.forEach(i=>{i.style.color="#FFFFFF"}),d.style.color="var(--white)",I.style.color="var(--white)",C.forEach(i=>{i.style.color="var(--white)"}),$.forEach(i=>{i.style.color="var(--white)"})):(t.innerHTML='<use href="../img/Switcher-2@2x.svg#switcher2"></use>',e.style.backgroundColor="var(--white)",e.style.border=" 1.5px solid #111111",o.style.filter="",l.style.filter="",s.style.color="var(--black)",n.style.filter="",c.style.backgroundColor="var(--white)",m.forEach(i=>{i.style.color="#111111"}),d.style.color="var(--black)",I.style.color="var(--black)",C.forEach(i=>{i.style.color="var(--black)"}),$.forEach(i=>{i.style.color="var(--black)"}))}let X={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};const A=new j(X),H=t=>{A.spin(t)},F=()=>{A.stop()},h=document.getElementById("bookModal"),Z=document.querySelector(".close"),ee=document.querySelector(".modalImage"),te=document.querySelector(".modalTitle"),oe=document.querySelector(".modalAuthor"),le=document.querySelector(".modalDescription"),se=document.querySelector(".modalBuyLinks"),L=document.querySelector(".addToShoppingList"),E=document.querySelector(".removeFromShoppingList"),N=document.querySelector(".feedback-div");let a=JSON.parse(localStorage.getItem("shoppingList"))||[],u=null;const ne={Amazon:"../img/png/Amazon_logo.png","Apple Books":"../img/png/apple-books.png","Barnes and Noble":"../img/png/barnes-noblepng.png","Books-A-Million":"../img/png//books-a-million.png",Bookshop:"../img/png/bookshop.png",IndieBound:"../img/png/indie-bound.png"};async function re(t){u=t;try{const e=await ie(t);e&&(ee.src=e.book_image,te.textContent=e.title,oe.textContent=`Yazar: ${e.author}`,le.textContent=e.description||"Açıklama mevcut değil.",se.innerHTML=e.buy_links.map(o=>{const l=ne[o.name]||"./images/default-logo.png";return`<li><a href="${o.url}" target="_blank"><img src="${l}" alt="${o.name}" style="width: 40px; height: auto; margin-right: 10px;"></a></li>`}).join("")),q(t),h.style.display="block",document.body.style.overflow="hidden"}catch(e){console.error("Kitap bilgileri yüklenirken hata oluştu:",e)}}async function ie(t){try{const e=await fetch(`https://books-backend.p.goit.global/books/${t}`);if(!e.ok)throw new Error("Kitap bilgisi getirilemedi.");return await e.json()}catch(e){return console.error("API hatası:",e),null}}function q(t){a.includes(t)?(L.style.display="none",E.style.display="block"):(L.style.display="block",E.style.display="none")}L.addEventListener("click",()=>{a.includes(u)||(a.push(u),localStorage.setItem("shoppingList",JSON.stringify(a))),q(u),N.style.display="block"});E.addEventListener("click",()=>{a=a.filter(t=>t!==u),localStorage.setItem("shoppingList",JSON.stringify(a)),q(u),N.style.display="none"});Z.addEventListener("click",()=>{h.style.display="none",document.body.style.overflow="visible"});window.addEventListener("click",t=>{t.target===h&&(h.style.display="none",document.body.style.overflow="visible")});document.addEventListener("keydown",function(t){t.key==="Escape"&&(h.style.display="none",document.body.style.overflow="visible")});function ce(){z.show({message:"There are no more books in this category",position:"topRight",backgroundColor:"#EAC645"})}const r={topListElem:document.querySelector("#topList"),categoryListElem:document.querySelector("#categoryList"),titleElement:document.querySelector(".top_list-title"),allCategoriesElement:document.querySelector("#categories")};let M=!1;document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",pe),document.addEventListener("click",ue),document.addEventListener("click",ye),window.addEventListener("scroll",D)});document.addEventListener("DOMContentLoaded",async function(){H(r.titleElement),r.topListElem.innerHTML="";const e=await J();let o="";e.forEach(l=>{o+=ae(l)}),r.topListElem.innerHTML=o,F()});function ae(t){return`<li class="top_list-container">
            <h2 class="top_list-category_name">${t.list_name}</h2>
            <ul class="top_list-cards">${de(t.books)}</ul>
            <button class="top_list-see_more" data-category="${t.list_name}">See More</button>
        </li>`}function de(t){let e=1;const o=t.filter(n=>n.book_image),l=[];for(let n=0;n<o.length;n++)l.push(o[n]);for(;l.length<5;)l.push(o[l.length%o.length]);const s=l.map(n=>`
        <li class="top_list-card" data-book-sequence-number="${e++}">
            <div class="top_list-book_cover_wrapper" data-bookid="${n._id}">
                <img class="top_list-book_cover" src="${n.book_image}" alt="${n.title}">
            <p class="top_list-quick">QUICK VIEW</p>
                </div>
            
            <h3 class="top_list-book_title">${n.title}</h3>
            <p class="top_list-book_author">${n.author}</p>
        </li>
        `).join("");return e++,s}const ue=function(t){const e=t.target.closest(".top_list-book_cover_wrapper");if(e){const o=e.dataset.bookid;re(o)}},pe=function(t){if(t.target.classList.contains("top_list-see_more")){r.topListElem.classList.add("hidden"),r.categoryListElem.classList.remove("hidden");const e=t.target.dataset.category;me(e),O(e),S(e)}},ye=async function(t){t.target.classList.contains("all_categories")&&(r.titleElement.innerHTML="Best Sellers <span>Books</span>",r.categoryListElem.classList.add("hidden"),r.topListElem.classList.remove("hidden"),S("All categories")),t.target.classList.contains("...")&&(r.titleElement.innerHTML=category,r.categoryListElem.classList.remove("hidden"),r.topListElem.classList.add("hidden"),S(category),await O(category))};async function O(t){try{H(r.titleElement),r.categoryListElem.innerHTML="";const e=await U(t);let o="";e.forEach(l=>{o+=`
          <li class="category_list-card">
              <div class="top_list-book_cover_wrapper" data-bookid="${l._id}">
                  <img class="top_list-book_cover" src="${l.book_image}" alt="${l.title}">
              </div>
              <h3 class="top_list-book_title">${l.title}</h3>
              <p class="top_list-book_author">${l.author}</p>
          </li>
          `}),o+='<li><button class="all_categories">All Categories</button></li>',r.categoryListElem.innerHTML=o}catch(e){console.error("Kategori verisi alınırken hata oluştu:",e),r.categoryListElem.innerHTML="<p>Kitaplar yüklenirken bir hata oluştu.</p>"}finally{F()}}function me(t){r.titleElement.innerHTML="";const e=t.split(" ");if(e.length===1){r.titleElement.textContent=t;return}const o=e.pop();r.titleElement.textContent=e.join(" ");const l=document.createElement("span");l.textContent=" "+o,r.titleElement.appendChild(l)}function S(t){document.querySelectorAll("..."),r.allCategoriesElement.forEach(e=>{e.textContent.trim()===t?e.classList.add("active"):e.classList.remove("active")})}function D(){const t=document.querySelector(".all_categories");if(t){const e=t.getBoundingClientRect(),o=window.innerHeight;e.top<o&&!M&&r.topListElem.classList.contains("hidden")&&(ce(),M=!0)}}let v;window.addEventListener("scroll",function(){v&&clearTimeout(v),v=setTimeout(function(){D()},300)});const P=document.getElementById("scrollToTopBtn");document.body.scrollTop=0;document.documentElement.scrollTop=0;P.addEventListener("click",he);window.addEventListener("scroll",ge);function ge(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("scrollToTopBtn").style.display="block",P.classList.remove("btnHidden")):document.getElementById("scrollToTopBtn").style.display="none"}function he(){window.scrollTo({top:0,behavior:"smooth"})}let p=JSON.parse(localStorage.getItem("shoppingList"))||[],g=!1;async function T(){if(g)return;g=!0,console.trace("fetchBooks çağrıldı");const t=document.getElementById("book-container"),e=document.querySelector(".empty-list");if(p.length===0){e.style.display="block",t.innerHTML="",g=!1;return}else e.style.display="none";const o=p.filter(l=>l!=null&&l!=="");if(o.length===0){e.style.display="block",t.innerHTML="",g=!1;return}try{(await R(o)).forEach(s=>{const n=document.createElement("div");n.classList.add("book-card"),n.innerHTML=`
          <img src="${s.book_image}" alt="${s.title}" class="book-cover">
          <div class="book-info">
            <h3>${s.title}</h3>
            <p class="category">${s.list_name}</p>
            <p class="description">${s.description}</p>
            <p class="author">${s.author}</p>
            <a href="${s.buy_links[0].url}" target="_blank" class="buy-button">Amazon</a>
            <button class="delete-btn" data-id="${s._id}">🗑</button>
          </div>
        `,t.appendChild(n)})}catch(l){console.error("Error",l)}g=!1}document.addEventListener("DOMContentLoaded",()=>{T()});document.getElementById("book-container").addEventListener("click",function(t){if(t.target.classList.contains("delete-btn")){const e=t.target.dataset.id;p=p.filter(o=>o!==e),fe(p),T()}});function fe(t){localStorage.setItem("shoppingList",JSON.stringify(t)),document.hidden||T()}const x=document.querySelector(".pagination");p.length===0?x.style.display="none":x.style.display="flex";var ve=document.querySelector("div.support-ukr > div.slider-div"),f=document.getElementById("slider");ve.addEventListener("click",be);function be(){Le(),ke()}function ke(){f.src.includes("/slider.svg#slider")?f.src="../img/blocks/sliderUp.svg#sliderUp":f.src="../img/blocks/slider.svg#slider"}function Le(){if(f.src.includes("/slider.svg#slider")){var t=document.querySelector("ol.support-list > li:nth-child(1)"),e=document.querySelector("ol.support-list > li:nth-child(2)"),o=document.querySelector("ol.support-list > li:nth-child(3)");t.style.display="none",e.style.display="none",o.style.display="none";var l=document.querySelector("ol.support-list");l.style.counterSet="custom 3";var s=document.querySelector("ol.support-list > li:nth-child(7)"),n=document.querySelector("ol.support-list > li:nth-child(8)"),c=document.querySelector("ol.support-list > li:nth-child(9)");s.style.display="flex",n.style.display="flex",c.style.display="flex";var m=document.querySelectorAll("ol.support-list > li.last3 > a > img ");m.forEach(d=>d.style.position="relative"),m.forEach(d=>d.style.top="0px")}else{var t=document.querySelector("ol.support-list > li:nth-child(1)"),e=document.querySelector("ol.support-list > li:nth-child(2)"),o=document.querySelector("ol.support-list > li:nth-child(3)");t.style.display="",e.style.display="",o.style.display="";var l=document.querySelector("ol.support-list");l.style.counterSet="custom 1";var s=document.querySelector("ol.support-list > li:nth-child(7)"),n=document.querySelector("ol.support-list > li:nth-child(8)"),c=document.querySelector("ol.support-list > li:nth-child(9)");s.style.display="none",n.style.display="none",c.style.display="none"}}
//# sourceMappingURL=index.js.map
