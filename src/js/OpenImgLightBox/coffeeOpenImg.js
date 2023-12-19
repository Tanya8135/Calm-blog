import { galleryItemsCoffee } from '../gallery/galleryCoffee'
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const link = document.querySelector('.linkCoffee')
link.addEventListener('click', function (evt) {
    evt.preventDefault();

    lightbox.open()
})

const galleryList = document.querySelector('.galleryCoffee')
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
   </li>
`

const galleryMarkup = galleryItemsCoffee.map(item => createGalleryItem(item)).join('')
galleryList.insertAdjacentHTML('beforeend', galleryMarkup)

const lightbox = new SimpleLightbox('.galleryCoffee a.gallery__link')
