function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = parseInt(prompt("Enter the number:"));

for (let i = 0; i < n; i++) {
    document.write(fibonacci(i));
    document.write("<br>");
}