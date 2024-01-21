var audioElement = document.getElementById("audio-element");var playPauseButton = document.getElementById("play-pause-button");var volumeSlider = document.getElementById("volume-slider");var skipForwardButton = document.getElementById("skip-forward-button");var skipBackwardButton = document.getElementById("skip-backward-button");var currentSongElement = document.getElementById("current-song");var seekSlider = document.getElementById("seek-slider");var loopButton = document.getElementById("loop-button");var shuffleButton = document.getElementById("shuffle-button");var volumeIcon = document.querySelector(".icon");const Audios = [ { title: "4444", file: "songs/4444.mp3" }, { title: "born to pwn", file: "songs/borntopwn.mp3" }, { title: "I Am", file: "songs/iam.mp3" }, { title: "shiv", file: "songs/shiv.mp3" }, { title: "feel my luv", file: "songs/feelmyluv.mp3" }, { title: "Harpoon", file: "songs/harpoon.mp3" }, { title: "Eternal", file: "songs/eternal.mp3" }, { title: "Come With Me", file: "songs/comewithme.mp3" }, { title: "FXCKED UP", file: "songs/fxckedup.mp3" }, { title: "Love Letters", file: "songs/loveletters.mp3" }, { title: "Clutch Kick", file: "songs/clutchkick.mp3" }, { title: "day n night", file: "songs/daynnight.mp3" }, { title: "Rigor Mortis", file: "songs/rigormortis.mp3" }, { title: "Tempt Fade!", file: "songs/temptfade.mp3" }, { title: "SMOKE!", file: "songs/smoke!.mp3" }, { title: "OBEYTOME", file: "songs/obeytome.mp3" }, { title: "Reanimation", file: "songs/reanimation.mp3" }, { title: "NEFARIOUS", file: "songs/nefarious.mp3" }, { title: "Taliban", file: "songs/taliban.mp3" }, { title: "Hero/Heroin", file: "songs/heroheroin.mp3" }, { title: "Kansei Drifto", file: "songs/kanseidrifto.mp3" }, { title: "fleshh", file: "songs/fleshh.mp3" }, { title: "Clone me", file: "songs/cloneme.mp3" }, { title: "IHY", file: "songs/ihy.mp3" }, { title: "Fall Down", file: "songs/falldown.mp3" }, { title: "Gravity", file: "songs/gravity.mp3" }, { title: "Dead by 25", file: "songs/deadby25.mp3" }, { title: "roses", file: "songs/roses.mp3" }, { title: "ALIVE", file: "songs/alive.mp3" }, { title: "ghost", file: "songs/ghost.mp3" }, { title: "soul", file: "songs/soul.mp3" }, { title: "seasons", file: "songs/seasons.mp3" }, { title: "holy ghost", file: "songs/holyghost.mp3" }, { title: "HEY A", file: "songs/heya.mp3" }, { title: "Bingley", file: "songs/bingley.mp3" }, { title: "1GRiT", file: "songs/1grit.mp3" }, { title: "Want It All", file: "songs/wantitall.mp3" }, { title: "Stand For God", file: "songs/standforgod.mp3" }, { title: "Spin Around", file: "songs/spinaround.mp3" }, { title: "On My Mind", file: "songs/onmymind.mp3" }, { title: "SHOOT EM' UP", file: "songs/shootemup.mp3" }, { title: "Vegas", file: "songs/vegas.mp3" }, { title: "Quinn", file: "songs/quinn.mp3" }, { title: "Tired Of Trying", file: "songs/tiredoftrying.mp3" }, { title: "Chernobyl", file: "songs/chernobyl.mp3" }, { title: "Oh Wow", file: "songs/ohwow.mp3" }, { title: "Paranoia Agent", file: "songs/paranoiaagent.mp3" }, { title: "No Life Line", file: "songs/nolifeline.mp3" }, { title: "Lately", file: "songs/lately.mp3" }, { title: "invisible", file: "songs/invisible.mp3" }, { title: "Aria91", file: "songs/aria91.mp3" }, { title: "FUSION", file: "songs/fusion.mp3" }, { title: "F.O.T.G.O.A", file: "songs/feastingonthegutsofangels.mp3" }, { title: "insomnia", file: "songs/insomnia.mp3" }, { title: "NINE!", file: "songs/nine!.mp3" }, { title: "HEARTLESS", file: "songs/heartless.mp3" }, { title: "BACKWOODS", file: "songs/backwoods.mp3" }, { title: "hero", file: "songs/hero.mp3" }, { title: "Blurry", file: "songs/blurry.mp3" }, { title: "cold", file: "songs/cold.mp3" }, { title: "Dark Thoughts", file: "songs/darkthoughts.mp3" }, { title: "impatient", file: "songs/impatient.mp3" }, { title: "paranoid", file: "songs/paranoid.mp3" }, { title: "new era", file: "songs/newera.mp3" }, { title: "xo", file: "songs/xo.mp3" }, { title: "xanny bar", file: "songs/xannybar.mp3" }, { title: "untrust u", file: "songs/untrustu.mp3" }, { title: "Fuego", file: "songs/feugo.mp3" }, { title: "MIKICHAN", file: "songs/mikichan.mp3" }, { title: "Hate Me 2", file: "songs/hateme2.mp3" }, { title: "Fuck It", file: "songs/fuckit.mp3" }, { title: "Dear God..", file: "songs/deargod.mp3" }, { title: "DEAD INSIDE", file: "songs/deadinside.mp3" }, { title: "death2punk", file: "songs/death2punk.mp3" }, { title: "Dead Boy Status", file: "songs/deadboystatus.mp3" }, { title: "FREAK BiTCH", file: "songs/freakbitch.mp3" }, { title: "i hate you!", file: "songs/ihateyou.mp3" }, { title: "Feeling", file: "songs/feeling.mp3" }, { title: "white lies", file: "songs/whitelies.mp3" }, { title: "Fruity", file: "songs/fruity.mp3" }, { title: "angst", file: "songs/angst.mp3" }, { title: "resolve", file: "songs/resolve.mp3" }, { title: "Seaside!", file: "songs/seaside.mp3" }, { title: "marceline", file: "songs/marceline.mp3" }, { title: "Comma", file: "songs/comma.mp3" }, { title: "Plague", file: "songs/plague.mp3" }, { title: "comin' round", file: "songs/cominround.mp3" }, { title: "Mental Chillness", file: "songs/mentalchillness.mp3" }, { title: "Psycho Girl", file: "songs/psychogirl.mp3" }, { title: "BUNGEE GUM", file: "songs/bungeegum.mp3" }, { title: "bleeding", file: "songs/bleeding.mp3" }, { title: "blame", file: "songs/blame.mp3" }, { title: "Falling / Apart", file: "songs/fallingapart.mp3" }, { title: "dishonest", file: "songs/dishonest.mp3" }, { title: "lost in you", file: "songs/lostinyou.mp3" }, { title: "$wamp", file: "songs/$wamp.mp3" }, { title: "touché", file: "songs/touche.mp3" }, { title: "vaas", file: "songs/vaas.mp3" }, { title: "December", file: "songs/december.mp3" }, { title: "Gxth B!tch", file: "songs/gxthb!tch.mp3" }, ];/**console.log(`Loaded ${Audios.length} Songs.`);**/let currentAudioIndex = 0;let isLooping = false;let isShuffle = false;let isMuted = false;let shuffledAudios = [];let availableIndexes = [];audioElement.volume = 0.5;resetShufflePool();audioElement.src = Audios[currentAudioIndex].file;currentSongElement.textContent = Audios[currentAudioIndex].title;playPauseButton.addEventListener("click", function () { if (audioElement.paused) { audioElement.play(); playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; } else { audioElement.pause(); playPauseButton.innerHTML = '<i class="fas fa-play"></i>'; }});audioElement.addEventListener('play', function(){ playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';});audioElement.addEventListener('pause', function(){ playPauseButton.innerHTML = '<i class="fas fa-play"></i>';});volumeSlider.addEventListener("input", function () { audioElement.volume = volumeSlider.value;});seekSlider.addEventListener("input", function () { audioElement.currentTime = seekSlider.value * audioElement.duration;});audioElement.addEventListener("timeupdate", () => { seekSlider.value = audioElement.currentTime; document.getElementById("elapsed-time").textContent = formatTime(audioElement.currentTime);});skipForwardButton.addEventListener("click", function () { if (!isLooping) { if (isShuffle) { currentAudioIndex = getRandomIndex(); } else { currentAudioIndex++; if (currentAudioIndex >= Audios.length) { currentAudioIndex = 0; } } let nextAudio = Audios[currentAudioIndex]; audioElement.src = nextAudio.file; currentSongElement.textContent = nextAudio.title; audioElement.load(); audioElement.play(); playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; if (isShuffle) { resetShufflePool(currentAudioIndex); } }});skipBackwardButton.addEventListener("click", function () { if (!isLooping) { if (isShuffle) { currentAudioIndex = getRandomIndex(); } else { currentAudioIndex--; if (currentAudioIndex < 0) { currentAudioIndex = Audios.length - 1; } } let previousAudio = Audios[currentAudioIndex]; audioElement.src = previousAudio.file; currentSongElement.textContent = previousAudio.title; audioElement.load(); audioElement.play(); playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; if (isShuffle) { resetShufflePool(currentAudioIndex); } }});audioElement.addEventListener("ended", function () { if (!isLooping) { if (isShuffle) { if (availableIndexes.length <= 3) { resetShufflePool(); } currentAudioIndex = getRandomIndex(); } else { currentAudioIndex++; if (currentAudioIndex >= Audios.length) { currentAudioIndex = 0; } } let nextAudio = Audios[currentAudioIndex]; audioElement.src = nextAudio.file; currentSongElement.textContent = nextAudio.title; audioElement.load(); audioElement.play(); playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; if (isShuffle) { resetShufflePool(currentAudioIndex); } }});loopButton.addEventListener("click", function () { isLooping = !isLooping; audioElement.loop = isLooping; loopButton.classList.toggle("active");});shuffleButton.addEventListener("click", function () { isShuffle = !isShuffle; shuffleButton.classList.toggle("active"); if (!isShuffle) { resetShufflePool(); }});function resetShufflePool(recentlyPlayedIndex) { if (recentlyPlayedIndex !== undefined) { const indexInAvailable = availableIndexes.indexOf(recentlyPlayedIndex); if (indexInAvailable > -1) { availableIndexes.splice(indexInAvailable, 1); availableIndexes.push(recentlyPlayedIndex); } } else { availableIndexes = Audios.map((_, index) => index); }}function getRandomIndex() { if (availableIndexes.length <= 3) { resetShufflePool(); } let randomIndexPosition = Math.floor(Math.random() * availableIndexes.length); let randomIndex = availableIndexes[randomIndexPosition]; availableIndexes.splice(randomIndexPosition, 1); return randomIndex;}volumeSlider.addEventListener("input", function () { audioElement.volume = volumeSlider.value; document.getElementById("volume-percent").textContent = Math.round(volumeSlider.value * 100) + "%";});audioElement.addEventListener("timeupdate", function () { seekSlider.value = audioElement.currentTime / audioElement.duration; document.getElementById("elapsed-time").textContent = formatTime(audioElement.currentTime);});function formatTime(seconds) { let minutes = Math.floor(seconds / 60); seconds = Math.floor(seconds % 60); minutes = minutes < 10 ? "0" + minutes : minutes; seconds = seconds < 10 ? "0" + seconds : seconds; return minutes + ":" + seconds;}function toggleMute() {if (isMuted) { audioElement.volume = volumeSlider.value; volumeIcon.className = "fas fa-volume-up icon";} else { audioElement.volume = 0; volumeIcon.className = "fas fa-volume-mute icon";}isMuted = !isMuted;}volumeIcon.addEventListener("click", toggleMute);volumeSlider.addEventListener("input", function () {if (isMuted && volumeSlider.value > 0) { toggleMute();}audioElement.volume = volumeSlider.value;});document.addEventListener("keydown", function (e) { if ( e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.shiftKey && e.key === "C") || (e.ctrlKey && e.key === "u") || (e.ctrlKey && e.key === "s") || (e.ctrlKey && e.key === "p") || (e.ctrlKey && e.key === "g") || (e.ctrlKey && e.key === "f") || (e.ctrlKey && e.key === "o") || (e.ctrlKey && e.key === "j") || (e.ctrlKey && e.key === "h") || (e.ctrlKey && e.key === "d") || (e.ctrlKey && e.key === "+") || (e.ctrlKey && e.key === "-") ) { e.preventDefault(); }});(function () { let SSWZ = function () { this.keyScrollHandler = function (e) { if (e.ctrlKey) { e.preventDefault(); return false; } }; }; if (window === top) { let sswz = new SSWZ(); window.addEventListener("wheel", sswz.keyScrollHandler, { passive: false }); }})();document.addEventListener("contextmenu", function (e) { e.preventDefault();});function play(songName) { const foundSong = Audios.find((audio) => audio.title.toLowerCase() === songName.toLowerCase()); if (foundSong) { const foundIndex = Audios.indexOf(foundSong); currentAudioIndex = foundIndex; resetShufflePool(currentAudioIndex); audioElement.src = foundSong.file; currentSongElement.textContent = foundSong.title; audioElement.load(); audioElement.play(); playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; console.log(`Now Playing: ${foundSong.title}`); return true; } else { console.log(`Song ${songName} not found.`); return false; }}Object.defineProperty(window, 'audioElement', { value: document.getElementById('audio-element'), writable: false});
