import { galleryItems } from './gallery-items.js';

const ref = {
    boxGallery: document.querySelector(".gallery")
}

const galleryStart = galleryItems.map((element) => 
    `<a class="gallery__item" href="${element.original}">
        <img class="gallery__image" src="${element.preview}" 
         alt="${element.description}" />
        </a>`   
).join(''); 

ref.boxGallery.insertAdjacentHTML('beforeend', galleryStart);
let gallery = new SimpleLightbox('.gallery a', 
{ captionsData: "alt", captionPosition: "bottom", captionDelay: 250 } );


gallery.on('show.simplelightbox', function (e) {});
