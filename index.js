var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}



// console.log(document.getElementById(pomodoro-timer))

// const pomodoroTimer=document.querySelector(pomodoro-timer);
// const startButton=document.querySelector(pomodoro-start);
// const pauseButton=document.querySelector(pomodoro-stop);

// // START
// startButton.addEventListener('click', () => {
// toggleClock();
// })

// // PAUSE
// pauseButton.addEventListener('click', () => {
// toggleClock();
// })
  
// // STOP
// stopButton.addEventListener('click', () => {
// toggleClock(true);
// })

// let isClockRunning = false;

// // in seconds = 25 mins
// let workSessionDuration = 1500;
// let currentTimeLeftInSession = 1500;

// // in seconds = 5 mins;
// let breakSessionDuration = 300;

// const toggleClock = (reset) => {
//     if (reset) {
//       // STOP THE TIMER
//       stopClock();
//     } else {
//       if (isClockRunning === true) {
//         //CLEAR TIMER BEFORE RESET
//         clearInterval(clockTimer);
//         // PAUSE THE TIMER
//         isClockRunning = false;
//       } else {
//         // START THE TIMER
//         isClockRunning = true;
//         clockTimer = setInterval(() => {
//             // decrease time left / increase time spent
//             currentTimeLeftInSession--;
//             displayCurrentTimeLeftInSession();
//         }, 1000)
//       }
//     }
//   }


// const displayCurrentTimeLeftInSession = () => {
// const secondsLeft = currentTimeLeftInSession;
// let result = '';
// const seconds = secondsLeft % 60;
// const minutes = parseInt(secondsLeft / 60) % 60;
// let hours = parseInt(secondsLeft / 3600);
// // add leading zeroes if it's less than 10
// function addLeadingZeroes(time) {
//     return time < 10 ? `0${time}` : time
// }
// if (hours > 0) result += `${hours}:`
// result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
// pomodoroTimer.innerText = result.toString();
// }


// const stopClock = () => {
//     displaySessionLog(type)

//     // 1) reset the timer we set
//     clearInterval(clockTimer);
//     // 2) update our variable to know that the timer is stopped
//     isClockRunning = false;
//     // reset the time left in the session to its original state
//     currentTimeLeftInSession = workSessionDuration;
//     // update the timer displayed
//     displayCurrentTimeLeftInSession();

//     type='Work'
//     timeSpentInCurrentSession = 0;
// }

// const stepDown = () => {
//     if (currentTimeLeftInSession > 0) {
//       // decrease time left / increase time spent
//       currentTimeLeftInSession--;
//       timeSpentInCurrentSession++;
//       } else if (currentTimeLeftInSession === 0) {
//         // Timer is over -> if work switch to break, viceversa
//         timeSpentInCurrentSession = 0;
//         if (type === 'Work') {
//           currentTimeLeftInSession = breakSessionDuration;
//           displaySessionLog('Work');
//           type = 'Break';
//         } else {
//           currentTimeLeftInSession = workSessionDuration;
//           type = 'Work';
//           displaySessionLog('Break');
//         }
//       }
//       displayCurrentTimeLeftInSession();
//     }

// let timeSpentInCurrentSession = 0;

// const displaySessionLog = (type) => {
//     const sessionsList = document.querySelector('#pomodoro-sessions');
//     // append li to it
//     const li = document.createElement('li');
//     let sessionLabel = type;
//     let elapsedTime = parseInt(timeSpentInCurrentSession / 60)
//     elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';
  
//     const text = document.createTextNode(
//       `${sessionLabel} : ${elapsedTime} min`
//     )
//     li.appendChild(text);
//     sessionsList.appendChild(li);
//   }

//   let currentTaskLabel = document.querySelector('#pomodoro-clock-task');