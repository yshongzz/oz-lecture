let food = "banana";

switch (food) {
  case "apple":
  case "banana":
  case "cherry":
  case "melon":
    console.log("fruit");
    break;

  default:
    console.log("not food");
    break;
}

////////////////////////

let score = 90;
let grade;
if (score >= 90 && score <= 100) {
  grade = "A++"; //콘솔 계속 찍는 것보다 아래 마지막 하나 넣는게 더 깔끔하고 좋음
}

console.log("grade", grade);
