// Write a function that takes an array of numbers and returns the largest (without using Math.max())
const largestNum = arry => {
    let largest = 0;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] > largest) {
            largest = arry[i];
        }
    }
    console.log(largest);
}

largestNum([3, 5, 2, 8, 1]);
// => 8

// Write a function that takes an array of words and a character and returns each word that has that character present.

const lettersWithStrings = (arry, char) => {
    const result = [];
    for (let i = 0; i < arry.length; i++) {
        if (arry[i].includes(char)) {
            result.push(arry[i]);
        }
    }
    console.log(result);
}

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") 
// => ["C%4!", "Hey!"]


// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
const isDivisible = (num1, num2) => {
    console.log(num1%num2 === 0);
}

isDivisible(4, 2)
// => true
isDivisible(9, 3)
// => true
isDivisible(15, 4)
// => false