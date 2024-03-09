import React from 'react';
import CalendarCard from "../cards/CalendarCard";
import { CompareImagesContextProvider } from "../../store/compare-images-context";

const MonthDaysPanel = (props) => {
  const { days, isOpen, defaultOpen } = props

  return (
      <div data-name='month-days-panel'
           className={`${isOpen ? "max-h-full" : "max-h-0"} grid grid-cols-week md:grid-cols-7 gap-4 px-4 overflow-hidden transition-[max-height] duration-1000 ease-in`}>
        {days.map((el, index) => {
            const dayCard = <CalendarCard key={el.date} data={el} isHighPriority={defaultOpen}/>

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

export default MonthDaysPanel;
