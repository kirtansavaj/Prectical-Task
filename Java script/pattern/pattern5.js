
//    *
//   ***
//  *****
// *******
// *********
//  *******
//   *****
//    ***
//     *


// document.write("<pre>")

// for(let i = 1; i <= 9; i++);
// {
//     for (let j = 1; j >= 9; j++)
//     {
//         document.write("*");
//     }
//     document.write("<br>");
// }






document.write("<pre>")
for (let i = 1; i <= 5; i++) {
    for (let j = 5; i <= j - 1; j--) {
        document.write("&nbsp;");
    }

    for (let k = 1; k <= i; k++) {
        document.write("*");
    }
    for (let k = 2; k <= i; k++) {
        document.write("*");
    }
    document.write("<br>");
}
for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= 5 - i; j++) {
        document.write("&nbsp;");
    }
    for (let j = 1; j <= (2 * i) - 1; j++) {
        document.write("*");
    }
    document.write("<br>");
    console.log(i);
}
document.write("<pre>")


// document.write("<pre>");
// for (let i = 1; i <= 5; i++)
//     {
//     for (let j = 5; j > i; j--)
//         {
//         document.write("&nbsp;");
//         // document.write(65);
//     }
//     for (let k = 1; k <= (2 * i) - 1; k++)
//         {
//         document.write("65");
//     }
//     document.write("<br>");
// }
// for (let i = 4; i >= 1; i--)
//      {
//     for (let j = 5; j > i; j--)
//         {
//         document.write("&nbsp;");
//         document.write(" _ ");
//     }
//     for (let k = 1; k <= (2 * i) - 1; k++)
//         {
//         document.write("*");
//     }
//     document.write("<br>");
// }
// document.write("</pre>");