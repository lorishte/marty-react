import ReactDOM from "react-dom"
import ModalBackdrop from "./ModalBackdrop";

const ModalOverlay = (props) => {
  const { element, onCloseGallery } = props

  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop onCloseGallery={onCloseGallery}/>,
        document.getElementById('backdrop-root'))}

      {ReactDOM.createPortal(
        <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-[80vh] max-w-[80vw]'>
          {element}
        </div>,
        document.getElementById('overlay-root'))}
    </>
  )
}

export default ModalOverlay