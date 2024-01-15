var audioElement = document.getElementById('audio-element');var playPauseButton = document.getElementById('play-pause-button');var volumeSlider = document.getElementById('volume-slider');var skipForwardButton = document.getElementById('skip-forward-button');var skipBackwardButton = document.getElementById('skip-backward-button');var currentSongElement = document.getElementById('current-song');var seekSlider = document.getElementById('seek-slider');var loopButton = document.getElementById('loop-button');var shuffleButton = document.getElementById('shuffle-button');const Audios = [ { title: '4444', file: 'songs/4444.mp3' }, { title: 'Bingley', file: 'songs/bingley.mp3' }, { title: '1GRiT', file: 'songs/1grit.mp3' }, { title: 'Want It All', file: 'songs/wantitall.mp3' }, { title: 'Stand For God', file: 'songs/standforgod.mp3' }, { title: 'Spin Around', file: 'songs/spinaround.mp3' }, { title: 'On My Mind', file: 'songs/onmymind.mp3' }, { title: 'SHOOT EM\' UP', file: 'songs/shootemup.mp3' }, { title: 'Vegas', file: 'songs/vegas.mp3' }, { title: 'Quinn', file: 'songs/quinn.mp3' }, { title: 'Tired Of Trying', file: 'songs/tiredoftrying.mp3' }, { title: 'Chernobyl', file: 'songs/chernobyl.mp3' }, { title: 'Oh Wow', file: 'songs/ohwow.mp3' }, { title: 'Paranoia Agent', file: 'songs/paranoiaagent.mp3' }, { title: 'No Life Line', file: 'songs/nolifeline.mp3' }, { title: 'Lately', file: 'songs/lately.mp3' }, { title: 'invisible', file: 'songs/invisible.mp3' }, { title: 'Aria91', file: 'songs/aria91.mp3' }, { title: 'FUSION', file: 'songs/fusion.mp3' }, { title: 'F.O.T.G.O.A', file: 'songs/feastingonthegutsofangels.mp3' }, { title: 'insomnia', file: 'songs/insomnia.mp3' }, { title: 'NINE!', file: 'songs/nine!.mp3' }, { title: 'HEARTLESS', file: 'songs/heartless.mp3' }, { title: 'BACKWOODS', file: 'songs/backwoods.mp3' }, { title: 'hero', file: 'songs/hero.mp3' }, { title: 'Blurry', file: 'songs/blurry.mp3' }, { title: 'cold', file: 'songs/cold.mp3' }, { title: 'Dark Thoughts', file: 'songs/darkthoughts.mp3' }, { title: 'impatient', file: 'songs/impatient.mp3' }, { title: 'paranoid', file: 'songs/paranoid.mp3' }, { title: 'new era', file: 'songs/newera.mp3' }, { title: 'xo', file: 'songs/xo.mp3' }, { title: 'xanny bar', file: 'songs/xannybar.mp3' }, { title: 'untrust u', file: 'songs/untrustu.mp3' }, { title: 'Fuego', file: 'songs/feugo.mp3' }, { title: 'MIKICHAN', file: 'songs/mikichan.mp3' }, { title: 'Hate Me 2', file: 'songs/hateme2.mp3' }, { title: 'Fuck It', file: 'songs/fuckit.mp3' }, { title: 'Dear God..', file: 'songs/deargod.mp3' }, { title: 'DEAD INSIDE', file: 'songs/deadinside.mp3' }, { title: 'death2punk', file: 'songs/death2punk.mp3' }, { title: 'Dead Boy Status', file: 'songs/deadboystatus.mp3' }, { title: 'FREAK BiTCH', file: 'songs/freakbitch.mp3' }, { title: 'i hate you!', file: 'songs/ihateyou.mp3' }, { title: 'Feeling', file: 'songs/feeling.mp3' }, { title: 'white lies', file: 'songs/whitelies.mp3' }, { title: 'Fruity', file: 'songs/fruity.mp3' }, { title: 'angst', file: 'songs/angst.mp3' }, { title: 'resolve', file: 'songs/resolve.mp3' }, { title: 'Seaside!', file: 'songs/seaside.mp3' }, { title: 'marceline', file: 'songs/marceline.mp3' }, { title: 'Comma', file: 'songs/comma.mp3' }, { title: 'death knockiiing', file: 'songs/deathknocking.mp3' }, { title: 'Plague', file: 'songs/plague.mp3' }, { title: 'comin\' round', file: 'songs/cominround.mp3' }, { title: 'Mental Chillness', file: 'songs/mentalchillness.mp3' }, { title: 'Psycho girl', file: 'songs/psychogirl.mp3' }, { title: 'BUNGEE GUM', file: 'songs/bungeegum.mp3' }, { title: 'bleeding', file: 'songs/bleeding.mp3' }, { title: 'blame', file: 'songs/blame.mp3' }, { title: 'Falling / Apart', file: 'songs/fallingapart.mp3' }, { title: 'dishonest', file: 'songs/dishonest.mp3' }, { title: 'lost in you', file: 'songs/lostinyou.mp3' }, { title: '$wamp', file: 'songs/$wamp.mp3' }];/**const count = Audios.length;console.log(count)**/let currentAudioIndex = 0;let isLooping = false;let isShuffle = false;let shuffledAudios = [];let availableIndexes = [];resetShufflePool();audioElement.src = Audios[currentAudioIndex].file;currentSongElement.textContent = Audios[currentAudioIndex].title;playPauseButton.addEventListener('click', function() { if (audioElement.paused) { audioElement.play(); playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; } else { audioElement.pause(); playPauseButton.innerHTML = '<i class="fas fa-play"></i>'; }});volumeSlider.addEventListener('input', function() { audioElement.volume = volumeSlider.value;});seekSlider.addEventListener('input', function() { audioElement.currentTime = seekSlider.value * audioElement.duration;});audioElement.addEventListener('timeupdate', () => { seekSlider.value = audioElement.currentTime; document.getElementById('elapsed-time').textContent = formatTime(audioElement.currentTime);});skipForwardButton.addEventListener('click', function() { if (!isLooping) { if (isShuffle) { currentAudioIndex = getRandomIndex(); } else { currentAudioIndex++; if (currentAudioIndex >= Audios.length) { currentAudioIndex = 0; } } let nextAudio = Audios[currentAudioIndex]; audioElement.src = nextAudio.file; currentSongElement.textContent = nextAudio.title; audioElement.load(); audioElement.play(); playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; if (isShuffle) { resetShufflePool(currentAudioIndex); } } }); skipBackwardButton.addEventListener('click', function() { if (!isLooping) { if (isShuffle) { currentAudioIndex = getRandomIndex(); } else { currentAudioIndex--; if (currentAudioIndex < 0) { currentAudioIndex = Audios.length - 1; } } let previousAudio = Audios[currentAudioIndex]; audioElement.src = previousAudio.file; currentSongElement.textContent = previousAudio.title; audioElement.load(); audioElement.play(); playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; if (isShuffle) { resetShufflePool(currentAudioIndex); } } }); audioElement.addEventListener('ended', function() { if (!isLooping) { if (isShuffle) { if (availableIndexes.length <= 3) { resetShufflePool(); } currentAudioIndex = getRandomIndex(); } else { currentAudioIndex++; if (currentAudioIndex >= Audios.length) { currentAudioIndex = 0; } } let nextAudio = Audios[currentAudioIndex]; audioElement.src = nextAudio.file; currentSongElement.textContent = nextAudio.title; audioElement.load(); audioElement.play(); playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; if (isShuffle) { resetShufflePool(currentAudioIndex); } } });loopButton.addEventListener('click', function() { isLooping = !isLooping; audioElement.loop = isLooping; loopButton.classList.toggle('active');});volumeSlider.addEventListener('input', function() { audioElement.volume = volumeSlider.value; document.getElementById('volume-percent').textContent = Math.round(volumeSlider.value * 100) + '%'; }); audioElement.addEventListener('timeupdate', function() { seekSlider.value = audioElement.currentTime / audioElement.duration; document.getElementById('elapsed-time').textContent = formatTime(audioElement.currentTime); }); function formatTime(seconds) { let minutes = Math.floor(seconds / 60); seconds = Math.floor(seconds % 60); minutes = (minutes < 10) ? '0' + minutes : minutes; seconds = (seconds < 10) ? '0' + seconds : seconds; return minutes + ':' + seconds; } document.addEventListener('keydown', function (e) { if ((e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) || (e.ctrlKey && e.shiftKey && e.key === 'C') || (e.ctrlKey && e.key === 'u') || (e.ctrlKey && e.key === 's') || (e.ctrlKey && e.key === 'p') || (e.ctrlKey && e.key === 'g') || (e.ctrlKey && e.key === 'f') || (e.ctrlKey && e.key === 'o') || (e.ctrlKey && e.key === 'j') || (e.ctrlKey && e.key === 'h') || (e.ctrlKey && e.key === 'd') || (e.ctrlKey && e.key === '+') || (e.ctrlKey && e.key === '-')) {e.preventDefault();}}); (function () { let SSWZ = function () { this.keyScrollHandler = function (e) { if (e.ctrlKey) { e.preventDefault(); return false; } }; }; if (window === top) { let sswz = new SSWZ(); window.addEventListener('wheel', sswz.keyScrollHandler, { passive: false }); } })(); document.addEventListener('contextmenu', function (e) { e.preventDefault(); }); shuffleButton.addEventListener('click', function() { isShuffle = !isShuffle; shuffleButton.classList.toggle('active'); if (!isShuffle) { resetShufflePool(); } });function resetShufflePool(recentlyPlayedIndex) { if (recentlyPlayedIndex !== undefined) { const indexInAvailable = availableIndexes.indexOf(recentlyPlayedIndex); if (indexInAvailable > -1) { availableIndexes.splice(indexInAvailable, 1); availableIndexes.push(recentlyPlayedIndex); } } else { availableIndexes = Audios.map((_, index) => index); }}function getRandomIndex() { if (availableIndexes.length <= 3) { resetShufflePool(); } let randomIndexPosition = Math.floor(Math.random() * availableIndexes.length); let randomIndex = availableIndexes[randomIndexPosition]; availableIndexes.splice(randomIndexPosition, 1); return randomIndex;}
