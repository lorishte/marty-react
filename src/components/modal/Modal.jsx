import ReactDOM from "react-dom"
import ModalBackdrop from "./ModalBackdrop";
import { useEffect } from "react";


const Modal = (props) => {
  const { element, onClose } = props

  const modalOverlay = document.getElementById('overlay-root')
  const modalBackdrop = document.getElementById('backdrop-root')

  useEffect(() => {
    modalOverlay.style.opacity = 1
    modalBackdrop.style.opacity = 1

    return () => {
      modalOverlay.style.opacity = 0
      modalBackdrop.style.opacity = 0
    }
  }, [modalOverlay, modalBackdrop])

  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop onClose={onClose}/>, modalBackdrop)}
      {ReactDOM.createPortal(element, modalOverlay)}
    </>
  )
}

export default Modal