import{a as g,S as f,i as y}from"./assets/vendor-C61sVsxn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="49810610-79c0179868d457ece08d99a45";function L(s){return console.log("query",s),g("https://pixabay.com/api/",{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const u=document.querySelector(".gallery"),m=document.querySelector(".loader");function x(s){console.log("createGallery",s),u.innerHTML=s.map(({webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:o,downloads:p})=>`<li class="gallery-item">
  <a class="item-link" href="${i}">
    <img class="gallery-image" src="${r}" alt="${a}" />
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
        <p class="statistic-value">${o}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${p}</p>
      </li>
    </ul></a
  >
</li>`).join("")}function l(){u.innerHTML=""}function q(){m.classList.add("loader")}function c(){m.classList.remove("loader")}document.querySelector(".gallery");const d=document.querySelector("form");d.addEventListener("submit",v);function v(s){s.preventDefault(),l();let r=s.target.elements.searchText.value.trim();if(r.match(/^\u0020{0,}$/)){n("Sorry, Please input query!"),l();return}q(),console.log("query",r),L(r).then(i=>{const a=i.data.hits;if(console.log("response:",i.data.hits),!i.data.hits.length){console.log("totalHits",i.data.total),c(),n("Sorry, there are no images matching your search query. Please try again!");return}c(),x(a),S()}).catch(i=>console.log(i.message)),d.reset()}function S(){new f(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function n(s){y.show({message:s,messageColor:"white",backgroundColor:"red",position:"topRight",iconUrl:"./img/cirlcle-error.svg",iconColor:"white"})}
//# sourceMappingURL=index.js.map
