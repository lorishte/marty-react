import { months } from "../data/data";
import Month from "../components/month";

export default function Home() {

  return (
    <main className="p-5 md:p-24 sm:p-16 overflow-x-auto">
      {months.map(el => <Month key={el} data={el} />)}
    </main>
  )
}
