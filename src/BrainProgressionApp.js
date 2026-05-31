import App from "./App.js";
import readlineSync from "readline-sync";
import BrainGcdApp from "./BrainGcdApp.js";

class BrainProgressionApp extends App{

    start() {
        console.log('What number is missing in the progression?');

        for (let i = 1; i <= BrainProgressionApp.countAttempts; i++) {
            const collection = this.generateCollection();
            const hideNumber = Math.floor(Math.random() * collection.length);
            const correctAnswer = collection[hideNumber];
            console.log(`Question: ${this.printCollection(collection, hideNumber)}`);
            const answer = readlineSync.questionInt(`Your answer: `);

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

    generateCollection() {
        const length = Math.floor(Math.random() * 6) + 5;
        let start = Math.floor(Math.random() * 50) + 1;
        const step = Math.floor(Math.random() * 5) + 1;

        const collection = [start];
        for (let i = 1; i < length; i++) {
            start += step
            collection.push(start);
        }

        return collection;
    }

    printCollection(collection, hideNumber) {
        const res = [];
        let i = 0;
        for (let val of collection) {
            if (i === hideNumber) {
                res.push('..');
            } else {
                res.push(val);
            }
            i++;
        }

        return res.join(' ');
    }
}

export default BrainProgressionApp;