import { months } from "../data/data";
import Month from "../components/month/Month";
import { arrangeWeekDays } from "../util/util";
import Gallery from "../components/Gallery";


const Home = () => {
  return (
      <main className="grid w-max min-w-full px-4 py-10 md:w-5/6 mx-auto max-w-screen-xl">
        {arrangeWeekDays(months).map((el, index) =>
          <Month key={el}
                 month={el[0]}
                 days={el[1]}
                 defaultOpen={index === months.length - 1}/>
        )}
        <Gallery />
      </main>
  )
}

export default Home
