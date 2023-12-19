import { galleryItemsCamera } from '../gallery/galleryCamera'
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const link = document.querySelector('.linkCamera')
link.addEventListener('click', function (evt) {
    evt.preventDefault();

    lightbox.open()
})

const galleryList = document.querySelector('.galleryCamera')
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

const galleryMarkup = galleryItemsCamera.map(item => createGalleryItem(item)).join('')
galleryList.insertAdjacentHTML('beforeend', galleryMarkup)

const lightbox = new SimpleLightbox('.galleryCamera a.gallery__link')
