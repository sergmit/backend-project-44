import readlineSync from 'readline-sync'
import { generateBrainCalc } from './brainCalc.js'
import { generateEvenCollection } from './brainEven.js'
import { generatePrimeCollection } from './brainPrime.js'
import { generateGcdCollection } from './brainGcd.js'
import { generateProgressionCollection } from './brainProgression.js'

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
