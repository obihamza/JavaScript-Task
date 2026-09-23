'use script'

// 1. Create an object with name, age, and gender

const person1 = {
    name: "Adam",
    age: 25,
    gender: "male"
};

console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);


// 2. Add a new property using dot notation

const person2 = {
    name: "Adam",
    age: 25
};

person2.gender = "male";

console.log(person2);


// 3. Access a property using dot notation

const person3 = {
    name: "Adam",
    age: 25
};

console.log(person3.name);


// 1. Use forEach() to print each element

const numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach(number4 => {
    console.log(number4);
});


// 2. Sort an array of strings alphabetically

const fruits5 = ["cherry", "apple", "banana"];

fruits5.sort();

console.log(fruits5);


// 3-A. Reverse an array

const fruits6 = ["apple", "banana", "cherry"];

fruits6.reverse();

console.log(fruits6);


// 3-B. Concatenate two arrays

const array7A = [1, 2, 3];
const array7B = [4, 5, 6];

const combined7 = array7A.concat(array7B);

console.log(combined7);


// 3-C. Use slice() to extract a portion of an array

const numbers8 = [1, 2, 3, 4, 5, 6];

const sliced8 = numbers8.slice(2, 4);

console.log(sliced8);


// 3-D. Use splice() to add and remove elements

const numbers9 = [1, 2, 3, 4, 5];

numbers9.splice(3, 1);

console.log(numbers9);


// 3-E. Use indexOf() to find the index of an element

const numbers10 = [1, 2, 3, 4, 5];

const index10 = numbers10.indexOf(2);

console.log(index10);


// 3-F. Use join() to convert an array to a string

const numbers11 = [1, 2, 3, 4, 5];

const string11 = numbers11.join(",");

console.log(string11);


// 3-G. Use split() to convert a string to an array

const string12 = "1,2,3,4,5";

const array12 = string12.split(",");

console.log(array12);


// 7. Use length to find the number of elements

const numbers13 = [1, 2, 3, 4, 5];

const length13 = numbers13.length;

console.log(length13);


// 8. Use for...of to iterate through an array

const numbers14 = [1, 2, 3, 4, 5];

for (const number14 of numbers14) {
    console.log(number14);
}


// 9. Use Array.isArray() to check if an object is an array

const numbers15 = [1, 2, 3, 4, 5];

const result15 = Array.isArray(numbers15);

console.log(result15);