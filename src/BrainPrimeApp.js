import App from "./App.js";
import readlineSync from "readline-sync";

class BrainPrimeApp extends App{
    static operations = ['+', '-', '*'];

    start() {
        console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

        for (let i = 1; i <= BrainPrimeApp.countAttempts; i++) {
            const number = Math.round(Math.random() * 100);

            const correctAnswer = this.isPrime(number) ? 'yes' : 'no';

            console.log(`Question: ${number}`);

            const answer = readlineSync.question(`Your answer: `).toLowerCase();

            if (correctAnswer !== answer) {
                console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`)
                this.isWin = false;
                break;
            } else {
                console.log('Correct!');
                this.isWin = true;
            }
        }
        this.finish();
    }

    isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
}

export default BrainPrimeApp;