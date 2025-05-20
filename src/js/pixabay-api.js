"use strict";


import axios from "axios";
const myKey = "49810610-79c0179868d457ece08d99a45";



export function getImagesByQuery(query) {
    //console.log("query",query );
   return axios("https://pixabay.com/api/", {
        params: {
            key: myKey,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    })
}

