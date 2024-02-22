'use client'

import React, { useEffect, useState } from 'react';
import Card from "./card";
import { getDayOfTheWeek } from "../util/util";
import Image from "next/image";

const Month = (props) => {
  const { month, days, defaultOpen } = props
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (defaultOpen) setIsOpen(true)
  }, [defaultOpen])

  const firstDayInWeekNumber = days[0].date
  let dayNumber = getDayOfTheWeek(firstDayInWeekNumber)

  const emptyDays = []

  if (dayNumber !== 1) {
    if (dayNumber === 0) dayNumber = 7

    for (let i = 1; i < dayNumber; i++) {
      emptyDays.push(i)
    }
  }

  const basePanelStyle = 'grid grid-cols-week md:grid-cols-7 gap-4 px-4  transition duration-350 ease-in-out'
  let panelStyle = isOpen ?  basePanelStyle + ' max-h-fit pb-6' : basePanelStyle + ' max-h-0 overflow-y-hidden'

  return (
    <div className='grid gap-4 mb-3'>
      <div className='flex items-center bg-zinc-200 px-6 py-3 rounded-full mb-2 hover:cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        <h2 className='grow font-semibold text-l md:text-xl'>{month}</h2>
        <span className=''>
          <Image src='/images/arrow_2.png' width={10} height={10} className={isOpen ? 'transition duration-150 ease-in-out delay-50 rotate-180': 'transition duration-150 ease-in-out delay-50 rotate-0'}/>
        </span>
      </div>

      <div className={panelStyle}>
        {emptyDays.length > 0 && emptyDays.map(el => <div key={month + el}/>)}
        {days.map(el => <Card key={el} data={el}/>)}
      </div>
    </div>
  );
};

export default Month;
