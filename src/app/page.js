import { months } from "../data/data";
import Month from "../components/month";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {months.map(el => <Month key={el} data={el} />)}
    </main>
  )
}
