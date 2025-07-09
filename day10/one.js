//후치연산
let increment = 10;
console.log("1", increment);

increment++;
console.log("2", increment);
console.log("3", increment++); //11 :inc을 증가 시키고 콘솔 찍음
console.log("4", increment);

let decrement = 10;
console.log("dec1", decrement);
decrement--;
console.log("dec2", decrement);
console.log("dec3", decrement--);
console.log("dec4", decrement);

//전치연산
let incFirest = 10;
console.log("incFirest1", incFirest);
++incFirest;
console.log("incFirest2", incFirest);
console.log("incFirest3", ++incFirest); //결과:12 =>incFirest을 콘솔에 올리기 전에 1 증가 하고 콘솔 찍음
console.log("incFirest4", incFirest);

let decFirest = 10;
console.log("decFirest1", decFirest);
++decFirest;
console.log("decFirest2", decFirest);
console.log("decFirest3", ++decFirest);
console.log("decFirest4", decFirest);

//let c = c++; //불가능

//단항 부정 연산자
let num = -10;
num = -num;
console.log(num);

let num2 = 10;
num2 = -num2;
console.log(num2);

let num3 = 10;
-num3; //결과: 10 =>num3에 값을 할당하지 않았기 때문에 -을 붙여도 값은 변하지 않음
console.log(num3);
