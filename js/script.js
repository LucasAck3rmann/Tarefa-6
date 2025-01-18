const tasks = [];

function addTask(name) {
  const task = {
    name,
    createdAt: new Date(),
    completed: false,
  };
  tasks.push(task);
  renderTasks();
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

//renderizar as tarefas na lista
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;
//htmlinto
    li.innerHTML = `
            <span>${task.name}</span>
            <span class="created-at">${task.createdAt.toLocaleString()}</span>
            <button onclick="toggleTaskCompletion(${index})">${
      task.completed ? "Desmarcar" : "Marcar"
    }</button>
          `;
    taskList.appendChild(li);
  });
}

//limpar todas
function clearAllTasks() {
  tasks.length = 0;
  renderTasks();
}

//limpar apenas as concluídas
function clearCompletedTasks() {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  tasks.push(...incompleteTasks);
  renderTasks();
}

//aiciona evento ao formulario para adicionar nova
document.getElementById("todoForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const taskName = document.getElementById("taskName").value;
  addTask(taskName);
  document.getElementById("taskName").value = "";
});