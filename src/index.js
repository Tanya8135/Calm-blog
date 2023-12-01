/* Рознести логіки по різним js файлам
створити гілку */
import './css/main.min.css'
import './sass/component/_lightBox.scss'
import './js/test.css'
import './js/burgerMenu'
import './js/loadMore'

import { galleryItems } from './js/gallery-items'
// import simpleLightbox from 'simplelightbox'
// import customLightbox from 'simplelightbox/dist/simple-lightbox.esm'
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const link = document.querySelector('.link')
link.addEventListener('click', function (evt) {
    evt.preventDefault();

    lightbox.open()
})

const galleryList = document.querySelector('.gallery')
const createGalleryItem = ({ preview, original, description }) =>
    `
<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
     <div class="test"></div>
   </li>
`

const galleryMarkup = galleryItems.map(item => createGalleryItem(item)).join('')
galleryList.insertAdjacentHTML('beforeend', galleryMarkup)

const lightbox = new SimpleLightbox('.gallery a.gallery__link')

console.log(galleryItems);