import React from 'react';
import Card from "./card";
import { getDayOfTheWeek } from "../util/util";

const Month = ({ data }) => {
  const monthName = data[0]
  const days = data[1]

  const firstDayInWeekNumber = days[0].date
  let dayNumber = getDayOfTheWeek(firstDayInWeekNumber)

  const emptyDays = []

  if (dayNumber !== 1) {
    if (dayNumber === 0) dayNumber = 7

    for (let i = 1; i < dayNumber; i++) {
      emptyDays.push(i)
    }
  }

  return (
    <div className='grid gap-4 mb-10'>
      <h2 className='font-semibold text-2xl bg-zinc-200 px-7 py-5 rounded-full mb-2'>{monthName}</h2>
      <div className='grid grid-cols-7 gap-4 px-4'>
        {emptyDays.length > 0 && emptyDays.map(el => <div key={monthName + el}/>)}
        {days.map(el => <Card key={el} data={el}/>)}
      </div>
    </div>
  );
};

export default Month;
