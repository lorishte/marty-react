'use client'
import React, { useEffect, useState } from 'react';
import dynamic from "next/dist/shared/lib/app-dynamic";
import MonthHeader from "./MonthHeader";

const MonthLazy = dynamic(
  () => import("./MonthDays"),
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
    <div className='grid gap-4 mb-3 w-full'>

      <MonthHeader isOpen={isOpen} month={month} onClick={() => setIsOpen(!isOpen)}/>

      {isOpen && <MonthLazy isOpen={isOpen}
                            days={days}
                            defaultOpen={defaultOpen} />}

    </div>
  );
};

export default Month;
