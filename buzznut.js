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

var buzzSounds = {};
var buzzSoundsArray = [];
function start() {
    buzzSounds["lawAndOrder.mp3"] = new sound("lawAndOrder.mp3");
    buzzSounds["zoidberg.mp3"] = new sound("zoidberg.mp3");

    for( i in buzzSounds ) {
        buzzSoundsArray.push(buzzSounds[i]);
     }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomIntFromInterval(min, max) {
    var r = Math.floor(Math.random() * (max - min + 1) + min);

    if(r < min){
        r = min;
    }

    return r;
}

// Handle the box touch
async function presh(command) {
    var soundChoice = document.getElementById("soundChoice").value;
    var soundToPlay;
    if(soundChoice == "random"){
        var randomIndex = randomIntFromInterval(0, buzzSoundsArray.length - 1);
        soundToPlay = buzzSoundsArray[randomIndex];
    }
    else {
        soundToPlay = buzzSounds[soundChoice];
    }

    if(command == "go"){
        var minTime = document.getElementById("minTime").value;
        var maxTime = document.getElementById("maxTime").value;
        console.log("pressed [" + minTime + "-" + maxTime + "]");
        document.getElementById('go').style.opacity = 0.25;
        var interval = randomIntFromInterval(minTime, maxTime) * 1000;
        console.log("interval = " + interval);
        console.log("buzz");
        await sleep(interval);
        document.getElementById('go').style.opacity = 1;
        soundToPlay.play();
    }
    else if(command = "test"){
        soundToPlay.play();
    }
}
