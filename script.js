var video = document.querySelector(".vid");
var juice = document.querySelector(".vid-holder");
var btn = document.getElementById("play-pause");

let VidList = ["v.mp4", "v1.mp4", "v2.mp4", "v3.mp4", "v4.mp4"];

function togglePlayPause() {
  if (video.paused) {
    btn.className = "pause";
    video.play();
  } else {
    btn.className = "play";
    video.pause();
  }
}

btn.onclick = function () {
  togglePlayPause();
};

function videoPaused() {
  btn.className = "play";
  video.pause();
}

function trash() {
  alert(
    "Step 1: Read All Steps." + '\n' + "Step 2: Remove Any Eyewear." + '\n' + "Step 3: Once You Click Ok allow some time for the program to begin. (READ STEP 4 BEFORE PRESSING OK)." + '\n' + "Step 4: Once You Click Ok click mouse pointer on the black bar around the video at different points for best results."
  );
}

video.addEventListener("timeupdate", function () {
  var juicePos = video.currentTime / video.duration;
  juice.style.width = juicePos * 100 + "%";
  if (video.ended) {
    let vid = VidList[Math.floor(Math.random() * VidList.length)];
    btn.className = "play";
    console.log(vid);
    document.getElementById("videoVideo").src = vid;
  }
});

webgazer
  .setGazeListener(function (data) {
    if (data == null) {
      return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
    var currentElement = document.elementFromPoint(xprediction, yprediction);
    if (
      xprediction >= 1700 ||
      xprediction <= 250 ||
      yprediction <= 100 ||
      yprediction >= 900
    ) {
      btn.className = "play";
      video.pause();
      console.log("X pred: " + xprediction + ". Y pred: " + yprediction);
      console.log("Video Needs Watched!");
    }
  })
  .begin();

trash();
