const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const listTasks = document.querySelector(".listTasks");

let tasks = [];
let taskIdCounter = 0;

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const task = {
    task_id: taskIdCounter++,
    text: taskText,
    done: false,
  };

  tasks.push(task);
  displayTask(task);
  taskInput.value = "";
}

function displayTask(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "taskItem";
  taskDiv.setAttribute("data-task-id", task.task_id);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => doneTask(task.task_id, checkbox));

  const label = document.createElement("span");
  label.className = "taskText";
  label.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
  deleteBtn.addEventListener("click", () => deleteTask(task.task_id));

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);
  taskDiv.appendChild(deleteBtn);

  listTasks.appendChild(taskDiv);
}

function doneTask(task_id, checkbox) {
  const task = tasks.find(t => t.task_id === task_id);
  task.done = checkbox.checked;

  const taskDiv = document.querySelector(`[data-task-id="${task_id}"]`);
  const label = taskDiv.querySelector(".taskText");

  if (task.done) {
    label.classList.add("done");
  } else {
    label.classList.remove("done");
  }
}

function deleteTask(task_id) {
  tasks = tasks.filter(t => t.task_id !== task_id);
  const taskDiv = document.querySelector(`[data-task-id="${task_id}"]`);
  taskDiv.remove();
}

