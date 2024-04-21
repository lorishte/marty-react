'use client'
import React from 'react';
import { useCompareImagesContext } from "@/store/compare-images-context";
import GalleryCard from "./cards/GalleryCard";
import Modal from "./modal/Modal";

import { images } from "@/data/data";
import ReactDOM from "react-dom";
import Delay from "@/components/HOC/Delay";

const CompareImages = () => {
  const { selectedImages, isOpen, closeModal } = useCompareImagesContext()

  if (!isOpen) return null

  return (
    <Delay delayTime={350}>
      <Modal onClose={closeModal}
                    element={
                      <div data-name='modal-overlay'
                           className='fixed w-[90%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] grid grid-cols-2 gap-2'>
                        {selectedImages.map(date => {
                            const imageIndex = images.findIndex(el => el.date === date)
                            return <GalleryCard key={date} data={images[imageIndex]} compareImages={true}/>
                          }
                        )}
                      </div>
                    }/>
      {ReactDOM.createPortal(
        <div data-name='modal-controls'>
          <button
            className='fixed top-5 right-5 px-4 py-2 bg-zinc-600 text-xl leading-none rounded-md hover:bg-zinc-800 text-zinc-200 transition duration-200'
            onClick={closeModal}>&#215;
          </button>
        </div>,
        document.getElementById('overlay-root'))}
    </Delay>
  );
};

export default CompareImages;
