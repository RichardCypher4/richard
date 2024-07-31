const timeDisplay = document.querySelector("timeDisplay");
const startBtn = document.querySelector("startBtn");
const pauseBtn = document.querySelector("pauseBtn");
const resetBtn = document.querySelector("resettBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let pausedTime = true;
let intervalid;
let hrs = 0;
let min = 0;
let sec = 0;

startBtn.addEventListener("click", () =>{
    if(paused){
        paused = false;
        startTime = Date.now() -elapsedTime;
        intervalid = setInterval(updateTime,75);
    }
});
pauseBtn.addEventListener("click", () =>{});
resetBtn.addEventListener("click", () => {});

function updateTime(){
    elapsedTime = Date.now() -startTime;

    sec =Math.floor((elapsedTime  / 1000) % 60);
    min =Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);


timeDisplay.textContent =`${hrs}:${mins}${secs}`;
}
