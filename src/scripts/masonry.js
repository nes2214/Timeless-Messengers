import Masonry from 'masonry-layout';


const gallery = document.querySelector('#gallery');


if (gallery) {
  new Masonry(gallery, {
    itemSelector: 'a', 
    columnWidth: '.grid', 
    percentPosition: true, 
  });
}
