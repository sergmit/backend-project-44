export const generatePrimeCollection = () => {
  const res = []

  for (let i = 0; i < 3; i++) {
    const number = Math.round(Math.random() * 100)
    res.push({ question: `Question: ${number}`, answer: isPrime(number) ? 'yes' : 'no' })
  }

  return res
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }

  return true
}
