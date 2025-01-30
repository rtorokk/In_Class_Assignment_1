// Task 1

let expenses = 5000; // Declare variable

if (expenses> 7000) {
    console.log("High expenses");
    // if expenses are greater than 7000 -> High
} else {
    // if expenses are less than 7000 -> Manageable
    console.log("Manageable expenses");
} 


// Task 2

for(let i = 10; i >= 1; i--) {
    console.log(i);   
}


// Task 3

let num = 2;
while (num <= 10) {
    console.log(num);
    num += 2;
}


// Task 4

function calculateSquare(amount) {
    return amount * amount;
}
console.log(calculateSquare(5)); // Outputs: 25


// Task 5

const doubleNumber = num => num * 2;
console.log(doubleNumber(5)); // Outputs: 10


// Task 6

const numbers = [3, 6, 9,];// Declare an array
const doubleNumbers = numbers.map(num => num * 2);// Use map to double each number in the array
console.log(doubleNumbers); // Outputs: [6, 12, 18]


