const startBtn = document.getElementById('startBtn');
const readyBtn = document.getElementById('readyBtn');
const mainDiv = document.getElementById('main');
const confirmDiv = document.getElementById('confirmScreen');
const jumpscareDiv = document.getElementById('jumpscare');
const finalMessage = document.getElementById('finalMessage');
const scareSound = document.getElementById('scareSound');

startBtn.onclick = () => {
  mainDiv.classList.add('hidden');
  confirmDiv.classList.remove('hidden');
};

readyBtn.onclick = () => {
  confirmDiv.classList.add('hidden');
  jumpscareDiv.classList.remove('hidden');
  scareSound.play();

  setTimeout(() => {
    jumpscareDiv.classList.add('hidden');
    finalMessage.classList.remove('hidden');
  }, 3000);
};