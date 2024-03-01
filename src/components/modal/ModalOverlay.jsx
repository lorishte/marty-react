import ReactDOM from "react-dom"
import ModalBackdrop from "./ModalBackdrop";

const ModalOverlay = (props) => {
  const { element, onCloseGallery } = props

  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop onCloseGallery={onCloseGallery}/>,
        document.getElementById('backdrop-root'))}

      {ReactDOM.createPortal(
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-fit w-[80vw] h-[80vh]'>
          {element}
        </div>,
        document.getElementById('overlay-root'))}
    </>
  )
}

export default ModalOverlay