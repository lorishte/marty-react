import React from 'react';
import Card from "./card";

const Month = ({ data }) => {
  const monthName = data[0]
  const days = data[1]

  return (
    <div>
      <div>{monthName}</div>
      <div className='grid grid-cols-7 gap-4'>
        {days.map(el => <Card key={el} data={el}/>)}
      </div>
    </div>
  );
};

export default Month;
