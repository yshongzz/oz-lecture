let number;

while (true) {
  let input = prompt("Enter a number between 1 and 10:");
  number = Number(input);

  // 입력이 숫자가 아니거나 범위를 벗어난 경우
  if (isNaN(number) || number < 1 || number > 10) {
    console.log("Invalid input! Enter a number between 1 and 10.");
  } else {
    // 유효한 입력인 경우 별 출력 후 종료
    let stars = "";
    for (let i = 1; i < number; i++) {
      stars += "*";
    }
    console.log(stars);
    break;
  }
}

// 유효한 숫자 입력을 받을 때까지 반복하는 함수
//→ 올바른 숫자(1~10)를 입력받을 때까지 while 루프로 반복
//→ 유효한 입력을 받으면 숫자를 반환

function getValidNumber() {
  let number;

  while (true) {
    let input = prompt("Enter a number between 1 and 10:");
    number = Number(input);

    if (isNaN(number) || number < 1 || number > 10) {
      alert("Invalid input! Enter a number between 1 and 10.");
    } else {
      return number;
    }
  }
}

// 입력된 숫자만큼 별을 출력하는 함수 (for문으로 입력된 숫자만큼 별 문자열 생성 후 출력)
function printStars(count) {
  let stars = "";
  for (let i = 0; i < count; i++) {
    stars += "*";
  }
  console.log(stars);
}

// 실행 함수 (위 두 함수 조합으로 전체 로직 실행)
function run() {
  const validNumber = getValidNumber();
  printStars(validNumber);
}

// 프로그램 실행
run();
