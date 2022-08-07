//Global variables
const time_el = document.getElementById('stopwatch').children[0];
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const finish_btn = document.getElementById('finish');

let seconds = 0;
let interval = null;

// Event Listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
finish_btn.addEventListener('click', finish);

// Update the timer
function timer (){
    seconds++;

    // Format our time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - hrs *3600) / 60);
    let secs = seconds % 60

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;
    time_el.innerText = `${hrs}:${mins}:${secs}`;
    
}

function start () {
    if(interval) {
        return 
    }
    interval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function finish(){
    clearInterval(interval);
    interval = null;
    let coin_count = seconds / 600
    seconds = 0;
    time_el.innerText = "00:00:00"
}