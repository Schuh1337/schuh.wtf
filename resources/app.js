    /* kinda useless but cool :P */
    document.addEventListener('keydown', function (e) {if ((e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) || (e.ctrlKey && e.shiftKey && e.key === 'C')) {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'u') {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 's') {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'p') {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'g') {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'f') {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'o') {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'j') {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'h') {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'd') {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === '+') {e.preventDefault();}});
    document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === '-') {e.preventDefault();}});
    (function () {let SSWZ = function () {this.keyScrollHandler = function (e) {if (e.ctrlKey) {e.preventDefault(); return false;}}}; if (window === top) {let sswz = new SSWZ(); window.addEventListener('wheel', sswz.keyScrollHandler, { passive: false });}})();
    document.addEventListener('contextmenu', function (e) {e.preventDefault();});
    /*  */
    var msg = "";
    msg = "Schuh" + msg;
    var position = 0;
    function scrolltitle() {
      document.title = msg.substring(position, msg.length) + msg.substring(0, position);
      position++;
      if (position > msg.length) position = 0;
      window.setTimeout(scrolltitle, 400);
    }
    scrolltitle();

    const popup = document.getElementById('popup');
    const popupButton = document.getElementById('popupButton');
    const popupCloseButton = document.getElementById('popupCloseButton');
    let popupVisible = false;
    popupButton.addEventListener('click', () => {
        if (!popupVisible) {
            popup.style.display = 'block';
            setTimeout(() => {
                popup.style.opacity = 1;
            }, 15);
            popupVisible = true;
        } else {
            closePopup();
        }
    });
    popupCloseButton.addEventListener('click', () => {
        closePopup();
    });
    function closePopup() {
        popup.style.opacity = 0;
        setTimeout(() => {
            popup.style.display = 'none';
        }, 400);
        popupVisible = false;
    }

    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    let isPlaying = false;

    audioPlayer.volume = 0.85;
    audioPlayer.loop = true

    playPauseButton.addEventListener('click', () => {
      if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.classList.remove('fa-pause');
        playPauseButton.classList.add('fa-play');
      } else {
        audioPlayer.play();
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');
      }
      isPlaying = !isPlaying;
    });