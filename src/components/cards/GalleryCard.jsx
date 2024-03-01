import Image from "next/image";
import { formatDate, generateImageUrl } from "../../util/util";


const GalleryCard = (props) => {
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
    <div className='grid gap-2 justify-center'>
      <div className='relative w-fit rounded-lg overflow-hidden'>
        <img className='w-auto h-[80vh]' src={generateImageUrl(date)} alt={date}/>
      </div>

      <div className='grid gap-1 justify-center'>
        <p className='text-mobxxs md:text-xxs text-zinc-300'>
          {formatDate(date).toDateString()}
        </p>
        <p className='text-mobxxs md:text-xxs grid gap-1 justify-center'>
          {medicines.map(el => renderStyle(el))}
        </p>
      </div>
    </div>
  )
}

export default GalleryCard