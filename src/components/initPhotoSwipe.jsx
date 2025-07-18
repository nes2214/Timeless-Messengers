// src/components/LightboxInit.jsx
import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function LightboxInit() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });
    lightbox.init();

    return () => lightbox.destroy(); // Limpieza al desmontar
  }, []);

  return null;
}
