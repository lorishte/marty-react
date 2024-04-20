import { formatDate, generateImageUrl } from "@/util/util";


const GalleryCard = (props) => {
  const { date, medicines, noImage } = props.data
  const { compareImages } = props

  const renderStyle = (el) => {
    const key = date + el
    const baseStyle = 'justify-self-start px-2 py-1 rounded-md '

    if (el === 'Neprolysin') return <span className={baseStyle + 'bg-npr'} key={key}>{el}</span>
    if (el === 'Post-Neprol') return <span className={baseStyle + 'bg-pn'} key={key}>{el}</span>
    if (el === '2x Dermatix') return <span className={baseStyle + 'bg-dmtx'} key={key}>{el}</span>
  }

  const imageUrl = noImage ? `/images/no-image.jpg` : generateImageUrl(date)

  return (<div className='grid grid-rows-[1fr_max-content] gap-2 justify-center overflow-hidden'>
      <img className={compareImages ? 'block max-w-[60vw] max-h-[80vh] self-center' : 'block max-w-[90vw] max-h-[80vh]'}
           src={imageUrl}
           alt={date}/>

      <div className='grid gap-1 justify-center'>
        <p className='text-mobxxs md:text-xxs text-zinc-300'>
          {formatDate(date).toDateString()}
        </p>
        <p className='text-mobxxs md:text-xxs grid gap-1 justify-center self-start'>
          {medicines.map(el => renderStyle(el))}
        </p>
      </div>
    </div>)
}

export default GalleryCard