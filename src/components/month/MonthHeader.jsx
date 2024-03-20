import React from 'react';
import Image from "next/image";

const MonthHeader = (props) => {
  const { isOpen, onClick, month } = props

  return (
    <div className={`${isOpen ? "border-zinc-400" : "border-zinc-200"} 
      flex items-center px-6 py-3 mb-2 rounded-full 
      border transition duration-350
      hover:cursor-pointer hover:border-zinc-400`}
         onClick={onClick}>

      <h2 className='grow font-semibold text-l md:text-xl '>{month}</h2>

      <div className='relative w-2.5 h-2.5'>
        <Image src='/images/arrow_2.png'
               alt='panel arrow'
               fill
               sizes="100%"
               className={`object-contain transition duration-150 ease-in-out delay-50 ${isOpen ? 'rotate-180' : "rotate-0"}`}/>
      </div>
    </div>
  );
};

export default MonthHeader;
