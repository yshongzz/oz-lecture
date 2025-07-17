//이벤트 리스너 중복제거하고 다시 짠 코드

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (taskText === "") {
    alert("할일을 입력해주세요");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.textContent = taskText;

  if (priority === "high") {
    span.style.color = "red";
  }

  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.className = "delete-button";

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
    updateTaskCount();
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";

  updateTaskCount();
}
