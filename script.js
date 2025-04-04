const message = document.getElementById('message');
const jumpscareVideo = document.getElementById('jumpscareVideo');

setTimeout(() => {
  message.textContent = "Ready";
}, 2000);

setTimeout(() => {
  message.textContent = "You really want it huh!";
}, 4000);

setTimeout(() => {
  message.style.display = "none";
  jumpscareVideo.style.display = "block";
  jumpscareVideo.play();
}, 6000);

// When video ends, show April Fool message
jumpscareVideo.addEventListener('ended', () => {
  jumpscareVideo.style.display = "none";
  document.body.style.backgroundColor = "black";
  alert("APRIL FOOL 2026!");
});
