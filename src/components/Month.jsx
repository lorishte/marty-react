'use client'

import React, { useEffect, useState } from 'react';
import Card from "./Card";
import Image from "next/image";

const Month = (props) => {
  const { month, days, defaultOpen } = props
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (defaultOpen) setIsOpen(true)
  }, [defaultOpen])

  // const firstDayInWeekNumber = days[0].date
  // let dayNumber = getDayOfTheWeek(firstDayInWeekNumber)
  //
  // const emptyDays = []
  //
  // if (dayNumber !== 1) {
  //   if (dayNumber === 0) dayNumber = 7
  //
  //   for (let i = 1; i < dayNumber; i++) {
  //     emptyDays.push(i)
  //   }
  // }


  return (
    <div className='grid gap-4 mb-3 w-full'>
      <div className={`${isOpen ? "border-zinc-400" : "border-transparent"} flex items-center bg-zinc-200 px-6 py-3 rounded-full mb-2 hover:cursor-pointer border transition duration-350`} onClick={() => setIsOpen(!isOpen)}>
        <h2 className='grow font-semibold text-l md:text-xl '>{month}</h2>
        <span className=''>
          <Image src='/images/arrow_2.png' width={10} height={10} className={isOpen ? 'transition duration-150 ease-in-out delay-50 rotate-180': 'transition duration-150 ease-in-out delay-50 rotate-0'}/>
        </span>
      </div>

      <div className={`${isOpen ? "h-fit pb-6" : "h-0"} grid grid-cols-week md:grid-cols-7 gap-4 px-4 overflow-hidden transition-[height] duration-700 ease-out`}>
        {/*{emptyDays.length > 0 && emptyDays.map(el => <div key={month + el}/>)}*/}
        {days.map(el => <Card key={el} data={el}/>)}
      </div>
    </div>
  );
};

export default Month;
