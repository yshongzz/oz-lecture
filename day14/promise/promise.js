//생성자는 day11 person참고 하기
//new는 생성자(construct)로 새 객체를 만들어줌

// const promise = new Promise((resolve, reject) => {
//   //   console.log("promise!!");
// });
// promise.then((result) => console.log(result));

// 기본형태//
const promise = new Promise((resolve) => {
  // console.log("Promise 영역");
  setTimeout(() => {
    // console.log("3초 지남");
    let promisResult = "작업성공!";
    resolve(promisResult);
  }, 3000);
});

promise
  .then((result) => {
    // console.log("then 영역");
    // console.log(result);
  })
  .catch((err) => {
    // console.log("catch 영역");
    // console.log(err);
  });

// Promise.all 병렬처리
const p1 = new Promise((resolve) => setTimeout(() => resolve("작업1"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("작업2"), 2000));
Promise.all([p1, p2]).then((results) => console.log(results));
