import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBoxEl = document.querySelector('.gallery')
const imgMarkup = createGalleryItem(galleryItems)

galleryBoxEl.insertAdjacentHTML('beforeend', imgMarkup)

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')
}

let lightbox = null

function handleImgClick(e) {
  e.preventDefault()

  if (e.target.nodeName !== "IMG") {
    return
  }

  const ref = e.target.dataset.source;

  lightbox = basicLightbox
  .create(
    `<img width="1400" height="900" src="${ref}">`, {onClose: (instance) => {
      window.removeEventListener('keydown', handleEscapeBtnPress)
    }}
    )
    lightbox.show();

    window.addEventListener('keydown', handleEscapeBtnPress)
}

function handleEscapeBtnPress(e) {
  console.log(e)
  if(e.code === 'Escape') {
    lightbox.close()
  }
}

galleryBoxEl.addEventListener('click', handleImgClick)

console.log(galleryItems);