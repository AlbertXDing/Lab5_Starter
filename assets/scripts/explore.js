// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById("voice-select");

  //Voice selection
  speechSynthesis.addEventListener("voiceschanged", () => {
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = voices[i].name;
      option.setAttribute('data-name', voices[i].name);
      option.setAttribute('data-lang', voices[i].lang);
      voiceSelect.appendChild(option);
    }
  });

  //Press to talk -> voice
  const button = document.querySelector("button");
  const text = document.getElementById("text-to-speak");
  const face = document.querySelector("img");
  button.addEventListener("click", (event) => {
    const utterance = new SpeechSynthesisUtterance(text.value);
    const voice = speechSynthesis.getVoices().find((v) => v.name === voiceSelect.value);
    utterance.voice = voice;

    utterance.addEventListener('start', () => {
      face.src = 'assets/images/smiling-open.png';
    });
    
    utterance.addEventListener('end', () => {
      face.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterance);
  });
}


// Wait for voices to be loaded before populating voice select element

