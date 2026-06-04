export const generateProgressionCollection = () => {
  const res = []

  for (let i = 0; i < 3; i++) {
    const length = Math.floor(Math.random() * 6) + 5
    let start = Math.floor(Math.random() * 50) + 1
    const step = Math.floor(Math.random() * 5) + 1
    const numbers = [start]
    for (let i = 1; i < length; i++) {
      start += step
      numbers.push(start)
    }
    const hideNumber = Math.floor(Math.random() * numbers.length)
    const answer = numbers[hideNumber]
    numbers[hideNumber] = '..'
    res.push({ question: `Question: ${numbers.join(' ')}`, answer: '' + answer })
  }

  return res
}
