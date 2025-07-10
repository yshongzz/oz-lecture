let inputStr = prompt("점수를 입력하세요");
// console.log(inputStr);
let input = parseInt(inputStr); //자료형을 숫자로 변경
console.log("1)Please write your score :", input);

const MAX_SCORE = 105;
let score;
let grade;
let message;

//최종점수 계산 (5점 추가)
input += 5; //let은 재할당 가능 (재선언은 불가)
console.log("2)Add up 5 bonus points :", input);

/////////////////////////
//등급 결정 (if문으로만)//
////////////////////////

if (input >= 60) {
  score = "Pass";
  if (input >= 100) {
    grade = "S";
    message = "Super!!"; //2개 이상의 일을 처리하는 경우 { }블록으로 처리 꼭해줘야함
  } else if (input >= 90 && input < 100) {
    grade = "A";
    message = "Excellent work!";
  } else if (input >= 80 && input < 90) {
    grade = "B";
    message = "Good job!";
  } else if (input >= 70 && input < 80) {
    grade = "C";
    message = "Satisfactory performance.";
  } else if (input >= 60 && input < 70) {
    grade = "D";
    message = "Needs improvement";
  }
} else {
  grade = "F";
  message = "Please try harder!";
  score = "Fail";
}
console.log("3)your grade :", grade);
console.log("4)Pass or not : ", score);
console.log("5)Message by grade : ", message);

//입력 유효성 검사
if (isNaN(inputStr) || inputStr < 0 || inputStr > 100) {
  console.log(
    "6)valid : Invalid score! Please enter a number between 0 and 100."
  );
}

console.log("-------------------------------------------------------");

//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////////////
//if -> 삼항연산자 -> switch문//
//////////////////////////////

let inputStr1 = prompt("점수를 입력하세요");
let input1 = parseInt(inputStr1);

const MAX_SCORE1 = 105;
let score1;
let grade1;
let message1;

//최종점수 계산 (5점 추가)
input1 += 5; //let은 재할당 가능 (재선언은 불가)
console.log(`Final Score: ${input1}`);

//if -> 삼항연산자 -> switch문//

//등급 결정 (if문)
if (input1 >= 100) {
  grade1 = "S";
} else if (input1 >= 90 && input1 < 100) {
  grade1 = "A";
} else if (input1 >= 80 && input1 < 90) {
  grade1 = "B";
} else if (input1 >= 70 && input1 < 80) {
  grade1 = "C";
} else if (input1 >= 60 && input1 < 70) {
  grade1 = "D";
} else {
  grade1 = "F";
}
console.log(`Grade: ${grade1}`);

//합격/불합격 여부 결정 (삼항연산자)
const PassOrNot1 = input1 >= 60 ? "PaSS " : "Fail";
console.log(`Status: ${PassOrNot1}`);

// 등급에 따른 메세지 console.log 출력 ( switch문)
switch (grade1) {
  case "S":
    console.log("Message: Message: Super!!");
    break;
  case "A":
    console.log("Message: Excellent work!");
    break;
  case "B":
    console.log("Message: Good job!");
    break;
  case "C":
    console.log("Message: Satisfactory performance.");
    break;
  case "D":
    console.log("Message: Needs improvement.");
    break;
  case "F":
    console.log("Message: Please try harder!");
    break;

  default:
    break;
}

//입력 유효성 검사
if (isNaN(inputStr1) || inputStr1 < 0 || inputStr1 > 100) {
  console.log("Invalid score! Please enter a number between 0 and 100.");
}
