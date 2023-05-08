window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeakArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('section img');

  let synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voices.forEach(function(voice) {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', function() {
    const utterance = new SpeechSynthesisUtterance(textToSpeakArea.value);
    const selectedVoice = voiceSelect.value;
    const chosenVoice = voices.find(function(voice) {
      return voice.name === selectedVoice;
    });

    utterance.voice = chosenVoice;
    faceImage.src = 'assets/images/smiling-open.png';
    synth.speak(utterance);

    utterance.onend = function() {
      faceImage.src = 'assets/images/smiling.png';
    };
  });
}
