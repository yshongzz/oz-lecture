//구구단 3단 코드

//함수 정의 -함수 선언문
function gugudan3() {
  for (let i = 1; i <= 9; i++) {
    console.log(`3*${i} = ${3 * i}`);
  }
}
//함수 정의 -함수 표현식
const gugudan4 = function () {
  for (let i = 1; i <= 9; i++) {
    console.log(`4*${i} = ${4 * i}`);
  }
};

//함수 정의 -화살표 함수
const gugudan5 = () => {
  for (let i = 1; i <= 9; i++) {
    console.log(`5*${i} = ${5 * i}`);
  }
};

gugudan3(); //함수 실행
gugudan4();
gugudan5();

//함수 선언문
function gugudanDeclare(num) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num}*${i} = ${num * i}`);
  }
}
// gugudanDeclare(num);

//2~9단까지 출력하는 코드
for (let i = 1; i <= 9; i++) {
  gugudanDeclare(i + 1);
}

//함수 표현식
const gugudanExpression = function (num) {
  for (let i = 1; i <= 9; i++) {
    console.log(`5*${i} = ${5 * i}`);
  }
};
// gugudanExpression(2);

//화살표 함수
const gugudanArrow = (num) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`5*${i} = ${5 * i}`);
  }
};
// gugudanArrow(2);

//숫자 계산 함수
function sum(num1, num2) {
  const sumVal = num1 + num2;
  return sumVal;
  // return num1+num2;
}
let math = 70;
let english = 90;

//합계
const totall = sum(math, english);

//
function sum(scores) {
  let sumVal = 0;
  for (const score of scores) {
    sumVal += scores;
  }
  return sumVal;
}

let math1 = 70;
let english1 = 90;
let music = 70;

const scores = [math1, english1, music];

const totall1 = sum(scores);
