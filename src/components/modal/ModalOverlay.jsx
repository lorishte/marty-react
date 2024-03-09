import ReactDOM from "react-dom"
import ModalBackdrop from "./ModalBackdrop";

const ModalOverlay = (props) => {
  const { element, onClose } = props

  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop onCloseGallery={onCloseGallery}/>,
        document.getElementById('backdrop-root'))}

      {ReactDOM.createPortal(
        <div data-name='modal-overlay' className='fixed w-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
          {element}
        </div>,
        document.getElementById('overlay-root'))}
    </>
  )
}

export default ModalOverlay