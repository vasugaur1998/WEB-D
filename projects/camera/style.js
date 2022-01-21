
let video = document.querySelector("video");
let recordBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");

let captureBtnCont = document.querySelector(".capture-btn-cont");
let captureBtn = document.querySelector(".capture-btn");
let recordFlag = false;
let transparentColor = "transparent";

let recorder;
let chunks = [];  // media data in chunks

let constraints = {
    audio: true,
    video: true
}

//navigator is global object which gives browser related info

navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        video.srcObject = stream;

        // media recorder is an API

        recorder = new MediaRecorder(stream);

        recorder.addEventListener("start", (e) => {
            chunks = [];
        })
        recorder.addEventListener("dataavailable", (e) => {
            chunks.push(e.data);
        })
        recorder.addEventListener("stop", (e) => {
            // conversion of media chunks data to video

            let blob = new Blob(chunks, { type: "video/mp4" });
            let videoURL = URL.createObjectURL(blob);


            let a = document.createElement("a");
            a.href = videoURL;
            a.download = "stream.mp4";
            a.click();
        })

    })

recordBtnCont.addEventListener("click", (e) => {
    if (!recorder) return;


    recordFlag = !recordFlag;
    if (recordFlag) {
        // start recording

        recorder.start();
        recordBtn.classList.add("scale-record");   // animations
        startTimer();

    }
    else {
        // stop recording
        recorder.stop();
        recordBtn.classList.remove("scale-record");
        stopTimer();
    }
})

let timerID;
let counter = 0;   // represents total seconds

let timer = document.querySelector(".timer");
function startTimer() {
    timer.style.display = "block";
    function displayTimer() {

        let totalSeconds = counter;

        let hours = Number.parseInt(totalSeconds / 3600);

        let minutes = Number.parseInt(totalSeconds / 60);
        totalSeconds = totalSeconds % 60;

        let seconds = totalSeconds;
        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        timer.innerText = `${hours}:${minutes}:${seconds}`;
        counter++;
    }
    timerId = setInterval(displayTimer, 1000);
}

function stopTimer() {
    clearInterval(timerID);
    timer.innerText = "00:00:00";
    timer.style.display = "none";
}

captureBtnCont.addEventListener("click", (e) => {

    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;


    let tool = canvas.getContext("2d");
    tool.drawImage(video, 0, 0, canvas.width, canvas.height);

    //   filtering
    tool.fillStyle = transparentColor;
    tool.fillRect(0, 0, canvas.width, canvas.height);

    let imageURL = canvas.toDataURL();
    let a = document.createElement("a");
    a.href = imageURL;
    a.download = "iamge.jpg";
    a.click();
});

// filtering
let filterLayer = document.querySelector(".filter-layer");
 let allFilters = document.querySelectorAll(".filter");
allFilters.forEach((filterElem) => {
    filterElem.addEventListener("click", (e) => {
        transparentColor = getComputedStyle(filterElem).getPropertyValue("background-color");
        filterLayer.style.backgroundColor = transparentColor;
    })
});

