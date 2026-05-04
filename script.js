// script.js

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

// YES BUTTON

yesBtn.onclick = () => {

  typeMessage(`I'm really sorry, Adi. I’m sorry kung napag-isip kita at naparamdam ko sa’yo na unimportant or neglected ka. That was never my intention, and I hate knowing that I made you feel that way. You mean so much to me, sobra. 🩵

Adi, you are very precious to me. You are valued, appreciated, and deeply loved by me, okay? You make my life more bearable and genuinely happier just by being here and by giving me the chance to pursue you. And honestly, if dumating man yung time na maging tayo, I know I’d be one of the happiest people in the world. 😊🩵`);

  message.classList.add("show");

  // play music

  music.currentTime = 0;

  music.play().catch(() => {
    alert("Click again to enable music 💖");
  });

  startConfetti();
};

// NO BUTTON RUNS AWAY

noBtn.addEventListener("mouseover", () => {

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// TYPING EFFECT

function typeMessage(text){

  message.innerHTML = "";

  let i = 0;

  const typing = setInterval(() => {

    message.innerHTML += text[i];

    i++;

    if(i >= text.length){
      clearInterval(typing);
    }

  },35);
}

// FLOATING HEARTS

function createHeart(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  },6000);
}

setInterval(createHeart,400);

// CONFETTI

const canvas = document.getElementById("confetti");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function startConfetti(){

  for(let i = 0; i < 150; i++){

    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 100
    });
  }

  animateConfetti();
}

function animateConfetti(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  for(let i = 0; i < pieces.length; i++){

    let p = pieces[i];

    ctx.beginPath();

    ctx.arc(p.x,p.y,p.r,0,Math.PI*2,false);

    ctx.fillStyle = "hsl(" + Math.random()*360 + ",100%,70%)";

    ctx.fill();

    p.y += 4;

    p.x += Math.sin(p.d);

    if(p.y > canvas.height){
      p.y = -10;
    }
  }

  requestAnimationFrame(animateConfetti);
}
