
  // Select all buttons with the class 'btn-warning'
  document.querySelectorAll('.btn-warning').forEach(button => {
    button.addEventListener('click', () => {
      // Play the sound
      const clickSound = document.getElementById('click-sound');
      clickSound.currentTime = 0; // Reset sound to start
      clickSound.play();

      // Add the animation class
      button.classList.add('btn-click-animation');
      button.addEventListener('animationend', () => {
        button.classList.remove('btn-click-animation');
      }, { once: true });
    });
  });

