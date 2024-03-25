import { months } from "../data/data";

const generateImageUrl = (date) => {
  if (date === 'no-image') return '/public/images/no-image.jpg'
  // return `assets/images/${date.substr(3)}/${date}.jpg`
  return `/images/${date.substr(3)}/${date}.webp`
}

const formatDate = (date) => {
  const reversed = date.split('-').reverse().join('/')
  return new Date(reversed)
}

const getDayOfTheWeek = (date) => {
  const weekDay = formatDate(date);
  return weekDay.getDay();
}

const arrangeWeekDays = (months) => {
  const formatted = [...months]
  for (let i = 0; i < months.length; i++) {
    const currentMonth = months[i]
    const currentMonthDays = currentMonth[1]
    const nextMonthDays = months[i + 1]

    //Get the number of the last day of the current week
    const lastDayWeekNumber = currentMonthDays[currentMonthDays.length - 1].date
    let dayNumber = getDayOfTheWeek(lastDayWeekNumber)

    // If the day is not Sunday (index 0) and there are more more days in the nex month
    // we add them to the current week (and remove them from next month week)
    if (dayNumber !== 0 && nextMonthDays) {
      for (let j = 0; j < 7 - dayNumber; j++) {
        const dayToAdd = nextMonthDays[1].shift()
        currentMonthDays.push(dayToAdd)
      }
    }
  }

  return formatted
}


export {
  formatDate,
  generateImageUrl,
  getDayOfTheWeek,
  arrangeWeekDays
}