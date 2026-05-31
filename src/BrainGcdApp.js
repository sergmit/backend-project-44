import App from "./App.js";
import readlineSync from "readline-sync";

class BrainGcdApp extends App{

    start() {
        console.log('Find the greatest common divisor of given numbers.');
        let isWin = false;

        for (let i = 1; i <= BrainGcdApp.countAttempts; i++) {
            const firstNumber = Math.round(Math.random() * 100);
            const secondNumber = Math.round(Math.random() * 100);

            console.log(`Question: ${firstNumber} ${secondNumber}`);

            const answer = readlineSync.questionInt(`Your answer: `);

            const correctAnswer = this.gcdRecursive(firstNumber, secondNumber);

            if (correctAnswer !== answer) {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
                this.isWin = false;
                break;
            } else {
                console.log('Correct!');
                this.isWin = true;
            }
        }
        this.finish();
    }

    gcdRecursive(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);

        if (b === 0) return a;
        return this.gcdRecursive(b, a % b);
    }
}

export default BrainGcdApp;