import students, { getStudentById } from "./students.js";
import calculateAverage, { getStatus } from "./grades.js";

const container = document.getElementById("student-reports");

students.forEach(student => {
    const average = calculateAverage(student.grades);
    const status = getStatus(average);

    container.innerHTML += `
        <div>
            <h2>${student.name}</h2>
            <p>ID: ${student.id}</p>
            <p>Average: ${average.toFixed(2)}</p>
            <p>Status: ${status}</p>
        </div>
    `;
});

console.log(getStudentById(3));