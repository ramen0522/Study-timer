export default class Timer{
    constructor(root){
        root.innerHTML = Timer.getHTML();

        this.el = {
            hours: root.querySelector(".timer__part--hrs"),
            minutes: root.querySelector(".timer__part--mins"),
            seconds: root.querySelector(".timer__part--secs"),
            start: root.querySelector("#countdown_start"),
            stop: root.querySelector("#countdown_stop"),
            timer: root.querySelector("#countdown_timer")
        };

        this.interval = null;
        this.remaingSeconds = 0;

        this.audioElement = new Audio('/static/alarm.mp3');

        this.start();
        this.stop();

        this.updateInterfaceTime();

        this.el.start.addEventListener("click", () => {
            this.start();})                   
        this.el.stop.addEventListener("click", () => {
            this.stop();})
        this.el.timer.addEventListener("click", () => {
            let prompt_not_valid = true
            while (prompt_not_valid) {
                const inputHours = prompt("Enter number of hours(must be less than 24):");
                const inputMinutes = prompt("Enter number of minutes(must be less than 60):");
                if ((inputHours < 0 || inputMinutes < 0) || (inputHours === "" || inputMinutes === "")) {
                    alert("Invalid values!")
                }
                else if(inputHours === null || inputMinutes === null){
                    inputHours = "0";
                    inputMinutes = "0";
                    prompt_not_valid = false
                }
                else {
                    prompt_not_valid = false;
                }
            if(inputHours < 24 && inputMinutes < 60) {
                this.stop();
                this.remaingSeconds = (parseInt(inputMinutes) * 60) + (parseInt(inputHours) * 3600)
                this.updateInterfaceTime();
            }
        }
        })
    }
    updateInterfaceTime() {
        const hours = Math.floor(this.remaingSeconds / 3600)
        const minutes = Math.floor((this.remaingSeconds / 60) % 60);
        const seconds = this.remaingSeconds % 60;

        this.el.hours.textContent = hours.toString().padStart(2,"0")
        this.el.minutes.textContent = minutes.toString().padStart(2,"0");
        this.el.seconds.textContent = seconds.toString().padStart(2,"0");

    }
    
    start(){
        if (this.remaingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remaingSeconds--;
            this.updateInterfaceTime();

            if (this.remaingSeconds === 0){
                this.stop()
                this.audioElement.play();
            }
        }, 1000);
    }

    stop(){
        this.audioElement.pause();
        clearInterval(this.interval);
        this.interval = null;
    }
    
    static getHTML() {
        return `
        <span class="timer__part timer__part--hrs">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--mins">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--secs">00</span>
        <button id="countdown_start">Start</button>
        <button id="countdown_stop">Stop</button>
        <button id="countdown_timer">Timer</button>
        `;
    }
}