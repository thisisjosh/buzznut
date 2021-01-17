function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

var buzzSound;
function start() {
    buzzSound = new sound("lawAndOrder.mp3");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Handle the box touch
async function presh(buttonName) {
    console.log("pressed");
    var interval = randomIntFromInterval(5, 15) * 1000;
    console.log("interval = " + interval);
    console.log("buzz");
    await sleep(interval);
    buzzSound.play();
}
