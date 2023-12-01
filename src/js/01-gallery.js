// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </li>`;

const galleryMarkup = galleryItems.map(item => createGalleryItem(item)).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a.gallery__link'); /* обере тільки ті зображення, які мають клас gallery__link */

console.log(galleryItems);
