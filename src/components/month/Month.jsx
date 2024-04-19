'use client'
import React, { useEffect, useState } from 'react';
import dynamic from "next/dist/shared/lib/app-dynamic";
import MonthHeader from "./MonthHeader";
import DaysPanel from "@/components/month/DaysPanel";

const MonthDaysLazy = dynamic(
  () => import("./DaysPanel"),
  {
    ssr: false, // to disable pre-rendering on the server
    loading: () => <div className='flex justify-center pb-3'>
      <span className="loading loading-dots loading-md"/>
    </div>
  }
)

const Month = (props) => {
  const { monthName, monthDays, defaultOpen, monthIndex } = props
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (defaultOpen) setIsOpen(true)
  }, [defaultOpen])


  return (
    <div data-name='month'>

      <MonthHeader isOpen={isOpen} monthName={monthName} onClick={() => setIsOpen(!isOpen)}/>

      <MonthDaysLazy isOpen={isOpen}
                     monthDays={monthDays}
                     defaultOpen={defaultOpen}
                     monthIndex={monthIndex}/>

    </div>
  );
};

export default Month;
