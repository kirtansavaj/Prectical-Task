// let n = 9;
// for (let i = 1; i <= 5; i++)
// {
//     for ( let k = 1; k <=5-i; k++ )
//     {
//         document.write( " * ");
//     }
//     for(let j = 1; j <= n-2; j++)
//     {
//         document.write("&nbsp;&nbsp");
//     //     document.write( " * ");
//     //     // n = n-2;
//     }
//     document.write("<br>");
// }

// document.write("<pre>")
// for (let i = 1; i <= 5; i++) 
//     {
//     for (let j = 1; j < i; j++) 
//         {
//         document.write("&nbsp;");
//     }
//     for (let j = 5; j > i; j--) 
//         {
//         document.write("*");
//     }
//     for (let j = 5; j >= i; j--) 
//         {
//         document.write("*");
//     }
//     document.write("<br>");
// }
// document.write("<pre>");


document.write("<pre>")
for (let i = 1; i <= 10; i++) 
    {
    for (let j = 1; j < i; j++) 
        {
        document.write("&nbsp;");
    }
    for (let j = 9; j >= 2 * i - 1; j--) 
        {
        document.write("*");
    }
    document.write("<br>");
}
document.write("</pre>");