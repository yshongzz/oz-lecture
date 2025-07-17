// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");
const taskCount = document.getElementById("taskCount");
const prioritySelect = document.getElementById("priority");

// 할 일 개수 업데이트 함수
function updateTaskCount() {
  const count = taskList.querySelectorAll("li").length;
  taskCount.textContent = `현재 할 일: ${count}개`;
}

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (taskText === "") {
    alert("할일을 입력해주세요");
    return;
  }

  // 리스트 아이템 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // 할 일 텍스트 span 생성
  const span = document.createElement("span");
  span.textContent = taskText;

  // 높은 우선순위면 빨간색으로 표시
  if (priority === "high") {
    span.style.color = "red";
  }

  // 완료 토글 기능
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.className = "delete-button";

  // 삭제 버튼 클릭 시 해당 할 일 삭제
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
    updateTaskCount();
  });

  // 요소 조립
  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // 입력창 초기화
  taskInput.value = "";

  // 개수 업데이트
  updateTaskCount();

  // querySelectorAll로 모든 삭제 버튼에 이벤트 리스너 재적용
  const deleteButtons = taskList.querySelectorAll(".delete-button");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const parentLi = button.parentElement;
      taskList.removeChild(parentLi);
      updateTaskCount();
    });
  });
}
//--> 이미 삭제 버튼에 이벤트 리스너가 등록됐는데 또 다시 등록하면서 중복 등록이 생기고,
//  결국 한 번 삭제된 li를 또 삭제하려 해서 에러가 남
//이미 삭제 버튼을 만들 때 바로 이벤트를 붙이고 있기 때문에 중복으로 또 붙일 필요가 없음
// 위 코드는 삭제해도 됨

// 모든 할 일 삭제 함수
function clearAllTasks() {
  taskList.innerHTML = "";
  updateTaskCount();
}

// 추가 버튼 클릭 이벤트
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 입력 처리
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// 전체 삭제 버튼 이벤트
clearButton.addEventListener("click", clearAllTasks);
