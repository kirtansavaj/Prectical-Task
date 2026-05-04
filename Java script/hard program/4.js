let a = prompt("Enter the number");
let number = parseInt(a);
let d = number;
let c = 0;

if (number > 0) {
    while (number > 0) {
        let digit = number % 10;
        c = c * 10 + digit;
        number = Math.floor(number / 10); 

    }
    // document.write("reversed number is: " + c);
    if (c === d) {
        document.write("Palindrome");
    } else {
        document.write("Not a palindrome"); 
    }
} 