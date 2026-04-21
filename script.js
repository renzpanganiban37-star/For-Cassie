const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

yesBtn.onclick = () => {
  typeMessage("I love you 💖");

  // 🎵 play music after click
  music.currentTime = 0;
  music.play().catch(() => {
    alert("Click again to enable music 💖");
  });
};

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function typeMessage(text) {
  message.innerHTML = "";
  let i = 0;

  const typing = setInterval(() => {
    message.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 100);
}
