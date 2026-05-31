import readlineSync from "readline-sync";
import App from "./App.js";

class BrainEvenApp extends App {
    start() {
        console.log('Answer "yes" if the number is even, otherwise answer "no".');

        for (let i = 1; i <= BrainEvenApp.countAttempts; i++) {
            const number = Math.round(Math.random() * 100);
            const isEven = number % 2 === 0;
            console.log(`Question: ${number}`);
            const answer = readlineSync.question('Your answer: ').toLowerCase();
            const correctAnswer = isEven ? 'yes' : 'no'
            if (answer !== correctAnswer) {
                console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
                this.isWin = false;
                break;
            }
            console.log('Correct!');
            this.isWin = true;
        }

        this.finish();
    }
}

export default BrainEvenApp;
