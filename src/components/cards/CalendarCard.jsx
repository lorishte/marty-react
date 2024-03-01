import Image from "next/image";
import { formatDate, generateImageUrl } from "../../util/util";
import { useGalleryContext } from "../../store/gallery-context";


const CalendarCard = (props) => {
  const { defaultOpen } = props
  const { date, medicines } = props.data
  const { showImage } = useGalleryContext()

  const renderStyle = (el) => {
    if (el === 'Neprolysin')
      return <span className='justify-self-start px-2 py-1 rounded-md bg-npr' key={date + el}>{el}</span>

    if (el === 'Post-Neprol')
      return <span className='justify-self-start px-2 py-1 rounded-md bg-pn' key={date + el}>{el}</span>

    if (el === '2x Dermatix')
      return <span className='justify-self-start px-2 py-1 rounded-md bg-dmtx' key={date + el}>{el}</span>
  }


  return (
    <div className='grid gap-1 content-start hover:cursor-pointer'>

      <div className='relative w-auto h-auto md:h-32 lg:h-40 rounded-md overflow-hidden'
           onClick={() => showImage(date)}>
        <Image src={generateImageUrl(date)}
               alt={date}
               fill
               className='object-cover'
               sizes="100%"
               priority={defaultOpen}/>
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

export default CalendarCard