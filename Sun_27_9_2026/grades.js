export function calculateAverage(grades) {
    return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

export function getStatus(average) {
    return average >= 50 ? "Pass" : "Fail";
}

export default calculateAverage;