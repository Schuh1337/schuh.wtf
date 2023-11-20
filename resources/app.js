document.addEventListener('keydown', function (e) {if ((e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) || (e.ctrlKey && e.shiftKey && e.key === 'C')) {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'u') {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 's') {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'p') {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'g') {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'f') {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'o') {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'j') {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'h') {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === 'd') {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === '+') {e.preventDefault();}}); document.addEventListener('keydown', function (e) {if (e.ctrlKey && e.key === '-') {e.preventDefault();}}); (function () {let SSWZ = function () {this.keyScrollHandler = function (e) {if (e.ctrlKey) {e.preventDefault(); return false;}}}; if (window === top) {let sswz = new SSWZ(); window.addEventListener('wheel', sswz.keyScrollHandler, { passive: false });}})(); document.addEventListener('contextmenu', function (e) {e.preventDefault();}); var msg = ""; msg = "Schuh" + msg; var position = 0; function scrolltitle() { document.title = msg.substring(position, msg.length) + msg.substring(0, position); position++; if (position > msg.length) position = 0; window.setTimeout(scrolltitle, 400); } scrolltitle(); const popup = document.getElementById('popup'); const popupButton = document.getElementById('popupButton'); const popupCloseButton = document.getElementById('popupCloseButton'); let popupVisible = false; popupButton.addEventListener('click', () => { if (!popupVisible) { popup.style.display = 'block'; setTimeout(() => { popup.style.opacity = 1; }, 15); popupVisible = true; } else { closePopup(); } }); popupCloseButton.addEventListener('click', () => { closePopup(); }); function closePopup() { popup.style.opacity = 0; setTimeout(() => { popup.style.display = 'none'; }, 400); popupVisible = false; } const audioPlayer = document.getElementById('audioPlayer'); const playPauseButton = document.getElementById('playPauseButton'); let isPlaying = false; audioPlayer.volume = 0.85; audioPlayer.loop = true; playPauseButton.addEventListener('click', () => { if (isPlaying) { audioPlayer.pause(); playPauseButton.classList.remove('fa-pause'); playPauseButton.classList.add('fa-play'); } else { audioPlayer.play(); playPauseButton.classList.remove('fa-play'); playPauseButton.classList.add('fa-pause'); } isPlaying = !isPlaying; });


/* onclick */

    document.addEventListener('DOMContentLoaded', function () {
      const canvas = document.getElementById('particle-canvas');
      const ctx = canvas.getContext('2d');
      const particles = [];

      window.addEventListener('click', function (e) {
        createBurst(e.x, e.y);
      });

      function createParticles(x, y) {
        const particleCount = 10;

        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: x,
            y: y,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
          });
        }
      }

      function createBurst(x, y) {
        const burstCount = 50;

        for (let i = 0; i < burstCount; i++) {
          particles.push({
            x: x,
            y: y,
            size: Math.random() * 5 + 2,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5,
          });
        }
      }

      function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
          ctx.shadowBlur = 10; 
          ctx.shadowColor = 'white';

          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

          ctx.beginPath();
          ctx.arc(
            particles[i].x,
            particles[i].y,
            particles[i].size,
            0,
            Math.PI * 2
          );
          ctx.fill();

          ctx.shadowBlur = 0;

          particles[i].x += particles[i].speedX;
          particles[i].y += particles[i].speedY;
          particles[i].size -= 0.05;

          if (particles[i].size <= 0) {
            particles.splice(i, 1);
            i--;
          }
        }

        requestAnimationFrame(animateParticles);}animateParticles();});
