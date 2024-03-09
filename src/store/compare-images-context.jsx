'use client'
import React, { useState, useEffect, createContext, useContext } from 'react';
import { images } from "../data/data";

// Add default values to be able to use suggestion on import
const CompareImagesContext = createContext({
  isOpen: Boolean,
  selectedImages: Array,
  openModal: () => {},
  closeModal: () => {},
  addImageToCompare: () => {},
  showImages: () => {},
})

export const CompareImagesContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImages, setSelectedImages] = useState([])

  useEffect(() => {
    console.log(selectedImages)
  },[selectedImages])

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  const addImageToCompare = (date) => {
    const imageIndex = images.findIndex(el => el.date === date)

    if (selectedImages.includes(imageIndex)) {
      const filtered = selectedImages.filter(el => el !== imageIndex)
      setSelectedImages(filtered)
    } else {
      setSelectedImages([...selectedImages, imageIndex])
    }
  }

  const showImages = (date) => {

  }


  return (
    <CompareImagesContext.Provider value={{
      isOpen,
      selectedImages,
      addImageToCompare,
      showImages,
      openModal,
      closeModal,
    }}>
      {children}
    </CompareImagesContext.Provider>
  )
}

export const useCompareImagesContext = () => useContext(CompareImagesContext)
