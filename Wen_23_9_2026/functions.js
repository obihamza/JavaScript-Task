'use script'

// 1. Find the smallest value in an array

function findSmallest1(numbers1) {
    let smallest1 = numbers1[0];

    for (let index1 = 1; index1 < numbers1.length; index1++) {
        if (numbers1[index1] < smallest1) {
            smallest1 = numbers1[index1];
        }
    }

    return smallest1;
}

console.log(findSmallest1([30, 45, 60, 7]));


// 2. Return a string in alphabetical order

function alphabeticalOrder2(string2) {
    return string2.split("").sort().join("");
}

console.log(alphabeticalOrder2("hello"));


// 3. Factorial

function factorial3(number3) {
    let result3 = 1;

    for (let counter3 = 1; counter3 <= number3; counter3++) {
        result3 *= counter3;
    }

    return result3;
}

console.log(factorial3(8));


// 4. Check if a number is Even or Odd

function oddOrEven4(number4) {
    if (number4 % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(oddOrEven4(9));


// 5. Add up numbers from n back to 0

function addUp5(number5) {
    let sum5 = 0;

    for (let counter5 = number5; counter5 >= 0; counter5--) {
        sum5 += counter5;
    }

    return sum5;
}

console.log(addUp5(8));


// 6. Get lowest, highest, length and average

function minMaxLengthAverage6(numbers6) {
    let lowest6 = numbers6[0];
    let highest6 = numbers6[0];
    let sum6 = 0;

    for (let index6 = 0; index6 < numbers6.length; index6++) {

        if (numbers6[index6] < lowest6) {
            lowest6 = numbers6[index6];
        }

        if (numbers6[index6] > highest6) {
            highest6 = numbers6[index6];
        }

        sum6 += numbers6[index6];
    }

    let length6 = numbers6.length;
    let average6 = sum6 / length6;

    return [lowest6, highest6, length6, average6];
}

console.log(minMaxLengthAverage6([7, 13, 3, 77, 100]));


// 7. Count how many words were given

function countWords7(sentence7) {
    return sentence7.split(" ").length;
}

console.log(countWords7("hello from CodingAcademy!"));


// 8. Multiply all elements by the array length

function multiplyByLength8(numbers8) {
    let result8 = [];

    for (let index8 = 0; index8 < numbers8.length; index8++) {
        result8.push(numbers8[index8] * numbers8.length);
    }

    return result8;
}

console.log(multiplyByLength8([4, 2, 5]));


// 9. Check if str1 ends with str2

function checkEnding9(str1_9, str2_9) {
    return str1_9.endsWith(str2_9);
}

console.log(checkEnding9("CodingSchool", "Ac"));


// 10. Repeat each character two times

function doubleChar10(string10) {
    let result10 = "";

    for (let index10 = 0; index10 < string10.length; index10++) {
        result10 += string10[index10] + string10[index10];
    }

    return result10;
}

console.log(doubleChar10("Coding"));


// 11. Find the index of an element

function findIndex11(array11, element11) {
    for (let index11 = 0; index11 < array11.length; index11++) {
        if (array11[index11] === element11) {
            return index11;
        }
    }

    return -1;
}

console.log(
    findIndex11(
        ["Ali", "Mazen", "Ayham", "Murad"],
        "Ali"
    )
);