import React from 'react';
import CalendarCard from "../cards/CalendarCard";

const MonthDaysPanel = (props) => {
  const { days, isOpen, defaultOpen } = props

  return (
      <div data-name='month-days-panel'
           className={`${isOpen ? "max-h-full pb-10" : "max-h-0 pb-0"} grid grid-cols-week md:grid-cols-7 gap-2 md:gap-3 px-4 
           overflow-hidden transition-[max-height] transition-all duration-700 ease-in-out`}>
        {days.map((el, index) => {
            const dayCard = <CalendarCard key={el.date} data={el} isHighPriority={defaultOpen}/>

            // Add line after every week (first index is 0, so add 1 to it)
            if ((index + 1) % 7 === 0 && index !== days.length - 1) {
              return ([dayCard, <div className='col-span-7 border-b' key={index + ' week'}/>])
            }

            return dayCard
          }
        )}
      </div>
  );
};

export default MonthDaysPanel;
