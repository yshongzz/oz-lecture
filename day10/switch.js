let food = "melon";

switch (food) {
  case "apple":
  case "melon":
  case "banana":
  case "cherry":
    console.log("fruit");
    break;

  default:
    console.log("no fruit");
    break;
}

///////////////////////////////////

let score = 90;
let grade;
if (score >= 90 && score <= 100) {
  grade = "A++"; //콘솔 계속 찍는 것보다 아래 마지막 하나 넣는게 더 깔끔하고 좋음
}
console.log(grade);
