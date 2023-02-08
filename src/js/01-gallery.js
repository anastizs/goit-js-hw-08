// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const imgContainer = document.querySelector(".gallery");

const cardsMarkup = createColorCardsMarkup(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createColorCardsMarkup(galleryItems) {
  return galleryItems
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
    .join("");
}
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});