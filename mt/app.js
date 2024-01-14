var audioElement = document.getElementById('audio-element');
var playPauseButton = document.getElementById('play-pause-button');
var volumeSlider = document.getElementById('volume-slider');
var skipForwardButton = document.getElementById('skip-forward-button');
var skipBackwardButton = document.getElementById('skip-backward-button');
var currentSongElement = document.getElementById('current-song');
var seekSlider = document.getElementById('seek-slider');
var loopButton = document.getElementById('loop-button');

const Audios = [
  {
    title: '4444',
    file: 'songs/4444.mp3'
  },
  {
    title: 'bingley',
    file: 'songs/bingley.mp3'
  },
  {
    title: '1GRiT',
    file: 'songs/1grit.mp3'
  },  
  {
    title: 'КАЖДЫЙ ДЕНЬ',
    file: 'songs/КАЖДЫЙ ДЕНЬ.mp3'
  },
  {
    title: 'Want It All',
    file: 'songs/wantitall.mp3'
  },
  {
    title: 'Stand For God',
    file: 'songs/standforgod.mp3'
  },
  {
    title: 'On My Mind',
    file: 'songs/onmymind.mp3'
  },
  {
    title: 'SHOOT EM\' UP!',
    file: 'songs/shootemup.mp3'
  },
  {
    title: 'Vegas',
    file: 'songs/vegas.mp3'
  },
  {
    title: 'Quinn',
    file: 'songs/quinn.mp3'
  },
  {
    title: 'Tired Of Trying',
    file: 'songs/tiredoftrying.mp3'
  },
  {
    title: 'Chernobyl',
    file: 'songs/chernobyl.mp3'
  },
  {
    title: 'Oh Wow',
    file: 'songs/ohwow.mp3'
  },
  {
    title: 'Paranoia Agent',
    file: 'songs/paranoiaagent.mp3'
  },
  {
    title: 'It\'s Passed Us Now, But I\'ll Carry It Regardless',
    file: 'songs/itspassedusnowbutitllcarryitregardless.mp3'
  },
  {
    title: 'No Life Line',
    file: 'songs/nolifeline.mp3'
  },
  {
    title: 'Lately',
    file: 'songs/lately.mp3'
  },
  {
    title: 'Invisible',
    file: 'songs/invisible.mp3'
  },
  {
    title: 'Aria 91',
    file: 'songs/aria91.mp3'
  },
  {
    title: 'FUSION',
    file: 'songs/fusion.mp3'
  },
  {
    title: 'Feasting.On.The.Guts.Of.Angels',
    file: 'songs/feastingonthegutsofangels.mp3'
  },
  {
    title: 'Moon Rock Shawty',
    file: 'songs/moonrockshawty.mp3'
  },
  {
    title: 'Insomnia',
    file: 'songs/insomnia.mp3'
  },
  {
    title: 'NINE!',
    file: 'songs/nine!.mp3'
  },
  {
    title: 'HEARTLESS',
    file: 'songs/heartless.mp3'
  },
  {
    title: 'BACKWOODS',
    file: 'songs/backwoods.mp3'
  },
  {
    title: 'hero',
    file: 'songs/hero.mp3'
  },
  {
    title: 'Blurry',
    file: 'songs/blurry.mp3'
  },
  {
    title: 'cold',
    file: 'songs/cold.mp3'
  },
  {
    title: 'Dark Thoughts',
    file: 'songs/darkthoughts.mp3'
  },
  {
    title: 'impatient',
    file: 'songs/impatient.mp3'
  },
  {
    title: 'paranoid',
    file: 'songs/paranoid.mp3'
  },
  {
    title: 'xo',
    file: 'songs/xo.mp3'
  },
  {
    title: 'xanny bar',
    file: 'songs/xannybar.mp3'
  },
  {
    title: 'untrust u',
    file: 'songs/untrustu.mp3'
  },
  {
    title: 'Fuego',
    file: 'songs/feugo.mp3'
  },
  {
    title: 'MIKICHAN',
    file: 'songs/mikichan.mp3'
  },
  {
    title: 'Hate Me 2',
    file: 'songs/hateme2.mp3'
  },
  {
    title: 'Coke White Cruise Ship',
    file: 'songs/cokewhitecruiseship.mp3'
  },
  {
    title: 'Fuck It',
    file: 'songs/fuckit.mp3'
  },
  {
    title: 'Dear God..',
    file: 'songs/deargod.mp3'
  },
  {
    title: 'DEAD INSIDE',
    file: 'songs/deadinside.mp3'
  },
  {
    title: 'death2punk',
    file: 'songs/death2punk.mp3'
  },
  {
    title: 'Dead Boy Status',
    file: 'songs/deadboystatus.mp3'
  },
  {
    title: 'FREAK BiTCH',
    file: 'songs/freakbitch.mp3'
  },
  {
    title: 'FUCK SOUNDCL0UD!',
    file: 'songs/fucksoundcloud.mp3'
  },
  {
    title: 'i hate you!',
    file: 'songs/ihateyou.mp3'
  },
  {
    title: 'Feeling',
    file: 'songs/feeling.mp3'
  },
  {
    title: 'i know you hate me',
    file: 'songs/iknowyouhateme.mp3'
  },
  {
    title: 'white lies',
    file: 'songs/whitelies.mp3'
  }
];

let currentAudioIndex = 0;
let isLooping = false;

audioElement.src = Audios[currentAudioIndex].file;
currentSongElement.textContent = Audios[currentAudioIndex].title;

playPauseButton.addEventListener('click', function() {
  if (audioElement.paused) {
    audioElement.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audioElement.pause();
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
  }
});

volumeSlider.addEventListener('input', function() {
  audioElement.volume = volumeSlider.value;
});

seekSlider.addEventListener('input', function() {
  audioElement.currentTime = seekSlider.value * audioElement.duration;
});

audioElement.addEventListener('timeupdate', function() {
  seekSlider.value = audioElement.currentTime / audioElement.duration;
});

skipForwardButton.addEventListener('click', function() {
    if (!isLooping) {
      currentAudioIndex++;
      if (currentAudioIndex >= Audios.length) {
        currentAudioIndex = 0;
      }
      audioElement.src = Audios[currentAudioIndex].file;
      currentSongElement.textContent = Audios[currentAudioIndex].title;
      audioElement.load();
      audioElement.play();
      playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
  });
  
  skipBackwardButton.addEventListener('click', function() {
    if (!isLooping) {
      currentAudioIndex--;
      if (currentAudioIndex < 0) {
        currentAudioIndex = Audios.length - 1;
      }
      audioElement.src = Audios[currentAudioIndex].file;
      currentSongElement.textContent = Audios[currentAudioIndex].title;
      audioElement.load();
      audioElement.play();
      playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
  });
  
  audioElement.addEventListener('ended', function() {
    if (!isLooping) {
      currentAudioIndex++;
      if (currentAudioIndex >= Audios.length) {
        currentAudioIndex = 0;
      }
      audioElement.src = Audios[currentAudioIndex].file;
      currentSongElement.textContent = Audios[currentAudioIndex].title;
      audioElement.load();
      audioElement.play();
      playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
  });
  
loopButton.addEventListener('click', function() {
  isLooping = !isLooping;
  audioElement.loop = isLooping;
  loopButton.classList.toggle('active');
});

volumeSlider.addEventListener('input', function() {
    audioElement.volume = volumeSlider.value;
    document.getElementById('volume-percent').textContent = Math.round(volumeSlider.value * 100) + '%';
  });
  
  audioElement.addEventListener('timeupdate', function() {
    seekSlider.value = audioElement.currentTime / audioElement.duration;
    document.getElementById('elapsed-time').textContent = formatTime(audioElement.currentTime);
  });
  
  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  }