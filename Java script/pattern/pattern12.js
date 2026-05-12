//     ABCDEFGHI
//      ABCDEFG
//       ABCDE
//        ABC
//         A
//        ABC
//       ABCDE
//      ABCDEFG
//     ABCDEFGHI
// for (let i = 1; i <= 5; i++) 
//     {
//     for (let j = 1; j < i; j++) 
//         {
//         document.write("&nbsp;&nbsp;");
//         // document.write("&nbsp;");

//             //    document.write("_");

//     }
//     for (let j = 9; j >= 2 * i - 1; j--) 
//         {   
//             document.write(String.fromCharCode(j+63));
//     }
//     document.write("<br>");
// }

for (let i = 5; i >= 1; i--) 
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
for (let i = 1; i <= 4; i++)
    {
   for (let j = 2; j >= i-1; j--) 
       {
       document.write("&nbsp;&nbsp;");
       
    //    document.write("_");
   }  
   for (let k = 2; k <= 2 * i + 2; k++) 
       {
        document.write(String.fromCharCode(k + 63));
   }
   document.write("<br>");
}