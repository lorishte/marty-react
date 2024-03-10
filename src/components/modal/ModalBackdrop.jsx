const ModalBackdrop = (props) => {
    return <div data-name='modal-backdrop' className='fixed top-0 left-0 w-screen h-screen bg-neutral-800/90' onClick={props.onClose}/>
}

export default ModalBackdrop