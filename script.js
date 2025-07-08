// MENU MOBILE
document.getElementById('menu-icon').addEventListener('click', function () {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});

// CONTAGEM REGRESSIVA
function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  const startDate = new Date("2025-07-14T18:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = startDate - now;

    if (distance <= 0) {
      countdownElement.innerText = "00:00:00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerText =
      `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

startCountdown();
