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
    <div className='grid grid-rows-[1fr_max-content] gap-2 justify-center w-[100%]'>
      <img className='block max-w-[90vw] max-h-[80vh]' src={generateImageUrl(date)} alt={date}/>

      <div className='grid gap-1 justify-center'>
        <p className='text-mobxxs md:text-xxs text-zinc-300'>
          {formatDate(date).toDateString()}
        </p>
        <p className='text-mobxxs md:text-xxs grid gap-1 justify-center self-start'>
          {medicines.map(el => renderStyle(el))}
        </p>
      </div>
    </div>
  )
}

export default GalleryCard