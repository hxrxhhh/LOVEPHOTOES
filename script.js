const proceedBtn = document.getElementById('proceedBtn');
const message = document.getElementById('message');
const jumpscareVideo = document.getElementById('jumpscareVideo');

proceedBtn.addEventListener('click', () => {
  proceedBtn.style.display = "none"; // Hide button
  message.style.display = "block";
  message.textContent = "Ready";
});

message.addEventListener('click', () => {
  if (message.textContent === "Ready") {
    message.textContent = "You really want it huh!";
    
    setTimeout(() => {
      message.style.display = "none";
      jumpscareVideo.style.display = "block";
      jumpscareVideo.play();
    }, 2000);
  }
});

// When video ends, show April Fool message
jumpscareVideo.addEventListener('ended', () => {
  jumpscareVideo.style.display = "none";
  document.body.style.backgroundColor = "black";
  alert("APRIL FOOL 2026!");
});
