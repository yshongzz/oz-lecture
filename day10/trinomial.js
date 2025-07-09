//삼항연산자
let score = 90;
let grade = score >= 90 ? "A+" : "A"; //if문을 간단하게 표현가능함
console.log(grade);

let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log(isMathLowAvg);

let isEnglishLowAvg = english < avg;
console.log(isEnglishLowAvg);

let AvgMathGrade = isMathLowAvg ? "수학점수 평균 이하" : "수학점수 평균 이상";
console.log(AvgMathGrade);
