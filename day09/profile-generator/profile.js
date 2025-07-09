/////////////
//변수 선언//
///////////
//<<var, let, const 실습>>
var Name = "yjseong";
let hobby = "reading";
const interest = "gaming";
const inter = { int: "coding" }; //객체(Object)생성
inter.int = "playing";

console.log(Name);
console.log(hobby);
console.log(interest);
console.log(inter);

//<<데이터 타입>>
// string 문자열
let string1 = "나는 독서를 좋아합니다.";
let string2 = "나는 게임을 좋아합니다.";

console.log(string1);
console.log(string2);

// string 문자열 연결
let string4 = "i like" + hobby + "a book";
let string3 = `i like ${interest}`;
console.log(string3);
console.log(string4);

//숫자 ::정수
let integer1 = 10;
let integer2 = 20;
let sum1 = integer1 + integer2;

console.log(sum1);

//숫자 ::실수
let float1 = 0.1;
let float2 = 0.2;

let sum2 = float1 + float2;

console.log(sum2);
console.log(+(float1 + float2).toFixed(1));
console.log(Math.round((float1 + float2) * 10) / 10);

//https://bigtop.tistory.com/47
//자바스크립트 소숫점 계산 오류
//1. 컴퓨터로 숫자를 표현하는 데에는 한계가 있고
//2. 10진수로 표현되는 소수를 2진수로 표현하려면 몇몇의 경우 무한소수가 발생하는데,
//3. 무한수를 유한하게 표현하려다 보니 미세한 값들이 초과되거나 손실되어
//4. 계산 오류가 일어난다

//해결책 (1~3)
//1) toFixed() 메서드  => 반환되는 값이 문자열이므로,
//숫자로 사용하고 싶다면 앞에 단항 연산자(덧셈 연산자)를 붙여주어야 함
//2) Math 객체의 메서드 활용 ( Math.floor, Math.ceil, Math.trunc, Math.round 등)
//3) 라이브러리 활용 :Big.js, BigNumber.js, Decimal.js mathjs

// 논리형
let x = 5;
let y = 10;

console.log(x > 4);
console.log(x > 4 && x == 10);
console.log(x > 4 || x == 10);

//null, undefined, NaN
let a = null; //null
let b; //undefined
console.log(typeof a); //object  (객체임)
console.log(typeof b); //undefined

let c = +"100";
console.log(c);

let d = +"ABC";
console.log(d); //NaN (숫자로 형변환해서 숫자 타입 값이지만 숫자가 아님)

//undefined는 변수가 초기화되지 않았거나, 객체의 속성이 존재하지 않는 등의 경우에
//자동으로 할당되는 값으로, 이때의 변수는 메모리에 존재하지만 값이 없기 때문에
//크기가 매우 작다.
//반면, null은 개발자가 의도적으로 값이 없음을 할당한 경우에 사용되는 값으로,
//이때의 변수는 빈 객체를 가리키는 객체 포인터이기 때문에 주소값을 나중에라도
//받기위해 크기가 있어 메모리를 차지하게 된다.
//NaN은 Not a Number의 약자로 숫자가 아닌 값
//즉, 값은 말도 안 되는 값

//////////////////////
///// 문자열 처리 /////
/////////////////////

//문자열 처리

//배열 리터럴
let item = ["book", "pen", "notebook", "eraser"];
console.log(item);
console.log("item[0]", item[0]);
console.log("item[1]", item[1]);
console.log("item[2]", item[2]);
console.log("item[3]", item[3]);

//객체 리터럴
let itemPrice = { book: 1000, pen: 200, notebook: 10000, eraser: 50 };
console.log("itemPrice-book", ":", itemPrice.book);
console.log("itemPrice-pen", ":", itemPrice.pen);
console.log("itemPrice-notebook", ":", itemPrice.notebook);
console.log("itemPrice-eraser", ":", itemPrice.eraser);

//이스케이프
let vv = "나는 \n창업가\n입니다";
console.log(vv);

let tt = "나는 \t창업가\t입니다";
console.log(tt);
