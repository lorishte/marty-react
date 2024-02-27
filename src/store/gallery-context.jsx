'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { images } from "../data/data";


// Add default values to be able to use suggestion on import
const GalleryContext = createContext({
  openGallery: () => {},
  closeGallery: () => {},
  showImage: () => {},
  setSelectedImageIndex: () => {},
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

  const showNextImage = () => {
    const imageIndex = images.findIndex(el => el.date === date)
    setSelectedImageIndex(imageIndex)
    setSelectedImageIndex(selectedImageIndex + 1)
  }

  const showPrevImage = () => {
    setSelectedImageIndex(selectedImageIndex - 1)
  }

  const showImage = (date) => {
    const imageIndex = images.findIndex(el => el.date === date)
    setSelectedImageIndex(imageIndex)
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





