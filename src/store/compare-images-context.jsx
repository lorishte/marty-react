'use client'
import React, { useState, useEffect, createContext, useContext } from 'react';
import { images } from "../data/data";

// Add default values to be able to use suggestion on import
const CompareImagesContext = createContext({
  isOpen: Boolean,
  selectedImages: Array,
  closeModal: () => {},
  addRemoveImageToCompare: () => {}
})

export const CompareImagesContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImages, setSelectedImages] = useState([])

  useEffect(() => {
    if (selectedImages.length === 2) openModal()
  },[selectedImages])

  const openModal = () => setIsOpen(true)

  const closeModal = () => {
    setSelectedImages([])
    setIsOpen(false)
  }

  const addRemoveImageToCompare = (date) => {
    // const imageIndex = images.findIndex(el => el.date === date)

    if (selectedImages.includes(date)) {
      const filtered = selectedImages.filter(el => el !== date)
      setSelectedImages(filtered)
    } else {
      if (selectedImages.length >= 2) return
      setSelectedImages([...selectedImages, date])
    }
  }



  return (
    <CompareImagesContext.Provider value={{
      isOpen,
      selectedImages,
      addRemoveImageToCompare,
      closeModal
    }}>
      {children}
    </CompareImagesContext.Provider>
  )
}

export const useCompareImagesContext = () => useContext(CompareImagesContext)
