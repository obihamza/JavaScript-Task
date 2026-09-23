'use script'

// 1. Print numbers from 1 to 10 using while

let counter1 = 1;

while (counter1 <= 10) {
    console.log(counter1);
    counter1++;
}


// 2. Print each element of an array

const numbers2 = [1, 2, 3, 4, 5];

for (let index2 = 0; index2 < numbers2.length; index2++) {
    console.log(numbers2[index2]);
}


// 3. Print even numbers from 0 to 10

for (let counter3 = 0; counter3 <= 10; counter3 += 2) {
    console.log(counter3);
}


// 4. Find the sum from 1 to 10

let sum4 = 0;

for (let counter4 = 1; counter4 <= 10; counter4++) {
    sum4 += counter4;
}

console.log(sum4);


// 5. Find the largest number

const numbers5 = [1, 2, 3, 4, 5];

let largest5 = numbers5[0];

for (let index5 = 1; index5 < numbers5.length; index5++) {
    if (numbers5[index5] > largest5) {
        largest5 = numbers5[index5];
    }
}

console.log(largest5);


// 6. Find the average

const numbers6 = [1, 2, 3, 4, 5];

let sum6 = 0;

for (let index6 = 0; index6 < numbers6.length; index6++) {
    sum6 += numbers6[index6];
}

let average6 = sum6 / numbers6.length;

console.log(average6);


// 7. Find the factorial

const number7 = 5;

let factorial7 = 1;

for (let counter7 = 1; counter7 <= number7; counter7++) {
    factorial7 *= counter7;
}

console.log(factorial7);


// 8. Fibonacci sequence up to a given number

const limit8 = 10;

let first8 = 0;
let second8 = 1;

while (first8 <= limit8) {
    console.log(first8);

    let next8 = first8 + second8;
    first8 = second8;
    second8 = next8;
}


// 9. Print prime numbers up to a given number

const limit9 = 20;

for (let number9 = 2; number9 <= limit9; number9++) {

    let isPrime9 = true;

    for (let divisor9 = 2; divisor9 < number9; divisor9++) {
        if (number9 % divisor9 === 0) {
            isPrime9 = false;
            break;
        }
    }

    if (isPrime9) {
        console.log(number9);
    }
}


// 10. Print elements of a 2D array

const numbers10 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row10 = 0; row10 < numbers10.length; row10++) {

    for (let column10 = 0; column10 < numbers10[row10].length; column10++) {
        console.log(numbers10[row10][column10]);
    }
}


// 11. Print array in reverse order

const numbers11 = [1, 2, 3, 4, 5];

for (let index11 = numbers11.length - 1; index11 >= 0; index11--) {
    console.log(numbers11[index11]);
}


// 12. Print array with a specific step

const numbers12 = [1, 2, 3, 4, 5];
const step12 = 2;

for (let index12 = 0; index12 < numbers12.length; index12 += step12) {
    console.log(numbers12[index12]);
}


// 13. Find frequency of a number

const numbers13 = [1, 2, 1, 3, 2, 1];
const target13 = 1;

let frequency13 = 0;

for (let index13 = 0; index13 < numbers13.length; index13++) {
    if (numbers13[index13] === target13) {
        frequency13++;
    }
}

console.log(frequency13);


// 14. Use map()

const heros14 = [
    { name: "Iron Man", power: "Tech" },
    { name: "Spider-Man", power: "Spider abilities" },
    { name: "Thor", power: "Godly powers" },
    { name: "Hulk", power: "Super strength" }
];

const newHeros14 = heros14.map((hero14, index14) => {
    return {
        hero: hero14.name,
        power: hero14.power,
        id: index14
    };
});

console.log(newHeros14);


// 15. Use filter()

const inputWords15 = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
];

const result15 = inputWords15.filter(word15 => word15.length > 7);

console.log(result15);


// 16. Use reduce()

const numbers16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumSquaredDivisibleBy516 = numbers16.reduce((sum16, number16) => {
    if (number16 % 5 === 0) {
        return sum16 + number16 ** 2;
    }

    return sum16;
}, 0);

console.log(sumSquaredDivisibleBy516);