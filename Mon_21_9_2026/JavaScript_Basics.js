'use script'

// Data Types and Operators

let x1 = 2;
let x2 = 3;

console.log("Cash flow ratio: ", x1 / x2);
console.log("Net income: ", x1 - x2);
console.log("Total assets: ", x1 + x2);
console.log("Net income: ", x1 * x2);
console.log("Average: ", (x1 + x2) / 2);
console.log("Discount: ", x1 - ((x1 * x2) / 100 ));
console.log("Exponential ", x1 ** x2);
console.log("Remainder ", x1 % x2);


// Strings 

let str =  "Welcome to Orange";

console.log(str.toUpperCase());
console.log(str.substring(8, 10));
console.log(str.replace("Welcome to", "Hello from"));
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.replace("Orange", '"Orange"'));
console.log(str.concat(" Jordan"));

str = "cactus";

let result = str[0] + str.slice(1).replace(str[0], "*");

console.log(result);


// Arrays

let arr = ["Coding", "Academy", "By", "Orange"];

console.log(arr.concat("Jordan"));
console.log(arr.slice(0, 2));
console.log(["Welcome", "To"].concat(arr));
console.log(arr.slice(1));
console.log(arr.join(" "));
console.log(arr);
console.log([arr[0], arr[3]]);


var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();

fruit.shift();

console.log(fruit.indexOf("orange"));

fruit.push(fruit.indexOf("orange"));

console.log(vegetables.length);

vegetables.push(vegetables.length);

var food = fruit.concat(vegetables);
console.log(food);

food.splice(4, 2);

food.reverse();

console.log(food.toString());


// Conditionals

let birthYear = 2000;

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age > 60) {
    console.log("You may join the seniors’ program.");
} else if (age > 30) {
    console.log("You are not eligible. You may join other programs.");
} else if (age >= 18) {
    console.log("You are eligible. Start your application.");
} else {
    console.log("You may join the kids' program.");
}

function switcheLetters(str){

    let res = "";

    for (let i = 0; i < str.length; i++) {

        if (str[i] === str[i].toUpperCase()) {
            res += str[i].toLowerCase();
        } else {
            res += str[i].toUpperCase();
        }
    }
    return res;
}

console.log(switcheLetters("stRInG"));

function camelCase(str) {

    let words = str.split(" ");
    let res = "";

    for (let i = 0; i < words.length; i++) {
        res += words[i][0].toUpperCase() + words[i].slice(1);
    }

    return res;
}

console.log(camelCase("Coding Academy by Orange"));

function removeElement(arr, element) {

    let index = arr.indexOf(element);

    if (index !== -1) {
        arr.splice(index, 1);
    }

    return arr;
}

console.log(removeElement(["Coding", "Academy", "By", "Orange"],"By"));

function oddOrEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(oddOrEven(6));
console.log(oddOrEven(7));

function isNumber(value) {
    return typeof(value) === "number";
}

console.log(isNumber(10));     
console.log(isNumber("Hamza"));  

function largest(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(largest(10, 20));

function triangle(a, b, c) {

    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || a === c || b === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

console.log(triangle(1, 1, 1));
console.log(triangle(1, 1, 3));
console.log(triangle(5, 4, 3)); 

function inRange(num, min, max) {
    return num >= min && num <= max;
}

console.log(inRange(100, 1, 1000));
console.log(inRange(150, 1000, 1500));

function isLeapYear(year) {

    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));


//Loops

let i = 0;

while (i < 2) {

    for (let i = 2; i <= 50; i += 2) {
        console.log(i);
    }

    i++;
}

let isDoubleLoop = false;

for (let i = 2; i <= 50; i += 2) {
        if(!isDoubleLoop && i == 50){
            isDoubleLoop = true;
            i = 2;
        }
        console.log(i);
}

isDoubleLoop = false;

for (let i = 2; i <= 50; i += 2) {
        if(!isDoubleLoop && i == 50){
            isDoubleLoop = true;
            i = 1;
        }
        console.log(i);
}

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {
        console.log("Fizz");

    } else if (i % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(i);
    }
}

function fizzBuzz(num) {

    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}

for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}

function fizzBuzzhRecursion(num) {

    if (num > 100) {
        return;
    }

    console.log(fizzBuzz(num));

    fizzBuzzhRecursion(num + 1);
}

fizzBuzzhRecursion(1);

function countChar(str, char) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }

    return count;
}

console.log(countChar("Coding Academy by Orange", "o"));

for (let i = 0; i <= 20; i++) {
    console.log(i);
}

for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}

for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}

for (let i = 50; i >= 20; i--) {

    if (i % 3 === 0) {
        console.log(i);
    }
}

let string = "CodingAcademy";

let array = [7, 500, "KH404", "black", 36];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let i = string.length - 1; i >= 0; i--) {
    console.log(string[i]);
}

let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];

let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    } else {
        odds.push(numbers[i]);
    }
}

console.log(evens);
console.log(odds);

let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetabless = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

let numberOfMeals = 2;

let meals = [];

while (meals.length < numberOfMeals) {

    let meal = [
        proteins[Math.floor(Math.random() * proteins.length)],
        grains[Math.floor(Math.random() * grains.length)],
        vegetables[Math.floor(Math.random() * vegetables.length)],
        beverages[Math.floor(Math.random() * beverages.length)],
        desserts[Math.floor(Math.random() * desserts.length)]
    ];

    let mealString = meal.join("|");

    let alreadyExists = false;

    for (let i = 0; i < meals.length; i++) {
        if (meals[i].join("|") === mealString) {
            alreadyExists = true;
            break;
        }
    }

    if (!alreadyExists) {
        meals.push(meal);
    }
}

console.log(meals);


// Objects

function getObject(obj) {
    return Object.keys(obj);
}

let person = {
    name: "Hamza",
    age: 22,
    city: "Amman"
};

console.log(getObject(person));

function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties(person));

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

let person1 = {
    name: "Hamza",
    age: 22
};

let person2 = {
    city: "Amman",
    job: "Developer"
};

console.log(mergeObjects(person1, person2));

function upperCaseObject(obj) {
    let newObj = {};

    for (let key in obj) {
        newObj[key] = obj[key].toUpperCase();
    }

    return newObj;
}

let person3 = {
    name: "hamza",
    city: "amman",
    job: "developer"
};

console.log(upperCaseObject(person3));

function removeNullProperties(obj) {
    let newObj = {};

    for (let key in obj) {
        if (obj[key] !== null) {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

let person4 = {
    name: "Hamza",
    age: null,
    city: "Amman",
    job: null
};

console.log(removeNullProperties(person4));

function sortProperties(obj) {
    let properties = Object.keys(obj);

    return properties.sort();
}

let person5 = {
    city: "Amman",
    name: "Hamza",
    age: 22,
    job: "Developer"
};

console.log(sortProperties(person5));