import ReactDOM from "react-dom"
import ModalBackdrop from "./ModalBackdrop";

const ModalOverlay = (props) => {
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

export default ModalOverlay