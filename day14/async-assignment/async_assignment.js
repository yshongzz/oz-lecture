// DOM 요소 선택
const timerInput = document.getElementById("timerInput");
const timerDisplay = document.getElementById("timerDisplay");
const timerButton = document.getElementById("startTimer");

const MAX_TIME = 10;
let timerCount;
let timerMessage;
//시작버튼
timerButton.addEventListener("click", function () {
  const input = timerInput.value;
  const seconds = Number(input);

  if (isNaN(seconds) || seconds < 1 || seconds > MAX_TIME) {
    displayError("유효한 숫자(1-10)를 입력하세요!");
    return;
  }
  startTimer(seconds);
});

//https://hianna.tistory.com/477  :: .disabled = true 설명
startTimer = (seconds = 10) => {
  let currentTime = seconds;

  timerButton.disabled = true; //비활성화
  timerDisplay.classList.remove("error");
  timerDisplay.textContent = `타이머: ${currentTime}초`;

  timerCount = setInterval(function () {
    currentTime--;
    if (currentTime > 0) {
      timerDisplay.textContent = `타이머: ${currentTime}초`;
    } else {
      clearInterval(timerCount);
      timerMessage = "타이머 종료";
      timerDisplay.textContent = timerMessage;
      timerButton.disabled = false; //활성화
    }
  }, 1000);
};

displayError = (message) => {
  timerDisplay.textContent = message;
  timerDisplay.classList.add("error");
};
