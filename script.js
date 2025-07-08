// MENU MOBILE
document.getElementById('menu-icon').addEventListener('click', function () {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});

// CONTAGEM REGRESSIVA
function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  const endDate = new Date("2025-07-16T23:59:59").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      countdownElement.innerText = "00:00:00";
      return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerText =
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

startCountdown();


// POP-UP DE PROVA SOCIAL
const nomes = [
  "João - BA",
  "Amanda - BA",
  "Lucas - BA",
  "Mariana - BA",
  "Felipe - BA",
  "Letícia - BA",
  "Bruno - BA",
  "Camila - BA",
  "Rafael - BA",
  "Sara - BA"
];

const mensagens = [
  "adquiriu a camisa."
];


function mostrarPopup() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const msg = mensagens[Math.floor(Math.random() * mensagens.length)];

  const popup = document.getElementById("popup-notification");
  const popupText = document.getElementById("popup-text");

  popupText.textContent = `✅ ${nome} ${msg}`;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 6000);
}

// Exibir popup a cada 15 segundos
setInterval(mostrarPopup, 15000);
