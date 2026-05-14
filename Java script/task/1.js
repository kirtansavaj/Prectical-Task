// Reverse a number without converting to string

let a = prompt("Enter the number");
let num = parseInt(a);
let c = 0;

if (num > 0) {
    while (num > 0) {
        let digit = num % 10;
        c = c * 10 + digit;
        num = Math.floor(num / 10); 
    }
    document.write("reversed number is: " + c);
}