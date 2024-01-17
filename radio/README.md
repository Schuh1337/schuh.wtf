if you wanna go to a specific song (by name), paste this in console:

```let songIndex = Audios.findIndex(audio => audio.title === "songName");
currentAudioIndex = songIndex;
let selectedAudio = Audios[currentAudioIndex];
audioElement.src = selectedAudio.file;
playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
currentSongElement.textContent = selectedAudio.title;
audioElement.load();
audioElement.play();```
