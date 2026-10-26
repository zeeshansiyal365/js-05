
/* Question 01: Positive, Negative, or Zero */

let num1 = Number(prompt("Q1: Enter a number:"));

let result1 = num1 > 0
    ? "Positive number"
    : num1 < 0
        ? "Negative number"
        : "Zero";

console.log("Question 01:", result1);


/* Question 02: Larger of Two Numbers */

let a = Number(prompt("Q2: Enter first number:"));
let b = Number(prompt("Q2: Enter second number:"));

let result2 = a > b
    ? `${a} is larger`
    : b > a
        ? `${b} is larger`
        : "Both numbers are equal";

console.log("Question 02:", result2);


/* Question 03: Even or Odd */

let num3 = Number(prompt("Q3: Enter a number:"));

let result3 = num3 % 2 === 0
    ? "Even number"
    : "Odd number";

console.log("Question 03:", result3);


/* Question 04: Age Group Identifier */

let age = Number(prompt("Q4: Enter your age:"));

let result4 = age < 13
    ? "Child"
    : age <= 19
        ? "Teenager"
        : age <= 59
            ? "Adult"
            : "Senior Citizen";

console.log("Question 04:", result4);


/* Question 05: Employee Bonus Calculator */

let salary = Number(prompt("Q5: Enter your salary:"));

let bonus = salary < 50000
    ? salary * 0.20
    : salary <= 100000
        ? salary * 0.10
        : 0;

console.log("Question 05: Your bonus is: $" + bonus.toFixed(2));


/* Question 06: Nested Condition for Discount */

let customerType = prompt("Q6: Enter customer type (member/non-member):")
    .toLowerCase();

let amount = Number(prompt("Q6: Enter purchase amount:"));

let discountRate = customerType === "member"
    ? amount < 100
        ? 0.05
        : amount <= 500
            ? 0.10
            : 0.20
    : customerType === "non-member"
        ? amount < 500
            ? 0.02
            : 0.05
        : -1;

let discount = discountRate >= 0
    ? amount * discountRate
    : 0;

let finalPrice = amount - discount;

console.log(
    "Question 06:",
    discountRate >= 0
        ? `Discount: $${discount.toFixed(2)}\nFinal Price: $${finalPrice.toFixed(2)}`
        : "Invalid customer type"
);


/* Question 07: Display Discount and Final Price */

let purchaseAmount = 200;
let rate = 0.10;

let discountAmount = purchaseAmount * rate;
let finalAmount = purchaseAmount - discountAmount;

console.log("Question 07: Discount: $" + discountAmount.toFixed(2));
console.log("Question 07: Final Price: $" + finalAmount.toFixed(2));


/* Question 08: Rock, Paper, Scissors Game */

let userChoice = prompt("Q8: Choose rock, paper, or scissors:")
    .toLowerCase();

let randomNumber = Math.floor(Math.random() * 3);

let computerChoice = randomNumber === 0
    ? "rock"
    : randomNumber === 1
        ? "paper"
        : "scissors";

let result8 = !["rock", "paper", "scissors"].includes(userChoice)
    ? "Invalid choice"
    : userChoice === computerChoice
        ? "It's a draw!"
        : (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        )
            ? "You win!"
            : "Computer wins!";

console.log("Question 08: You chose:", userChoice);
console.log("Computer chose:", computerChoice);
console.log("Result:", result8);


/* Question 09: Traffic Signal Action */

let color = prompt("Q9: Enter traffic light color:")
    .toLowerCase();

let result9 = color === "red"
    ? "Stop"
    : color === "yellow"
        ? "Get ready"
        : color === "green"
            ? "Go"
            : "Invalid signal";

console.log("Question 09:", result9);


/* Question 10: Largest of Three Numbers */

let x = Number(prompt("Q10: Enter first number:"));
let y = Number(prompt("Q10: Enter second number:"));
let z = Number(prompt("Q10: Enter third number:"));

let largest = x >= y && x >= z
    ? x
    : y >= x && y >= z
        ? y
        : z;

console.log("Question 10: Largest number is:", largest);


/* Question 11: Check Leap Year */

let year = Number(prompt("Q11: Enter a year:"));

let result11 = year % 400 === 0
    ? "Leap year"
    : year % 100 === 0
        ? "Not a leap year"
        : year % 4 === 0
            ? "Leap year"
            : "Not a leap year";

console.log("Question 11:", result11);


/* Question 12: Validate User Input */

let input = prompt("Q12: Enter a number:");

let result12 = input === null || input.trim() === ""
    ? "Invalid input"
    : Number.isNaN(Number(input))
        ? "Invalid input"
        : Number(input) > 0
            ? "Positive number"
            : Number(input) < 0
                ? "Negative number"
                : "Zero";

console.log("Question 12:", result12);


/* Question 13: Password Validation */

let password = prompt("Q13: Enter your password:");

let result13 = password.length < 6
    ? "Weak password"
    : password.length <= 10
        ? "Moderate password"
        : "Strong password";

console.log("Question 13:", result13);


/* Question 14: Determine a Number Type */

let num14 = Number(prompt("Q14: Enter a number:"));

let result14 = num14 % 2 === 0 && num14 % 3 === 0
    ? "Divisible by both"
    : num14 % 2 === 0
        ? "Divisible by 2"
        : num14 % 3 === 0
            ? "Divisible by 3"
            : "Not divisible by 2 or 3";

console.log("Question 14:", result14);


/* Question 15: Student Performance Evaluation */

let attendance = Number(prompt("Q15: Enter attendance percentage:"));
let marks = Number(prompt("Q15: Enter marks:"));

let result15 = attendance < 75 && marks < 40
    ? "Fail due to both"
    : attendance < 75
        ? "Poor attendance"
        : marks < 40
            ? "Fail"
            : "Pass";

console.log("Question 15:", result15);
