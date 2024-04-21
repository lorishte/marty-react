import React from 'react';

const ModalControls = (props) => {
  const { onClose, loadNext, loadPrev } = props

  return (
      <div data-name='modal-controls'>
        <button
          className='fixed top-5 right-5 px-4 py-2 bg-zinc-600 text-xl leading-none rounded-md hover:bg-zinc-800 text-zinc-200 transition duration-200'
          onClick={onClose}>&#215;
        </button>

        <button
          className='fixed top-1/2 left-5 translate-y-[-50%] px-4 py-2 bg-zinc-600 rounded-md hover:bg-zinc-800 text-zinc-200 transition duration-200 rotate-180'
          onClick={loadPrev}>&#10140;
        </button>

        <button
          className='fixed top-1/2 right-5 translate-y-[-50%] px-4 py-2 bg-zinc-600 rounded-md hover:bg-zinc-800 text-zinc-200 transition duration-200'
          onClick={loadNext}>&#10140;
        </button>
      </div>
  );
};

export default ModalControls;
