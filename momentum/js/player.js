const audio = new Audio();
const playBtn = document.querySelector(".play-main");
const playNext = document.querySelector(".play-next");
const playPrev = document.querySelector(".play-prev");
import playList from "./playList.js";
console.log(playList);
let playNum = 0;
let isPlay = false;

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  if (!isPlay) {
    audio.play();
    isPlay = true;
    toggleBtn();
  } else {
    audio.pause();
    isPlay = false;
    toggleBtn();
  }
}

function toggleBtn() {
  playBtn.classList.toggle("pause");
}

playBtn.addEventListener("click", playAudio);
playNext.addEventListener("click", playAudio);
playPrev.addEventListener("click", playAudio);

function getNextAudio() {
  for (let playNum = 0; playNum < playList.length; playNum++) {
    playAudio();
  }
}
audio.addEventListener("ended", getNextAudio);