function inputPrompt() {
  let inputStars = prompt("출력할 별 갯수를 입력하세요");
  let input = parseInt(inputStars); //자료형을 숫자로 변경
  console.log("input :", input);
  return input;
}

while (true) {
  const input = inputPrompt();
  if (isNaN(input) || input < 0 || input > 10) {
    console.log("Invalid input! Enter a number between 1 and 10.");
  } else {
    let starPoint = "";
    for (let i = 1; i <= input; i++) {
      starPoint = "*".repeat(i);
    }
    console.log(starPoint);
    break;
  }
}
