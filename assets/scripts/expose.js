window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementById('horn-select');
  const imageHorn = document.querySelector('section img');

  const sliderVolume = document.getElementById('volume');
  const imageVolume = document.querySelector('#volume-controls img');

  const buttonPlay = document.querySelector('button');

  const audioElement = document.querySelector('audio');

  const confettiEffect = new JSConfetti();

  selectHorn.addEventListener('change', changeHorn);

  sliderVolume.addEventListener('input', changeVolume);

  buttonPlay.addEventListener('click', playAudio);

  function changeHorn(event) {
    const selectedHorn = event.target.value;

    switch (selectedHorn) {
      case 'air-horn':
        imageHorn.src = 'assets/images/air-horn.svg';
        audioElement.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        imageHorn.src = 'assets/images/car-horn.svg';
        audioElement.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        imageHorn.src = 'assets/images/party-horn.svg';
        audioElement.src = 'assets/audio/party-horn.mp3';
        break;
      default:
        break;
    }
  }

  function changeVolume(event) {
    const currentVolume = event.target.value;

    if (currentVolume == 0) {
      imageVolume.src = 'assets/icons/volume-level-0.svg';
    } else if (currentVolume < 33) {
      imageVolume.src = 'assets/icons/volume-level-1.svg';
    } else if (currentVolume < 67) {
      imageVolume.src = 'assets/icons/volume-level-2.svg';
    } else {
      imageVolume.src = 'assets/icons/volume-level-3.svg';
    }
    audioElement.volume = currentVolume / 100;
  }

  function playAudio(event) {
    event.preventDefault();
    audioElement.play();
    if (selectHorn.value === 'party-horn') {
      confettiEffect.addConfetti()
    }
  }
}


