const durationInput = document.querySelector('#duration');
const durationValue = document.querySelector('#duration-value');
const durationCode = document.querySelector('#duration-code');
const toggleButton = document.querySelector('#toggle-animation');
const runner = document.querySelector('.runner');

durationInput.addEventListener('input', () => {
  const duration = `${durationInput.value}s`;
  durationValue.value = duration;
  durationCode.textContent = duration;
  runner.style.animationDuration = duration;
});

toggleButton.addEventListener('click', () => {
  const paused = runner.style.animationPlayState === 'paused';
  runner.style.animationPlayState = paused ? 'running' : 'paused';
  toggleButton.textContent = paused ? 'Pausar animação' : 'Retomar animação';
});
