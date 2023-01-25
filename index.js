console.log("Welcome to Spotify!");
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Phir Kabhi",
    filepath: "./songs/1",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Dil Ka Pata",
    filepath: "./songs/2",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Dil Se Dil",
    filepath: "./songs/3",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Ghodey Pe Sawar",
    filepath: "./songs/4",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Jaan Ban Gaye",
    filepath: "./songs/5",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Tera Ban Jayunga",
    filepath: "./songs/6",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Jab Tak",
    filepath: "./songs/7",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Kaise Hua",
    filepath: "./songs/8",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Tuta Hua Saaz",
    filepath: "./songs/9",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Ranjha",
    filepath: "./songs/10",
    coverPath: "./image/c.jpg",
  },
  {
    songName: "Shauq",
    filepath: "./songs/11",
    coverPath: "./image/c.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
});

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

  myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
      (myProgressBar.value * audioElement.duration) / 100;
  });
};

const makaAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
      gif.style.opacity = 0;
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makaAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      gif.style.opacity = 1;
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 10) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();

  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});



document.getElementById('about').addEventListener('click',()=>{
    alert("Hey, this is Sourav😋😋🐻,I made this spofity clone  \n please press ok to continue");
  });








