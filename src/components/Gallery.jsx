'use client'
import React, { useCallback, useEffect, useState } from 'react';
import ModalOverlay from "./modal/ModalOverlay";
import { useGalleryContext } from "../store/gallery-context";
import { images } from "../data/data";
import GalleryCard from "./cards/GalleryCard";
import ReactDOM from "react-dom";
import ModalControls from "@/components/modal/ModalControls";

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
        <ModalControls onClose={closeGallery}
                       loadPrev={showPrevImage}
                       loadNext={showNextImage}/>,
        document.getElementById('overlay-root'))}
    </>

  );
};

export default Gallery;
