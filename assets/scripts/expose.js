// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Select horn -> correct image and audio
  const selectElement = document.getElementById('horn-select');
  const audio = document.getElementsByClassName("hidden")[0];
  var horn;
  selectElement.addEventListener("change", (event) => {
    const result = document.querySelector("img");
    result.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
    horn = `${event.target.value}`;
  }); 

  //Change volume slider changes volume icon and audio volume
  const slider = document.getElementById('volume');
  const soundIcon = document.getElementById('volume-controls').querySelector('img');
  // const audio = document.querySelector("audio");
  slider.addEventListener('input', function() {
    const volumeValue = slider.value; 
    if (volumeValue == 0) {
      soundIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      soundIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      soundIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      soundIcon.src = 'assets/icons/volume-level-3.svg';
    }
    //audio volume
    audio.volume = volumeValue/100;
  });

  //clicking the button, cofetti if party horn
  const button = document.querySelector("button");
  const confetti = new JSConfetti();
  button.addEventListener("click", function() {
    if(horn == 'party-horn')
      confetti.addConfetti();
    audio.play();
  });
}
