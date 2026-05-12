// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

// // document.write("<pre>")
// for (let i = 1; i <= 10; i++) 
//     {
//     for (let j = 1; j < i; j++) 
//         {
//         document.write("&nbsp;");
//     }
//     for (let j = 9; j >= 2 * i - 1; j--) 
//         {
//         document.write("*");
//     }
//     document.write("<br>");
// }
// for (let i = 1; i <= 4; i++)
//     {
//    for (let j = 2; j >= i-1; j--) 
//        {
//        document.write("&nbsp;");
//     //    document.write(" _ ");
//    }
//    for (let k = 2; k <= 2 * i + 2; k++) 
//        {
//        document.write("*");
//    }
//    document.write("<br>");
// }
// // document.write("</pre>");



for (let i = 1; i <= 5; i++) 
    {
    for (let j = 1; j < i; j++) 
        {
        document.write("&nbsp;&nbsp;");
        // document.write("&nbsp;");

            //    document.write("_");

    }
    for (let j = 9; j >= 2 * i - 1; j--) 
        {   
        document.write("*");
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
       document.write("*");
   }
   document.write("<br>");
}