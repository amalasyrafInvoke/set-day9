var song = document.querySelector('#song');
var timeBar = document.querySelector('#timeBar');
var duration = document.querySelector('#duration');

var songList1 = {
  src: 'audio/30sec.mp3',
  title: 'Happy Birthday',
  artist: 'Justin B.',
};
var songList2 = {
  src: 'audio/littlebit.mp3',
  title: 'Little Bit',
  artist: 'Baba Sheep',
};
var songList2 = {
  src: 'audio/bgmusic.mp3',
  title: 'BG Music',
  artist: 'Randy Name',
};

function playSong() {
  song.play();
}
function pauseSong() {
  song.pause();
}

setInterval(checkTime, 1000);

function checkTime() {
  var songDuration = Math.round(song.duration);
  var songCurrentTime = Math.round(song.currentTime);
  // console.log(`Song Duration is: ${songDuration}`);
  // console.log(`Song Current Time is: ${songCurrentTime}`);

  var timeBarWidth = (songCurrentTime / songDuration) * 100;

  var clr = {
    R: Math.round(Math.random() * 255),
    G: Math.round(Math.random() * 255),
    B: Math.round(Math.random() * 155) + 100,
  };

  // console.log(clr.R, clr.G, clr.B);

  timeBar.style.width = `${timeBarWidth}%`;
  timeBar.style.backgroundColor = `rgb(${clr.R}, ${clr.G}, ${clr.B})`;
  duration.innerHTML = songCurrentTime;
}

function getSong(songData) {
  // if (songData === 'songList1') {
  //   console.log(songList1.src);
  // }
  // if (songData === 'songList2') {
  //   console.log(songList2.src);
  // }

  switch (songData) {
    case 'songList1':
      console.log(songList1.src);
      song.src = songList1.src;
      document.getElementById('titleText').innerHTML = songList1.title;
      document.getElementById('artistText').innerHTML = songList1.artist;
      break;

    case 'songList2':
      console.log(songList2.src);
      song.src = songList2.src;
      document.getElementById('titleText').innerHTML = songList2.title;
      document.getElementById('artistText').innerHTML = songList2.artist;
      break;
    default:
      console.log('Default case invoked');
      document.getElementById('titleText').innerHTML = "No Title";
      document.getElementById('artistText').innerHTML = "No Artist";
      break;
  }
}
