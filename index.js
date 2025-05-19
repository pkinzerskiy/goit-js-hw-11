import{a as g,S as f,i as y}from"./assets/vendor-C61sVsxn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="49810610-79c0179868d457ece08d99a45";function L(s){return console.log("query",s),g("https://pixabay.com/api/",{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");function q(s){console.log("createGallery",s),u.innerHTML=s.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:t,comments:a,downloads:p})=>`<li class="gallery-item">
  <a class="item-link" href="${i}">
    <img class="gallery-image" src="${o}" alt="${r}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${e}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${t}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${a}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${p}</p>
      </li>
    </ul></a
  >
</li>`).join("")}function l(){u.innerHTML=""}function v(){d.classList.add("loader")}function c(){d.classList.remove("loader")}document.querySelector(".gallery");const x=document.querySelector(".loader");x.classList.remove("loader");const m=document.querySelector("form");m.addEventListener("submit",S);function S(s){s.preventDefault(),l();let o=s.target.elements.searchText.value.trim();if(o.match(/^\u0020{0,}$/)){n("Sorry, Please input query!"),l();return}v(),console.log("query",o),L(o).then(i=>{const r=i.data.hits;if(console.log("response:",i.data.hits),!i.data.hits.length){console.log("totalHits",i.data.total),c(),n("Sorry, there are no images matching your search query. Please try again!");return}c(),q(r),$()}).catch(i=>console.log(i.message)),m.reset()}function $(){new f(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function n(s){y.show({message:s,messageColor:"white",backgroundColor:"red",position:"topRight",iconUrl:"./img/cirlcle-error.svg",iconColor:"white"})}
//# sourceMappingURL=index.js.map
