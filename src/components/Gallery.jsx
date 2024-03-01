'use client'
import React from 'react';
import ModalOverlay from "./modal/ModalOverlay";
import { useGalleryContext } from "../store/gallery-context";
import { images } from "../data/data";
import GalleryCard from "./cards/GalleryCard";
import ReactDOM from "react-dom";

const Gallery = () => {
  const { isOpen, selectedImageIndex, closeGallery, showPrevImage, showNextImage } = useGalleryContext()

  if (!isOpen) return null

  const currentImage = images[selectedImageIndex]


  return (
    <>
      <ModalOverlay onCloseGallery={closeGallery}
                    element={<GalleryCard data={currentImage}/>}/>

      {ReactDOM.createPortal(
        <div>
          <button className='fixed top-1/2 left-2 translate-y-[-50%] px-4 py-2 bg-zinc-400 rounded-md hover:bg-slate-200 transition duration-200'
                  onClick={showPrevImage}>Prev
          </button>
          <button className='fixed top-1/2 right-2 translate-y-[-50%] px-4 py-2 bg-zinc-400 rounded-md hover:bg-slate-200 transition duration-200'
                  onClick={showNextImage}>Next
          </button>
        </div>,
        document.getElementById('overlay-root'))}
    </>

  );
};

export default Gallery;
