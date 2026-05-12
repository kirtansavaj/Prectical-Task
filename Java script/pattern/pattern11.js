//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI
//  ABCDEFG
//   ABCDE
//    ABC
//     A

for (let i = 1; i <= 5; i++) 
    {
    for (let j = 5; i <= j - 1; j--) 
        {
        document.write("&nbsp;");
        document.write("&nbsp;");
    }
    for (let k = 1; k <= (2 *i) - 1; k++) 
        {
        document.write(String.fromCharCode(k + 64));
    }
    // for (let k = 2; k <= i; k++) {
    //     document.write("*");
    // }
    document.write("<br>");
}
for (let i = 4; i >= 1; i--) 
    {
    for (let j = 1; j <= 5 - i; j++) 
        {
        document.write("&nbsp;");
        document.write("&nbsp;");
    }
    for (let j = 1; j <= (2 * i) - 1; j++) 
        {
        document.write(String.fromCharCode(j+64));
    }
    document.write("<br>");
}