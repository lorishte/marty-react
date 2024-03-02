import React from 'react';
import CalendarCard from "../cards/CalendarCard";

const MonthDays = (props) => {
  const { days, isOpen, defaultOpen } = props

  return (
    <div
      className={`${isOpen ? "h-fit pb-6" : "h-0"} grid grid-cols-week md:grid-cols-7 gap-4 px-4 overflow-hidden transition-[height] duration-700 ease-out`}>
      {days.map((el, index) => {
          const dayCard = <CalendarCard key={el.date} data={el} defaultOpen={defaultOpen}/>
          // Add line after every week (first index is 0, so add 1 to it)
          if ((index + 1) % 7 === 0) {
            return ([dayCard, <div className='col-span-7 border-b' key={index + ' week'}/>])
          }
          return dayCard
        }
      )}
    </div>
  );
};

export default MonthDays;
