// //비동기 개념//
// //setTimeout (2000)은 2초 뒤에 실행

// console.log("이미지 로딩 시작");
// // console.log("이미지 로딩");
// setTimeout(() => {
//   console.log("이미지 로딩");
// }, 2000);

// console.log("다른 작업 수행");

//콜백함수//
// function sayHello(name, callback) {
//   console.log(`안녕, ${name}`);
//   callback();
// } //정의부라서 실행이 안됨

function sayHello(name, callback) {
  console.log(`안녕, ${name}`);
  setTimeout(() => {
    callback();
  }, 2000);
}

sayHello("학생", () => {
  console.log("콜백 실행");
}); //여기서 실행

//같은 결과로 ...
function sayHello2(name) {
  console.log(`[2]안녕, ${name}`);
}
sayHello2("학생");
