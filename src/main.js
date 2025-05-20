"use strict";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";

import { createGallery, clearGallery, showLoader, hideLoader, createLightBox } from './js/render-functions.js';

const container = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

loader.classList.remove('loader');

const form = document.querySelector("form");
form.addEventListener("submit", processingBtn);

function processingBtn(event) {
    event.preventDefault();
    clearGallery();

    let query = event.target.elements.searchText.value.trim();
    
    if (query.match(/^\u0020{0,}$/)) {
        message('Sorry, Please input query!');
        clearGallery();
        return;
    }
    
    showLoader();

    // console.log("query", query );
    getImagesByQuery(query)
        .then(response => {
            const data = response.data.hits;
//            console.log("response:", response.data.hits);
            if (!response.data.hits.length) {
    //            console.log("totalHits", response.data.total);
                hideLoader();
                message('Sorry, there are no images matching your search query. Please try again!');
                return;
            }
            hideLoader();
            createGallery(data);
            createLightBox() 
        })
        .catch(error => console.log(error.message));
    
    form.reset();
}


function message(msg) {
    iziToast.show({
        message: msg,
        messageColor: 'white', // blue, red, 
        backgroundColor: 'red',
        position: 'topRight',
        iconUrl: './cirlcle-error.svg',
    });
}

