'use client'
import React, { useCallback, useEffect } from 'react';
import Modal from "./modal/Modal";
import { useGalleryContext } from "@/store/gallery-context";
import { images } from "@/data/data";
import GalleryCard from "./cards/GalleryCard";
import ReactDOM from "react-dom";
import ModalControls from "@/components/modal/ModalControls";
import Delay from "@/components/HOC/Delay";

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
    <Delay delayTime={350}>
      <Modal onClose={closeGallery}
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
    </Delay>
  );
};

export default Gallery;
