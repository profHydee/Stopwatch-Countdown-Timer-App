/* Html tag Selector */
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let startButton = document.querySelector("button.start");
let stopButton = document.querySelector("button.stop");
let resetButton = document.querySelector("button.reset");
let setButton = document.querySelector("button.set");
let up = document.querySelector("button.up");
let limitNumber = document.querySelector(".limit");
let stopwatchSwitchButton = document.querySelector(".stopwatch");
let countdownSwitchButton = document.querySelector(".countdown");
let app = document.querySelector(".heading h1");
let down = document.querySelector("button.down");
let count = 0;
let secondsCount = 0;
let secondsCountdown = 60;
let minutesCount = 0;
let normalSecondsCount = 0;
let normalMinutesCount = 0;
let interval = null;
let intervals = null;
let num = 0;
/*End of html tag Selector */

//set the app to have stopwatch app by default, (i.e whenever the document loads, it should set it to stopwatch app)
window.onload = function(){
    stopwatchSwitchButton.classList.add("active");
    resetTimer();
    app.textContent = "Stopwatch"
    up.style.display = "none";
    down.style.display = "none";
    setButton.style.display = "none";
    limitNumber.style.display = "none";
}
//

/* This is the event listener for the countdown timer switch button */ 
countdownSwitchButton.addEventListener("click", function(){
    stopTimer();
    resetTimer();
    stopwatchSwitchButton.classList.remove("active");
    countdownSwitchButton.classList.add("active");
    app.textContent = "Countdown Timer"
    up.style.display = "inline";
    down.style.display = "inline";
    limitNumber.style.display = "inline";
    setButton.style.display = "inline";
    startButton.style.display = "none";
})
/* End of event listener for the countdown timer switch button */
/* This is the event listener for the stopwatch switch button */
stopwatchSwitchButton.addEventListener("click", function(){
    stopTimer();
    resetTimer();
    stopwatchSwitchButton.classList.add("active");
    countdownSwitchButton.classList.remove("active");
    app.textContent = "Stopwatch"
    up.style.display = "none";
    down.style.display = "none";
    limitNumber.style.display = "none";
    setButton.style.display = "none";
    startButton.style.display = "inline";

})
/* End of event listener for stopwatch switch button */

/* This is the event listener for start button */
startButton.addEventListener("click", function(){
    changeCount();
    interval = setInterval(changeCount, 1000);
    startButton.style.pointerEvents = "None";
})
/* End of event listener for start button */

/* This is the event listener for stop button */
stopButton.addEventListener("click", function(){
    stopTimer();
    startButton.style.pointerEvents = "auto";
    setButton.style.pointerEvents = "auto";
})
/* End event listener for stop button */

/* This is the event listener for reset button */
resetButton.addEventListener("click", function(){
    stopTimer();
    resetTimer();
})
/* End of event listener for reset button */

/* This is the event listener for up button */
up.addEventListener("click", function(e){
    num = num + 1;
    limitNumber.textContent = num;
    if(num > 58){
        num = 0;
    }
})
/* End of event listener for up button */

/* This is the event listener for down button */
down.addEventListener("click", function(e){
    num = num - 1;
    limitNumber.textContent = num;
    if(num < 1 || num > 58){
        num = 0;
        limitNumber.textContent = num;
    }
})
/* End of event listener for down button */

/* This is the event listener for set and start button (countdown app)*/
setButton.addEventListener("click", function(e){
    if (num === 0){
        alert("Please set the countdown value using the up and down button");
        stopTimer();
        resetTimer()
    }
    else if(num < 10){
        minutes.textContent = '0' + num;
        interval = setInterval(countdownNumber, 1000);
        setButton.style.pointerEvents = "None";
    }
    else{
        minutes.textContent = num;
        interval = setInterval(countdownNumber, 1000);
        setButton.style.pointerEvents = "None";
    }
})
/* End of event listener for set and start button */

function changeCount(){
    secondsCount += 1;
    if (secondsCount < 10){
        let normalSecondsCount = '0' + secondsCount;
        seconds.textContent = normalSecondsCount;
    }
    else{
        seconds.textContent = secondsCount;
    }
    if(secondsCount >= 60){
        changeMinutesCount();
        secondsCount = 0;
    }
    
}
function changeMinutesCount(){
    minutesCount = 0;
        minutesCount += 1;
        if (minutesCount < 10){
            let normalMinutesCount = '0' + minutesCount;
            minutes.textContent = normalMinutesCount;
        }
        else{
            minutes.textContent = minutesCount;
        }
    }

function stopTimer() {
  clearInterval(interval);
}
function resetTimer(){
    secondsCount = 0;
    secondsCountdown = 60;
    minutesCount = 0;
    seconds.textContent = "0" + "0";
    minutes.textContent = "0" + "0";
    startButton.style.pointerEvents = "auto";
    setButton.style.pointerEvents = "auto";
}

function countdownNumber(){
    secondsCountdown -= 1;
    if (secondsCountdown < 10){
        let normalSecondsCount = '0' + secondsCountdown;
        seconds.textContent = normalSecondsCount;
    }
    else{
        seconds.textContent = secondsCountdown;
    }
    if(secondsCountdown == 0){
        changeMinutesCountdown();
        secondsCountdown = 60;
    }
    
}
function changeMinutesCountdown(){
    num -=1
    let minutesCountdown = num;
    if (minutesCountdown == 0){
        stopTimer();
        resetTimer();
        limitNumber.textContent = 0;
    }
    else if (minutesCountdown < 10){
        let normalMinutesCount = '0' + minutesCountdown;
        minutes.textContent = normalMinutesCount;
    }
    else{
        minutes.textContent = minutesCountdown;
    }
}
