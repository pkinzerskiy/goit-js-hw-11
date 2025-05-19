import{a as g,S as f,i as y}from"./assets/vendor-C61sVsxn.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="49810610-79c0179868d457ece08d99a45";function L(s){return console.log("query",s),g("https://pixabay.com/api/",{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const u=document.querySelector(".gallery"),m=document.querySelector(".load");function x(s){console.log("createGallery",s),u.innerHTML=s.map(({webformatURL:a,largeImageURL:i,tags:o,likes:e,views:t,comments:r,downloads:p})=>`<li class="gallery-item">
  <a class="item-link" href="${i}">
    <img class="gallery-image" src="${a}" alt="${o}" />
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
        <p class="statistic-value">${r}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${p}</p>
      </li>
    </ul></a
  >
</li>`).join("")}function l(){u.innerHTML=""}function q(){m.classList.add("loader")}function c(){m.classList.remove("loader")}document.querySelector(".gallery");const d=document.querySelector("form");d.addEventListener("submit",v);function v(s){s.preventDefault(),l();let a=s.target.elements.searchText.value.trim();if(a.match(/^\u0020{0,}$/)){n("Sorry, Please input query!"),l();return}q(),console.log("query",a),L(a).then(i=>{const o=i.data.hits;if(console.log("response:",i.data.hits),!i.data.hits.length){console.log("totalHits",i.data.total),c(),n("Sorry, there are no images matching your search query. Please try again!");return}c(),x(o),S()}).catch(i=>console.log(i.message)),d.reset()}function S(){new f(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function n(s){y.show({message:s,messageColor:"white",backgroundColor:"red",position:"topRight",iconUrl:"./img/cirlcle-error.svg",iconColor:"white"})}
//# sourceMappingURL=index.js.map
