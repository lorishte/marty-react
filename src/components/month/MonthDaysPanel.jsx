import CalendarCard from "../cards/CalendarCard";
import useWeekNumber from "../hooks/use-week-number";

const MonthDaysPanel = (props) => {
  const { days, isOpen, defaultOpen } = props

  // const { currentWeek, updateWeekNumber } = useWeekNumber()
  let currentWeek = 0

  return (
    <div data-name='month-days-panel'
         className={`${isOpen ? "max-h-[2000px] pb-10" : "max-h-0 pb-0"} 
         grid grid-cols-[max-content_repeat(7,_1fr)] gap-2 md:gap-3 
         h-auto px-4 pt-2 overflow-hidden
         transition-all duration-1000 ease-in-out`}>

      {days.map((el, index) => {
          const dayCard = <CalendarCard key={el.date} data={el} isHighPriority={defaultOpen}/>

          if (index % 7 === 0) {
            currentWeek += 1
            return [<div key={index}>{currentWeek}</div>, dayCard]
          }

          // Add line after every week (first index is 0, so add 1 to it)
          if ((index + 1) % 7 === 0 && index !== days.length - 1) {
            return ([dayCard, <div className='col-span-8 border-b' key={index + ' week'}/>])
          }

          return dayCard
        }
      )}
    </div>
  );
};

export default MonthDaysPanel;
