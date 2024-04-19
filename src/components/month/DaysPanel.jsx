import CalendarCard from "../cards/CalendarCard";
import { getFirstWeekNumberOfMonth } from "@/util/util";

const DaysPanel = (props) => {
  const { monthDays, isOpen, defaultOpen, monthIndex } = props

  let weekNumber = getFirstWeekNumberOfMonth(monthIndex)

  return (
    <div data-name='month-days-panel'
         className={`${isOpen ? "max-h-[2000px] pb-10" : "max-h-0 pb-0"} 
         grid grid-cols-[max-content_repeat(7,_1fr)] gap-2 md:gap-3 
         h-auto px-4 pt-2 overflow-hidden
         transition-all duration-1000 ease-in-out`}>

      {monthDays.map((el, index) => {
          const dayCard = <CalendarCard key={el.date} data={el} isHighPriority={defaultOpen}/>

          // Add week number + day
          if (index % 7 === 0) {
            weekNumber += 1
            return [<div key={index} className='text-sm'>{weekNumber}</div>, dayCard]
          }

          // Add line after every week (first index is 0, so add 1 to it)
          if ((index + 1) % 7 === 0 && index !== monthDays.length - 1) {
            return ([dayCard, <div className='col-span-8 border-b' key={index + ' week'}/>])
          }

          return dayCard
        }
      )}
    </div>
  );
};

export default DaysPanel;
