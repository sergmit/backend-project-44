import readlineSync from 'readline-sync'

export const GameType = {
  BrianGame: 'BrianGame',
  BrainCalc: 'BrainCalc',
  BrainEven: 'BrainEven',
  BrainPrime: 'BrainPrime',
  BrainProgression: 'BrainProgression',
  BrainGcd: 'BrainGcd',
}
export const createGame = (game = null) => {
  let collection = null
  switch (game) {
    case GameType.BrainCalc:
      collection = generateBrainCalc()
      break
    case GameType.BrainEven:
      collection = generateEvenCollection()
      break
    case GameType.BrainPrime:
      collection = generatePrimeCollection()
      break
    case GameType.BrainGcd:
      collection = generateGcdCollection()
      break
    case GameType.BrainProgression:
      collection = generateProgressionCollection()
      break
    default:
      collection = []
  }

  return {
    start() {
      let isWin = true
      const userName = greeting()
      printGameTitle(game)

      for (let item of collection) {
        console.log(item.question)
        const answer = readlineSync.question(`Your answer: `)
        if (answer !== item.answer) {
          printFailedMsg(answer, item.answer)
          isWin = false
          break
        }
        console.log('Correct!')
      }
      if (game) {
        printFinishMsg(isWin, userName)
      }
    },
  }
}

const greeting = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')
  return userName
}

const generateEvenCollection = () => {
  const res = []
  for (let i = 0; i < 3; i++) {
    const number = Math.round(Math.random() * 100)
    const isEven = number % 2 === 0
    res.push({ question: `Question: ${number}`, answer: isEven ? 'yes' : 'no' })
  }

  return res
}

const generatePrimeCollection = () => {
  const res = []

  for (let i = 0; i < 3; i++) {
    const number = Math.round(Math.random() * 100)
    res.push({ question: `Question: ${number}`, answer: isPrime(number) ? 'yes' : 'no' })
  }

  return res
}

const generateGcdCollection = () => {
  const res = []

  for (let i = 0; i < 3; i++) {
    const firstNumber = Math.round(Math.random() * 100)
    const secondNumber = Math.round(Math.random() * 100)
    res.push({ question: `Question: ${firstNumber} ${secondNumber}`, answer: gcdRecursive(firstNumber, secondNumber) })
  }

  return res
}

const generateProgressionCollection = () => {
  const res = []

  for (let i = 0; i < 3; i++) {
    const length = Math.floor(Math.random() * 6) + 5
    let start = Math.floor(Math.random() * 50) + 1
    const step = Math.floor(Math.random() * 5) + 1
    const numbers = [step]
    for (let i = 1; i < length; i++) {
      start += step
      numbers.push(start)
    }
    const hideNumber = Math.floor(Math.random() * numbers.length)
    const answer = numbers[hideNumber]
    numbers[hideNumber] = '..'
    res.push({ question: `Question: ${numbers.join(' ')}`, answer })
  }

  return res
}

const generateBrainCalc = () => {
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

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }

  return true
}

const printFailedMsg = (failedAnswer, correctAnswer) => {
  console.log(`'${failedAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
}

const printFinishMsg = (isWin, userName) => {
  if (isWin) {
    console.log(`Congratulations, ${userName}!`)
  }
  else {
    console.log(`Let's try again, ${userName}!`)
  }
}

const gcdRecursive = (a, b) => {
  a = Math.abs(a)
  b = Math.abs(b)

  if (b === 0) return a
  return gcdRecursive(b, a % b)
}

const printGameTitle = (game) => {
  switch (game) {
    case GameType.BrainEven:
      console.log('Answer "yes" if the number is even, otherwise answer "no".')
      break
    case GameType.BrainCalc:
      console.log('What is the result of the expression?')
      break
    case GameType.BrainGcd:
      console.log('Find the greatest common divisor of given numbers.')
      break
    case GameType.BrainPrime:
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
      break
    case GameType.BrainProgression:
      console.log('What number is missing in the progression?')
      break
  }
}
