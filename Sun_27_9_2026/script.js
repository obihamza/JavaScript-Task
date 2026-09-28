var name = "Jone";
console.log(name);

var x = 5;

function test() {
 var x = 10;
 if (true) {
 var y = 20;
 }
 console.log(y);
}
test();
console.log(x);

// Exersice two:

function Person(name, age){
    this.name = age;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Welcome ${this.name}`);
}

function Employee(employeeId, postion){
    this.employeeId = employeeId;
    this.postion = postion;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
    console.log("Hello, I am an employee.");
};

let employee1 = new Employee(101, "Software Developer");
let employee2 = new Employee(102, "Backend Developer");
let employee3 = new Employee(103, "Frontend Developer");

employee1.greet();
employee2.greet();
employee3.greet();

let students1 = [
    "Ahmed",
    "Ali",
    "Omar",
    "Hamza",
    "Yousef"
];

let students2 = [
    "Sara",
    "Lina",
    "Maya",
    "Dana",
    "Nour"
];

let allStudents = students1.concat(students2);

allStudents.sort();
allStudents.reverse();

console.log(allStudents.includes("Hamza"));

allStudents.forEach(function(student, index) {
    console.log(index + ": " + student);
});

const students = [
    { id: 1, name: "Ahmed", grade: 85 },
    { id: 2, name: "Ali", grade: 72 },
    { id: 3, name: "Omar", grade: 91 },
    { id: 4, name: "Hamza", grade: 88 },
    { id: 5, name: "Yousef", grade: 76 }
];

students.splice(2, 0, {
    id: 51,
    name: "Khaled",
    grade: 90
});

students.splice(5, 1);

students.splice(3, 1, {
    id: 52,
    name: "Sami",
    grade: 95
});

const selectedStudents = students.slice(0, 6);

students.sort(function(a, b) {
    return a.grade - b.grade;
});

students.forEach(function(student) {
    console.log(
        student.id + " - " +
        student.name + " - " +
        student.grade
    );
});

const product = {
    id: 1,
    name: "Laptop",
    price: 899.99,
    category: "Electronics",
    available: true
};


const jsonString = JSON.stringify(product);

console.log("JSON String:");
console.log(jsonString);


const convertedProduct = JSON.parse(jsonString);

console.log("Converted Object:");
console.log(convertedProduct);


try {
    const invalidJSON = '{"id": 1, "name": "Laptop",}';

    const result = JSON.parse(invalidJSON);

    console.log(result);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}

const inventory1 = [
    { id: 1, name: "Laptop", price: 900, category: "Electronics", quantity: 10 },
    { id: 2, name: "Keyboard", price: 50, category: "Accessories", quantity: 25 },
    { id: 3, name: "Mouse", price: 30, category: "Accessories", quantity: 40 },
    { id: 4, name: "Monitor", price: 300, category: "Electronics", quantity: 15 },
    { id: 5, name: "Headphones", price: 80, category: "Audio", quantity: 20 },
    { id: 6, name: "Webcam", price: 120, category: "Electronics", quantity: 12 }
];

const inventory2 = [
    { id: 7, name: "Microphone", price: 150, category: "Audio", quantity: 8 },
    { id: 8, name: "Printer", price: 250, category: "Office", quantity: 7 },
    { id: 9, name: "USB Cable", price: 15, category: "Accessories", quantity: 50 },
    { id: 10, name: "Desk", price: 200, category: "Furniture", quantity: 5 }
];


const inventory = inventory1.concat(inventory2);

const availableCategories = [
    "Electronics",
    "Accessories",
    "Audio",
    "Office",
    "Furniture"
];

console.log(availableCategories.includes("Electronics")); // true
console.log(availableCategories.includes("Clothing"));    // false

inventory.sort(function(a, b) {
    return a.price - b.price;
});

const discontinuedIndex = inventory.findIndex(function(product) {
    return product.id === 3;
});

inventory.splice(discontinuedIndex, 1);

const firstFiveProducts = inventory.slice(0, 5);

console.log("First five products:");
console.log(firstFiveProducts);

inventory.forEach(function(product) {
    console.log(
        product.id + " - " +
        product.name + " - $" +
        product.price + " - " +
        product.category + " - Quantity: " +
        product.quantity
    );
});

const square = (number) => {
    return number * number;
};

const isEven = (number) => {
    return number % 2 === 0;
};

const products = [
    { name: "Laptop", price: 900 },
    { name: "Mouse", price: 30 },
    { name: "Keyboard", price: 50 },
    { name: "Monitor", price: 300 }
];

const prices = products.map((product) => {
    return product.price;
});

console.log(prices);

const expensiveProducts = products.filter((product) => {
    return product.price > 100;
});

console.log(expensiveProducts);

const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log(totalPrice); // 1280


const square2 = number => number * number;

const isEven2 = number => number % 2 === 0;

const prices2 = products.map(product => product.price);

const expensiveProducts2 = products.filter(product => product.price > 100);

const totalPrice2 = products.reduce((total, product) => total + product.price, 0);

const user = {
    name: "Hamza",
    email: "hamza@example.com",
    age: 22,
    address: "Amman, Jordan"
};

const { name1, email, age, address } = user;

console.log(name1);
console.log(email);
console.log(age);
console.log(address);

const { name: userName } = user;

console.log(userName);

const skills = ["JavaScript", "Java", "C++", "PHP"];

const [firstSkill, secondSkill, thirdSkill] = skills;

console.log(firstSkill);  
console.log(secondSkill); 
console.log(thirdSkill);  


const createUser = (
    name = "Unknown",
    email = "No email provided",
    age = 0,
    address = "No address provided"
) => {
    return {
        name: name,
        email: email,
        age: age,
        address: address
    };
};


const user1 = createUser(
    "Ali",
    "ali@example.com",
    30,
    "Irbid, Jordan"
);

console.log(user1);

const user2 = createUser("Omar");

console.log(user2);


const enrolledStudents1 = [
    { id: 101, name: "Ahmed" },
    { id: 102, name: "Ali" },
    { id: 103, name: "Omar" }
];

const enrolledStudents2 = [
    { id: 104, name: "Hamza" },
    { id: 105, name: "Yousef" },
    { id: 106, name: "Khaled" }
];

const combinedStudents = [
    ...enrolledStudents1,
    ...enrolledStudents2
];

console.log("All Enrolled Students:");
console.log(combinedStudents);

const calculateAverage = (...grades) => {
    const total = grades.reduce((sum, grade) => {
        return sum + grade;
    }, 0);

    return total / grades.length;
};

console.log("Average 1:", calculateAverage(80, 90, 70));
console.log("Average 2:", calculateAverage(85, 90, 95, 80));


const studentIds = [
    101,
    102,
    103,
    101,
    104,
    102,
    105
];

const uniqueStudentIds = new Set(studentIds);

console.log("Unique Student IDs:");
console.log(uniqueStudentIds);


const uniqueIdsArray = [...uniqueStudentIds];

console.log("Unique IDs Array:");
console.log(uniqueIdsArray);


const studentGrades = new Map();


studentGrades.set(101, 85);
studentGrades.set(102, 90);
studentGrades.set(103, 78);
studentGrades.set(104, 95);
studentGrades.set(105, 88);

console.log("Student Grades:");
console.log(studentGrades);


studentGrades.set(102, 93);

console.log("Updated grade for student 102:");
console.log(studentGrades.get(102));

const ahmedGrade = studentGrades.get(101);

console.log("Ahmed's grade:");
console.log(ahmedGrade);


console.log("Does student 103 exist?");
console.log(studentGrades.has(103));


studentGrades.delete(105);

console.log("Does student 105 exist after deletion?");
console.log(studentGrades.has(105));


const finalStudentData = [...studentGrades];

console.log("Final Student Data:");
console.log(finalStudentData);

finalStudentData.forEach(([studentId, grade]) => {
    console.log(
        "Student ID: " + studentId +
        " | Grade: " + grade
    );
});

const reportsContainer = document.getElementById("student-reports");

students.forEach(function(student) {

    const status = student.grade >= 50 ? "Pass" : "Fail";

    const report = `
        <div>
            <h2>${student.name}</h2>
            <p>ID: ${student.id}</p>
            <p>Grade: ${student.grade}</p>
            <p>Status: ${status}</p>
        </div>
    `;

    reportsContainer.innerHTML += report;
});


class UniversityPerson {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}


class UniversityStudent extends UniversityPerson {

    constructor(name, email, studentId) {

        super(name, email);

        this.studentId = studentId;
    }

    getInfo() {
        return `Student: ${this.name}, ID: ${this.studentId}, Email: ${this.email}`;
    }
}


class UniversityInstructor extends UniversityPerson {

    constructor(name, email, department) {

        super(name, email);

        this.department = department;
    }
}



const universityPerson1 = new UniversityPerson(
    "Ahmad",
    "ahmad@example.com"
);



const universityStudent1 = new UniversityStudent(
    "Hamza",
    "hamza@example.com",
    101
);



const universityInstructor1 = new UniversityInstructor(
    "Dr. Omar",
    "omar@university.com",
    "Computer Science"
);


console.log("Person:");
console.log(universityPerson1.getInfo());

console.log("Student:");
console.log(universityStudent1.getInfo());

console.log("Instructor:");
console.log(universityInstructor1.getInfo());