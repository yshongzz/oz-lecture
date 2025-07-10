//0부터 4까지 콘솔찍는 코드
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//1부터 5까지 콘솔찍는 코드
for (let i = 1; i < 6; i++) {
  console.log(i);
}

//1부터 10까지 홀수만 찍는 코드
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

//중첩반복문  (잘 안쓰임)
for (let i = 0; i < 2; i++) {
  console.log(i);
  for (let j = 0; j < 2; j++) {
    console.log(j);
  }
}

//for문 안에 들어가는 if문
//1부터 10부터 짝수 찍기
//i는 반드시 0부터 시작해야함
for (let i = 0; i <= 10; i += 2) {
  if (i === 0) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
  // if (i === 5) break;
  if (i === 5) continue;
}

//for문과 array(배열)
let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for in 객체  =>in은 인덱스를 의미함 (키값을 찾는 것임)
for (idx in arr) {
  console.log(arr[idx]);
}

//for of 배열
for (item of arr) {
  console.log(item);
}
