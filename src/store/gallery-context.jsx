'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { images } from "../data/data";


// Add default values to be able to use suggestion on import
const GalleryContext = createContext({
  isOpen: Boolean,
  setSelectedImageIndex: Number,
  openGallery: () => {},
  closeGallery: () => {},
  showImage: () => {},
  showNextImage: () => {},
  showPrevImage: () => {},
})

export const GalleryContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  useEffect(() => {
    console.log(selectedImageIndex)
  }, [selectedImageIndex])

  const openGallery = () => setIsOpen(true)

  const closeGallery = () => setIsOpen(false)

  const showImage = (date) => {
    const imageIndex = images.findIndex(el => el.date === date)
    setSelectedImageIndex(imageIndex)
    setIsOpen(true)
  }

  const showNextImage = () => {
    if (selectedImageIndex === images.length - 1) {
      setSelectedImageIndex(0)
    } else {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  const showPrevImage = () => {
    if (selectedImageIndex === 0) {
      setSelectedImageIndex(images.length - 1)
    } else {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }


  return (
    <GalleryContext.Provider value={{
      isOpen,
      selectedImageIndex,
      showImage,
      openGallery,
      closeGallery,
      showNextImage,
      showPrevImage
    }}>
      {children}
    </GalleryContext.Provider>
  )
}

export const useGalleryContext = () => useContext(GalleryContext)





