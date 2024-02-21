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

export {
  formatDate,
  generateImageUrl,
  getDayOfTheWeek
}