const taskInput = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.add-task');
const taskList = document.querySelector('.task-list');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const now = new Date();
        const dateTime = now.toLocaleString();

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="date-time">${dateTime}</span>
            <button class="complete">Complete</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';

        listItem.querySelector('.complete').addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        listItem.querySelector('.edit').addEventListener('click', () => {
            const currentText = listItem.querySelector('.task-text').textContent;
            const newText = prompt('Edit task:', currentText);
            if (newText) {
                listItem.querySelector('.task-text').textContent = newText;
            }
        });

        listItem.querySelector('.delete').addEventListener('click', () => {
            listItem.remove();
        });
    }
}