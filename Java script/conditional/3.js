// Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// let i = window.prompt("Enter the first number:");

// if (i <= 60) 
//     {
//     document.write("Your grade is F");
// }
// else if (i <= 70) 
//     {
//     document.write("Your grade is D");
// }
// else if (i <= 80) 
//     {
//     document.write("Your grade is C");
// }
// else if (i <= 90) 
//     {
//     document.write("Your grade is B");
// }
// else if(i <= 100)
// {
//     document.write("Your grade is A");
// }

let a = [60, 70, 80, 90, 100];

let i = window.prompt("Enter the first number:");
if (i < a[0]) 
    {
    document.write("Your grade is F");
    } else if (i < a[1]) 
    {
    document.write("Your grade is D");
    } else if (i < a[2]) 
    {
    document.write("Your grade is C");
    } else if (i < a[3]) 
    {
    document.write("Your grade is B");
    } else if (i <= a[4]) 
    {
    document.write("Your grade is A");
    } else 
    {
    document.write("Invalid score");
    }


