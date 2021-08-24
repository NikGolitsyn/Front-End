const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    this.startTimer.intervalId = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed >= 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
    }, 1000);
  },
  stopTimer() {
    clearInterval(this.startTimer.intervalId);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// startTimer
// input none
// output undefined

// let nIntervId;
// let secondsPassed = 0;
// let minsPassed = 0;
// function startTimer() {
//   nIntervId = setInterval(() => {
//     secondsPassed += 1;
//     console.log(`seconds passed: ${secondsPassed}`);

//     if (secondsPassed >= 60) {
//       secondsPassed = 0;
//       minsPassed += 1;
//       console.log(`minutes passed: ${minsPassed}`);
//     }
//   }, 100);
// }

// function stopTimer() {
//   clearInterval(nIntervId);
// }

// let intervalId;

// const time = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   startTimer() {
//     intervalId = setInterval(() => {
//       this.secondsPassed += 1;
//       console.log(`minutes passed: ${this.minsPassed} seconds passed: ${this.secondsPassed}`);
//       if (this.secondsPassed >= 60) {
//         this.secondsPassed = 0;
//         this.minsPassed += 1;
//       }
//     }, 1000);
//   },
//   stopTimer() {
//     clearInterval(intervalId);
//   },
//   getTime() {
//     if (this.secondsPassed < 10) {
//       return `${this.minsPassed}:0${this.secondsPassed}`;
//     }
//     return `${this.minsPassed}:${this.secondsPassed}`;
//   },
//   resetTimer() {
//     this.secondsPassed = 0;
//     this.minsPassed = 0;
//   },
// };
