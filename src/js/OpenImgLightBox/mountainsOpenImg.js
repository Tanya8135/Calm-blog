import { galleryItems } from '../gallery/galleryMountains'
// import simpleLightbox from 'simplelightbox'
// import customLightbox from 'simplelightbox/dist/simple-lightbox.esm'
import 'simplelightbox/dist/simple-lightbox.min.css';
import simpleLightbox from 'simplelightbox';

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
   </li>
`

const galleryMarkup = galleryItems.map(item => createGalleryItem(item)).join('')
galleryList.insertAdjacentHTML('beforeend', galleryMarkup)

const lightbox = new simpleLightbox('.gallery a.gallery__link')