import Image from "next/image";
import { formatDate, generateImageUrl } from "@/util/util";
import { useGalleryContext } from "@/store/gallery-context";
import { useCompareImagesContext } from "@/store/compare-images-context";


const CalendarCard = (props) => {
  const { isHighPriority } = props
  const { date, medicines, noImage } = props.data
  const { showImage } = useGalleryContext()
  const { selectedImages, addRemoveImageToCompare } = useCompareImagesContext()

  const renderStyle = (el) => {
    if (el === 'Neprolysin')
      return <span className='justify-self-start px-2 py-1 rounded-md bg-npr' key={date + el}>{el}</span>

    if (el === 'Post-Neprol')
      return <span className='justify-self-start px-2 py-1 rounded-md bg-pn' key={date + el}>{el}</span>

    if (el === '2x Dermatix')
      return <span className='justify-self-start px-2 py-1 rounded-md bg-dmtx' key={date + el}>{el}</span>
  }

  return (
    <div data-name='calendar-card'
         className='group relative grid gap-1 content-start p-2 rounded border border-transparent
         transition-all duration-50 ease-in-out
         hover:cursor-pointer hover:scale-[1.03] hover:border hover:border-zinc-300'>

      <div className='relative h-20 md:h-32 lg:h-40 rounded-md overflow-hidden'
           onClick={() => showImage(date)}>

        <Image src={noImage ? `/images/no-image.jpg` : generateImageUrl(date)}
               alt={date}
               fill
               className='object-cover'
               sizes="100%"
               priority={isHighPriority}
               placeholder='blur'
               blurDataURL='/images/no-image.jpg'/>
      </div>


      <div className='grid gap-1'>
        <p className='text-mobxxs md:text-xxs self-start'>
          {formatDate(date).toDateString()}
        </p>
        <p className='text-mobxxs md:text-xxs grid gap-1 self-start'>
          {medicines.map(el => renderStyle(el))}
        </p>
      </div>

      <input type='checkbox'
             className='absolute opacity-0
             top-2 right-2 w-5 h-5
             md:top-3 md:right-3 md:w-4 md:h-4
             group-hover:opacity-100
             checked:opacity-100'
             checked={selectedImages.includes(date)}
             onChange={() => addRemoveImageToCompare(date)}/>
    </div>
  )
}

export default CalendarCard