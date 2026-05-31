import App from "./App.js";
import readlineSync from "readline-sync";

class BrainCalcApp extends App{
    static operations = ['+', '-', '*']

    start() {
        console.log('What is the result of the expression?');

        for (let i = 1; i <= BrainCalcApp.countAttempts; i++) {
            const firstNumber = Math.round(Math.random() * 100);
            const secondNumber = Math.round(Math.random() * 100);
            const operation = BrainCalcApp.operations[Math.floor(Math.random() * 3)];
            console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);
            const answer = readlineSync.questionInt(`Your answer: `);
            let correctAnswer = null;
            switch (operation) {
                case '+':
                    correctAnswer = firstNumber + secondNumber;
                    break;
                case '-':
                    correctAnswer = firstNumber - secondNumber;
                    break;
                case '*':
                    correctAnswer = firstNumber * secondNumber;
                    break;
            }

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
}

export default BrainCalcApp;