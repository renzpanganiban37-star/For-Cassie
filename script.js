const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

yesBtn.onclick = () => {
  message.innerHTML = "Yay! 💖 I love you!";
  music.play();
};

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 300 + "px";
  noBtn.style.left = Math.random() * 300 + "px";
};
