import Image from "next/image";
import { formatDate, generateImageUrl } from "../util/util";

const Card = (props) => {
  const { date, medicines } = props.data

  const renderStyle = (el) => {
    if (el === 'Neprolysin')
      return <span className='justify-self-start px-2 py-1 rounded-md bg-npr' key={date + el}>{el}</span>

    if (el === 'Post-Neprol')
      return <span className='justify-self-start px-2 py-1 rounded-md bg-pn' key={date + el}>{el}</span>

    if (el === '2x Dermatix')
      return <span className='justify-self-start px-2 py-1 rounded-md bg-dmtx' key={date + el}>{el}</span>
  }

  return (
    <div className='grid gap-1 content-start'>
      <div className='relative w-auto h-16 md:h-32 lg:h-40 rounded-md overflow-hidden'>
        <Image src={generateImageUrl(date)}
               alt={date}
               fill
          // width={100}
          // height={300}
               className='object-cover'/>
      </div>

      <div className='grid gap-1'>
        <p className='text-mobxxs md:text-xxs self-start'>
          {formatDate(date).toDateString()}
        </p>
        <p className='text-mobxxs md:text-xxs grid gap-1 self-start'>
          {medicines.map(el => renderStyle(el))}
        </p>
      </div>
    </div>
  )
}

export default Card