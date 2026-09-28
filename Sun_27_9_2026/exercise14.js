let exercise14Tasks = JSON.parse(localStorage.getItem("exercise14Tasks")) || [];

const exercise14Input = document.getElementById("exercise14-task-input");
const exercise14AddButton = document.getElementById("exercise14-add-btn");
const exercise14TaskList = document.getElementById("exercise14-task-list");
const exercise14TaskCount = document.getElementById("exercise14-task-count");
const exercise14ClearButton = document.getElementById("exercise14-clear-btn");

function saveExercise14Tasks() {
    localStorage.setItem("exercise14Tasks", JSON.stringify(exercise14Tasks));
}

function displayExercise14Tasks() {
    exercise14TaskList.innerHTML = "";

    exercise14Tasks.forEach(function(task) {

        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <span style="text-decoration: ${task.completed ? "line-through" : "none"}">
                ${task.text}
            </span>

            <button onclick="completeExercise14Task(${task.id})">
                ${task.completed ? "Undo" : "Complete"}
            </button>

            <button onclick="deleteExercise14Task(${task.id})">
                Delete
            </button>
        `;

        exercise14TaskList.appendChild(listItem);
    });

    exercise14TaskCount.textContent = exercise14Tasks.length;
}

exercise14AddButton.addEventListener("click", function() {

    const taskText = exercise14Input.value.trim();

    if (taskText === "") {
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    exercise14Tasks.push(newTask);

    saveExercise14Tasks();

    displayExercise14Tasks();

    exercise14Input.value = "";
});

function completeExercise14Task(id) {

    const task = exercise14Tasks.find(function(task) {
        return task.id === id;
    });

    task.completed = !task.completed;

    saveExercise14Tasks();

    displayExercise14Tasks();
}

function deleteExercise14Task(id) {

    exercise14Tasks = exercise14Tasks.filter(function(task) {
        return task.id !== id;
    });

    saveExercise14Tasks();

    displayExercise14Tasks();
}

exercise14ClearButton.addEventListener("click", function() {

    exercise14Tasks = [];

    localStorage.removeItem("exercise14Tasks");

    displayExercise14Tasks();
});

displayExercise14Tasks();