// Find factorial using recursion

function factorial(n) {
    if (n === 0 || n === 1) 
    {
        return 1;
    } else 
    {
        return n * factorial(n - 1);
    }
}

let n = parseInt(prompt("Enter the number:"));
let fact = factorial(n);
document.write("Factorial of " + n + " is: " + fact);