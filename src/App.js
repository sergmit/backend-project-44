import readlineSync from "readline-sync";

class App {
    static countAttempts = 3;
    userName = null;
    isWin = false;
    constructor() {
        this.init();
    }

    init() {
        console.log('Welcome to the Brain Games!');
        this.userName = readlineSync.question('May I have your name? ');
        console.log('Hello, ' + this.userName + '!');
    }

    start() {

    }

    finish() {
        if (this.isWin) {
            console.log(`Congratulations, ${this.userName}!`);
        } else {
            console.log(`Let's try again, ${this.userName}!`)
        }
    }
}

export default App;
