import Image from "next/image";
import { formatDate, generateImageUrl } from "../util/util";
import { mapMedicineClasses } from "../data/data";

const Card = (props) => {
  const { date, medicines } = props.data

  const renderStyle = (el) => {

    console.log(el)

    if (el === 'Neprolysin') {
      return <span className='px-2 py-1 rounded-md mr-1 bg-npr' key={date + el}>{el}</span>
    }
    if (el === 'Post-Neprol') {
      return <span className='px-2 py-1 rounded-md mr-1 bg-pn' key={date + el}>{el}</span>
    }
    if (el === '2x Dermatix'){
      return <span className='px-2 py-1 rounded-md mr-1 bg-dmtx' key={date + el}>{el}</span>
    }
  }

  return (
    <div className=''>
      <div className='relative w-20 h-20 rounded-md overflow-hidden'>
        <Image src={generateImageUrl(date)}
               alt={date}
               fill
               className='object-cover'/>
      </div>

      <p className='text-xs'>
        {formatDate(date)}
      </p>
      <p className='text-xs'>
        {medicines.map(el => renderStyle(el))}
      </p>
    </div>
  )
}

export default Card