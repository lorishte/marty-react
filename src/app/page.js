import { months } from "../data/data";
import Month from "../components/month";

const Home = () => {

  return (
    <main className="px-4 py-10 md:w-5/6 mx-auto max-w-screen-xl overflow-x-auto">
      {months.map((el, index) => <Month key={el}
                                        month={el[0]}
                                        days={el[1]}
                                        defaultOpen={index === months.length - 1}/>
      )}
    </main>
  )
}

export default Home
