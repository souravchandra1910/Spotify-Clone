console.log("Welcome to Spotify!");
let songIndex = 0;
let audioElement = new Audio("./songs/Phir Kabhi.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let songs = [
  {
    songName: "Phir Kabhi",
    filepath: "./songs/Phir Kabhi",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Phir Kabhi",
    filepath: "./songs/Phir Kabhi",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Phir Kabhi",
    filepath: "./songs/Phir Kabhi",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Phir Kabhi",
    filepath: "./songs/Phir Kabhi",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Phir Kabhi",
    filepath: "./songs/Phir Kabhi",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Phir Kabhi",
    filepath: "./songs/Phir Kabhi",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Phir Kabhi",
    filepath: "./songs/Phir Kabhi",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Phir Kabhi",
    filepath: "./songs/Phir Kabhi",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Phir Kabhi",
    filepath: "./songs/Phir Kabhi",
    coverPath: "./image/c.jpg",
  },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
window.onload = function () {
  audioElement.addEventListener("timeupdate", () => {
    //update seekbar
    progress = parseInt(
      (audioElement.currentTime / audioElement.duration) * 100
    );
    myProgressBar.value = progress;
  });

  myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
  })
};
