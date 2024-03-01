import React from 'react';
import CalendarCard from "../cards/CalendarCard";

const MonthDays = (props) => {
  const { days, isOpen, defaultOpen } = props

  return (
    <div
      className={`${isOpen ? "h-fit pb-6" : "h-0"} grid grid-cols-week md:grid-cols-7 gap-4 px-4 overflow-hidden transition-[height] duration-700 ease-out`}>
      {days.map((el, index) => {
          if (index % 7 === 0 && index !== 0) {
            return <div className='col-span-7 border-b'/>
          }
          return <CalendarCard key={el.date} data={el} defaultOpen={defaultOpen}/>
        }
      )}
    </div>
  );
};

export default MonthDays;
