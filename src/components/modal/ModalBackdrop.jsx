const ModalBackdrop = (props) => {
    return <div className='fixed top-0 left-0 w-screen h-screen bg-neutral-800/90' onClick={props.onCloseGallery}/>
}

export default ModalBackdrop