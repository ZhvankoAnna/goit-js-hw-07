import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBoxEl = document.querySelector(".gallery");
const imgMarkup = createGalleryItem(galleryItems);

galleryBoxEl.insertAdjacentHTML("beforeend", imgMarkup);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox('.gallery a', {captionSelector: 'img', captionType: 'attr', captionsData: 'alt', captionDelay: 250});
gallery.on('show.simplelightbox', function () {
	// do something…
});

console.log(galleryItems);