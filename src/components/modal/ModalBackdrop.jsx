const ModalBackdrop = (props) => {
    return <div className='fixed top-0 left-0 w-screen h-screen bg-zinc-900/95' onClick={props.onCloseGallery}/>
}

export default ModalBackdrop