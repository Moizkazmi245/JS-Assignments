// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.  

var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var result = document.querySelector('#result')

function addNumbers() {
    var total = +num1.value + +num2.value;
    console.log(total);

    result.innerHTML = "the sum of 2 numbers is " + total;
    
}

// 2. Repeat task1 for subtraction, multiplication, division & 
// modulus. 

var number1 = document.querySelector('#number1');
var number2 = document.querySelector('#number2');
var showResult = document.querySelector('#showResult')

function finalResult() {
    var multiplication = +number1.value * +number2.value;
    console.log(multiplication);
    var subtraction = +number1.value - +number2.value;
    console.log(subtraction);
    var division = +number1.value / +number2.value;
    console.log(division);

    showResult.innerHTML = "Multiplication result is: " + multiplication + "<br>" +
    "Subtraction result is: " + subtraction + "<br>" +
    "Division result is: " + division;
    
}


// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial 
// value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value 
// after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value 
// Page 1 of 9 
// MATH EXPRESSIONS | JAVASCRIPT 
// after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value 
// after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value 
// by 3.  
// l. Output : “The remainder is : 0”. 

function Show(){

var myVar;

document.getElementById('output').innerHTML = "Value after variable declaration is: " + myVar + "<br>";

myVar = 5;

document.getElementById('output').innerHTML += "Initial value: " + myVar + "<br>";

myVar++;

document.getElementById('output').innerHTML += "Value after increment is: " + myVar + "<br>";

myVar += 7;

document.getElementById('output').innerHTML += "Value after addition is: " + myVar + "<br>";

myVar--;

document.getElementById('output').innerHTML += "Value after decrement is: " + myVar + "<br>";

var remainder = myVar % 3;

document.getElementById('output').innerHTML += "The remainder is: " + remainder;
}


// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets

var totalPrice = document.querySelector('#totalPrice');
var number3 = document.querySelector('#number3')
var price = 600;

function totalPriceofTicket() {
    var totalPriceTicket = +price * +number3.value

    totalPrice.innerHTML = "The total amount is " + totalPriceTicket + " PKR";
}


// 5. Write a script to display multiplication table of any 
// number in your browser.

function generateTable() {
    var num = document.querySelector('#number').value; 
    var tableDiv = document.querySelector('#table');  
    
    
    var tableHTML = `
        <ul>
            <li>${num} x 1 = ${num * 1}</li>
            <li>${num} x 2 = ${num * 2}</li>
            <li>${num} x 3 = ${num * 3}</li>
            <li>${num} x 4 = ${num * 4}</li>
            <li>${num} x 5 = ${num * 5}</li>
            <li>${num} x 6 = ${num * 6}</li>
            <li>${num} x 7 = ${num * 7}</li>
            <li>${num} x 8 = ${num * 8}</li>
            <li>${num} x 9 = ${num * 9}</li>
            <li>${num} x 10 = ${num * 10}</li>
        </ul>
    `;

    tableDiv.innerHTML = tableHTML; 
}