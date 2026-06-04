export const generateEvenCollection = () => {
  const res = []
  for (let i = 0; i < 3; i++) {
    const number = Math.round(Math.random() * 100)
    const isEven = number % 2 === 0
    res.push({ question: `Question: ${number}`, answer: isEven ? 'yes' : 'no' })
  }

  return res
}
