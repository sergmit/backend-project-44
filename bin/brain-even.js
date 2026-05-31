#!/usr/bin/env node
import readlineSync from "readline-sync";

const run = () => {
    console.log('Welcome to the Brain Games!');

    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const countAttempts = 3;
    let isWin = false;

    for (let i = 1; i <= countAttempts; i++) {
        const number = Math.round(Math.random() * 100);
        const isEven = number % 2 === 0;
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ').toLowerCase();
        const correctAnswer = isEven ? 'yes' : 'no'
        if (answer !== correctAnswer) {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
            console.log(`Let's try again, ${userName}!`);
            isWin = false;
            break;
        }
        console.log('Correct!');
        isWin = true;
    }
    if (isWin) {
        console.log(`Congratulations, ${userName}!`);
    }

}

run();
