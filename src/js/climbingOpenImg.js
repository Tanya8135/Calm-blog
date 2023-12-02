import { galleryItems } from './gallery/galleryMountains'
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