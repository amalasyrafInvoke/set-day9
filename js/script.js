var audio = document.querySelector('#audio');
var heartOn = false;
var isPlaying = false;

const songList = [
  {
    src: './audio/505.mp3',
    title: '505',
    artist: 'Arctic Monkeys',
    albumName: 'Favourite Worst Nightmare',
    albumImg: './images/monkeys.jpg',
    isFav: false,
  },
  {
    src: './audio/muse.mp3',
    title: 'Supermassive Black Hole',
    artist: 'Muse',
    albumName: 'Black Holes And Revelations',
    albumImg: './images/muse.jpg',
    isFav: false,
  },
  {
    src: './audio/whistle.mp3',
    title: 'Whistle',
    artist: 'Blackpink',
    albumName: 'Square One',
    albumImg: './images/bp.jpg',
    isFav: false,
  },
  {
    src: './audio/amnesia.mp3',
    title: 'Amnesia',
    artist: '5SOS',
    albumName: 'Square One',
    albumImg: './images/5sos.png',
    isFav: false,
  },
  {
    src: './audio/30s.mp3',
    title: '30s Audio',
    artist: 'Artist',
    albumName: 'Album',
    albumImg: './images/song-img.png',
    isFav: false,
  },
];

function heartOnClick() {
  if (heartOn === false) {
    document.querySelector('#heart-btn').classList.replace('far', 'fa');
    document.querySelector('#heart-btn').style.color = '#eb5757';
    heartOn = true;
    return;
  }
  if (heartOn === true) {
    document.querySelector('#heart-btn').classList.replace('fa', 'far');
    document.querySelector('#heart-btn').style.color = 'white';
    heartOn = false;
    return;
  }
}

function switchPlay() {
  console.log(audio);
  if (isPlaying === false) {
    audio.play();
    isPlaying = true;
    document
      .querySelector('#play-btn')
      .classList.replace('fa-play-circle', 'fa-pause-circle');
    return;
  }
  if (isPlaying === true) {
    audio.pause();
    isPlaying = false;
    document
      .querySelector('#play-btn')
      .classList.replace('fa-pause-circle', 'fa-play-circle');
    return;
  }
}

function stopAudio() {
  if (isPlaying === false) {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    return;
  }
  if (isPlaying === true) {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    document
      .querySelector('#play-btn')
      .classList.replace('fa-pause-circle', 'fa-play-circle');
    return;
  }
}

document.querySelector('#fav-song1').addEventListener('click', favSongOnClick);
document.querySelector('#fav-song2').addEventListener('click', favSongOnClick);
document.querySelector('#fav-song3').addEventListener('click', favSongOnClick);
document.querySelector('#fav-song4').addEventListener('click', favSongOnClick);
document.querySelector('#fav-song5').addEventListener('click', favSongOnClick);
function favSongOnClick(event) {
  this.classList.replace('fa-plus', 'fa-spinner');
  setTimeout(() => {
    this.classList.replace('fa-spinner', 'fa-check');
  }, 1600);
}

function changeSong(index) {
  audio.src = songList[index].src;
  document.querySelector('#playing-title').innerHTML = songList[index].title;
  document.querySelector('#playing-artist').innerHTML = songList[index].artist;
  document.querySelector(
    '#bg-img'
  ).style.backgroundImage = `url(${songList[index].albumImg})`;
  stopAudio();
  audio.play();
  isPlaying = true;
  document
    .querySelector('#play-btn')
    .classList.replace('fa-play-circle', 'fa-pause-circle');
}
