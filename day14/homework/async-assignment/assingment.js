const MAX_TIME = 10;
let timerCount;
var timerMessage;

document.getElementById("startTimer").addEventListener("click", function () {
  const input = document.getElementById("timerInput").value;
  const seconds = Number(input);

  if (isNaN(seconds) || seconds < 1 || seconds > MAX_TIME) {
    displayError("유효한 숫자(1-10)를 입력하세요!");
    return;
  }

  startTimer(seconds);
});

function startTimer(seconds = 10) {
  let currentTime = seconds;
  const display = document.getElementById("timerDisplay");
  const button = document.getElementById("startTimer");

  button.disabled = true;
  display.classList.remove("error");
  display.textContent = `타이머: ${currentTime}초`;

  timerCount = setInterval(function () {
    currentTime--;
    if (currentTime > 0) {
      display.textContent = `타이머: ${currentTime}초`;
    } else {
      clearInterval(timerCount);
      timerMessage = "타이머 종료!";
      display.textContent = timerMessage;
      button.disabled = false;
    }
  }, 1000);
}

function displayError(message) {
  const display = document.getElementById("timerDisplay");
  display.textContent = message;
  display.classList.add("error");
}
