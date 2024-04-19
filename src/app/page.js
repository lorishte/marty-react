import { months } from "@/data/data";
import { arrangeWeekDays } from "@/util/util";

import Month from "../components/month/Month";
import Gallery from "../components/Gallery";
import CompareImages from "../components/CompareImages";


const Home = () => {

  return (
      <main className="min-w-full w-max max-w-screen-lg px-4 py-10 md:w-5/6 md:min-w-min mx-auto text-[#353535]">
        {arrangeWeekDays(months).map((el, index) =>
          <Month key={el}
                 monthName={el[0]}
                 monthDays={el[1]}
                 defaultOpen={index === months.length - 1}
                 monthIndex={index}/>
        )}

        <Gallery />

        <CompareImages />

      </main>
  )
}

export default Home
