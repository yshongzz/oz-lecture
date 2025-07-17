// 과제:
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();

  // 입력값이 비어있는지 확인 (유효성 검증) early-return;
  //   console.log(taskText);
  if (taskText === "") {
    alert("할일을 입력해주세요");
    return;
  }

  // 새로운 리스트 아이템 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // 할 일 텍스트 추가
  const span = document.createElement("span");
  span.textContent = taskText;

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.className = "delete-button";

  // 삭제 버튼 이벤트 리스너
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // 완료 상태 토글 이벤트 리스너
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // 요소 조립
  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // 입력창 초기화
  taskInput.value = "";
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
  taskList.innerHTML = "";
}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
}); //  강사님은 인라인으로 html에 작성함

////////////////////////////////////////////////////////////////////////////
//<이벤트 타입> :
//keypress는 "실제로 어떤 값이 입력되는지 "에 대한 관심이 있음
//keydown, keyup은 "물리적으로 어떤 키를 눌렀는지"에 관심이 있음
//--> 위의 특성에 따라 keypress 는 'a'가 입력될때와 'A'가 입력될때 keyCode가 다름
//--> keydown, keyup 은 a'가 입력되는 상황과 'A'가 입력되는 상황에 대해 동일한 keyCode를 반환함
//https://goodteacher.tistory.com/603
////////////////////////////////////////////////////////////////////////////

// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener("click", clearAllTasks);
