export const generateBrainCalc = () => {
  const res = []
  const operations = ['+', '-', '*']

  for (let i = 0; i < 3; i++) {
    const firstNumber = Math.round(Math.random() * 100)
    const secondNumber = Math.round(Math.random() * 100)
    const operation = operations[Math.floor(Math.random() * 3)]
    let answer = null
    switch (operation) {
      case '+':
        answer = firstNumber + secondNumber
        break
      case '-':
        answer = firstNumber - secondNumber
        break
      case '*':
        answer = firstNumber * secondNumber
        break
    }

    res.push({ question: `Question: ${firstNumber} ${operation} ${secondNumber}`, answer: '' + answer })
  }

  return res
}
