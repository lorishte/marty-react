import { useState } from "react";

const useWeekNumber = () => {
  const [currentWeek, setCurrentWeek] = useState(0)

  const updateWeekNumber = () => {
    setCurrentWeek(currentWeek + 1)
  }

  return {
    currentWeek,
    updateWeekNumber
  }
}

export default useWeekNumber