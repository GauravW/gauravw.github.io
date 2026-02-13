const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const sound = document.getElementById("successSound");

let yesScale = 1;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 600 - 300;
  const y = Math.random() * 400 - 200;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
});

function goYes() {
  sound.play();
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 500);
}

function goNo() {
  window.location.href = "no.html";
}
