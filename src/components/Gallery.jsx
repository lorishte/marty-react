'use client'
import React, { useCallback, useEffect, useState } from 'react';
import ModalOverlay from "./modal/ModalOverlay";
import { useGalleryContext } from "../store/gallery-context";
import { images } from "../data/data";
import GalleryCard from "./cards/GalleryCard";
import ReactDOM from "react-dom";

const Gallery = () => {
  const { isOpen, selectedImageIndex, closeGallery, showPrevImage, showNextImage } = useGalleryContext()

  const handleKeyPress = useCallback((event) => {
    const key = event.key;
    if (key === 'ArrowRight') showNextImage()
    if (key === 'ArrowLeft') showPrevImage()
    if (key === 'Escape') closeGallery()
  }, [closeGallery, showPrevImage, showNextImage])


  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress)
    } else {
      document.removeEventListener('keydown', handleKeyPress)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, handleKeyPress])


  if (!isOpen) return null

  return (
    <>
      <ModalOverlay onClose={closeGallery}
                    element={
                      <div data-name='modal-overlay'
                           className='fixed w-max top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                        <GalleryCard data={images[selectedImageIndex]}/>
                      </div>}/>


      {ReactDOM.createPortal(
        <div data-name='modal-controls'>
          <button
            className='fixed top-5 right-5 px-4 py-2 bg-zinc-600 text-xl leading-none rounded-md hover:bg-zinc-800 text-zinc-200 transition duration-200'
            onClick={closeGallery}>&#215;
          </button>

          <button
            className='fixed top-1/2 left-5 translate-y-[-50%] px-4 py-2 bg-zinc-600 rounded-md hover:bg-zinc-800 text-zinc-200 transition duration-200 rotate-180'
            onClick={showPrevImage}>&#10140;
          </button>

          <button
            className='fixed top-1/2 right-5 translate-y-[-50%] px-4 py-2 bg-zinc-600 rounded-md hover:bg-zinc-800 text-zinc-200 transition duration-200'
            onClick={showNextImage}>&#10140;
          </button>
        </div>,
        document.getElementById('overlay-root'))}
    </>

  );
};

export default Gallery;
