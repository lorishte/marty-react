import { months } from "../data/data";
import Month from "../components/month/Month";
import { arrangeWeekDays } from "../util/util";
import Gallery from "../components/Gallery";
import CompareImages from "../components/CompareImages";


const Home = () => {

  return (
      <main className="min-w-full w-max max-w-screen-xl  px-4 py-10 md:w-5/6 md:min-w-min mx-auto ">
        {arrangeWeekDays(months).map((el, index) =>
          <Month key={el}
                 month={el[0]}
                 days={el[1]}
                 defaultOpen={index === months.length - 1}/>
        )}

        <Gallery />

        <CompareImages />

      </main>
  )
}

export default Home
