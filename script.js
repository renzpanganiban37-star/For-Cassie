const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

yesBtn.onclick = () => {
  typeMessage("I'm really sorry adi pinagisip kita, I'm sorry kasi i made you feel unimportant and neglected that was never my intention po, you mean a lot to me sobra.

Adi you are so precius, you are valued and loved by me okay, You make my life bearable and Genuinely happy by giving this opportunity to pursue you, lalo na siguro pag tayo na I will be the most happy person in the world😊🩵  ");

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
