let n = parseInt(prompt("Enter the number:"));
let n1 = 0;
let n2 = 1;
for (let i = 0; i < n; i++) 
{
    document.write(n1);
    document.write("</br>");
  let a = n1 + n2;
  n1 = n2;
  n2 = a;
}