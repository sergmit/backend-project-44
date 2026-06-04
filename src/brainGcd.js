export const generateGcdCollection = () => {
  const res = []

  for (let i = 0; i < 3; i++) {
    const firstNumber = Math.round(Math.random() * 100)
    const secondNumber = Math.round(Math.random() * 100)
    res.push({ question: `Question: ${firstNumber} ${secondNumber}`, answer: '' + gcdRecursive(firstNumber, secondNumber) })
  }

  return res
}

const gcdRecursive = (a, b) => {
  a = Math.abs(a)
  b = Math.abs(b)

  if (b === 0) return a
  return gcdRecursive(b, a % b)
}
