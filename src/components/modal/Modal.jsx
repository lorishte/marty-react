import ReactDOM from "react-dom"
import ModalBackdrop from "./ModalBackdrop";


const Modal = (props) => {
  const { element, onClose } = props

  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop onClose={onClose}/>,
        document.getElementById('backdrop-root'))}

      {ReactDOM.createPortal(element,
        document.getElementById('overlay-root'))}
    </>
  )
}

export default Modal