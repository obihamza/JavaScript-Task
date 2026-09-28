export const students = [
    { id: 1, name: "Ahmed", grades: [80, 85, 90] },
    { id: 2, name: "Ali", grades: [70, 75, 80] },
    { id: 3, name: "Omar", grades: [90, 95, 88] },
    { id: 4, name: "Hamza", grades: [85, 90, 92] },
    { id: 5, name: "Yousef", grades: [60, 70, 75] }
];

export function getStudentById(id) {
    return students.find(student => student.id === id);
}

export default students;
