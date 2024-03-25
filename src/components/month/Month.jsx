'use client'
import React, { useEffect, useState } from 'react';
import dynamic from "next/dist/shared/lib/app-dynamic";
import MonthHeader from "./MonthHeader";

const MonthDaysLazy = dynamic(
  () => import("./MonthDaysPanel"),
  {
    ssr: true, // to disable pre-rendering on the server
    loading: () => <p>Loading...</p>
  }
)

const Month = (props) => {
  const { month, days, defaultOpen } = props
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (defaultOpen) setIsOpen(true)
  }, [defaultOpen])


  return (
    <div className='grid gap-4 w-full' data-name='month'>

      <MonthHeader isOpen={isOpen} month={month} onClick={() => setIsOpen(!isOpen)}/>

      <MonthDaysLazy isOpen={isOpen}
                     days={days}
                     defaultOpen={defaultOpen}/>

    </div>
  );
};

export default Month;
