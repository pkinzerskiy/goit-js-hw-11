"use strict";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const container = document.querySelector(".gallery");
// приймає масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
const loader = document.querySelector(".loader");

export function createGallery(images) {
 //   console.log("createGallery",images);
 container.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  <a class="item-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${likes}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${views}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${comments}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${downloads}</p>
      </li>
    </ul></a
  >
</li>`
    )
    .join('');
};

export function createLightBox() {
  let galleryLightBox = new SimpleLightbox('.gallery li a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  galleryLightBox.refresh();
}

// нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
export function clearGallery() {
    container.innerHTML = '';
};
// повинна додавати клас для відображення лоадера. Нічого не повертає.
export function showLoader() {
    loader.classList.add('loader');    
};
//нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
export function hideLoader() {
    loader.classList.remove('loader');
}


