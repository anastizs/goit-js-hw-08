// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imgContainer = document.querySelector('.gallery');

const cardsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
    `;
  })
  .join('');

imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
