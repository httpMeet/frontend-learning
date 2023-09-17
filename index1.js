let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function plus(){
let sum1 = num1 + num2 
sum.textContent = "sum:" + sum1
}
function minus(){
let sum1 = num1 - num2 
sum.textContent = "sum:" + sum1
}
function divide(){
    let sum1 = num1 / num2 
sum.textContent = "sum:" + sum1
}
function multiply(){
    let sum1 = num1 * num2 
sum.textContent = "sum:" + sum1
}


