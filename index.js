import{a as f,S as y,i as g}from"./assets/vendor-DEZpR2tN.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="49810610-79c0179868d457ece08d99a45";function L(s){return f("https://pixabay.com/api/",{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const u=document.querySelector(".gallery"),m=document.querySelector(".loader");function x(s){u.innerHTML=s.map(({webformatURL:i,largeImageURL:r,tags:a,likes:e,views:t,comments:o,downloads:p})=>`<li class="gallery-item">
  <a class="item-link" href="${r}">
    <img class="gallery-image" src="${i}" alt="${a}" />
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
</li>`).join("")}function v(){new y(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function l(){u.innerHTML=""}function q(){m.classList.add("loader")}function c(){m.classList.remove("loader")}document.querySelector(".gallery");const S=document.querySelector(".loader");S.classList.remove("loader");const d=document.querySelector("form");d.addEventListener("submit",w);function w(s){s.preventDefault(),l();let i=s.target.elements.searchText.value.trim();if(i.match(/^\u0020{0,}$/)){n("Sorry, Please input query!"),l();return}q(),L(i).then(r=>{const a=r.data.hits;if(!r.data.hits.length){c(),n("Sorry, there are no images matching your search query. Please try again!");return}c(),x(a),v()}).catch(r=>console.log(r.message)),d.reset()}function n(s){g.show({message:s,messageColor:"white",backgroundColor:"red",position:"topRight",iconUrl:"./public/error_outline.svg",iconText:"white",iconColor:"white"})}
//# sourceMappingURL=index.js.map
