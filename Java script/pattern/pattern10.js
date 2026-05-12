//    *
//   + +
//  * * *
// + + + +

for (let i = 1; i <= 4; i++) 
    {
        for (let j = 1; j <= 4 - i; j++)
        {
        document.write("&nbsp;");
        document.write("&nbsp;");
        // document.write("_");
    }
    for (let k = 1; k <= (2 * i) - 1; k++) 
    {
        if(i%2==0)
            {
                document.write("+");
            }
            else
            {
                document.write("*");
            }
    }
    document.write("<br>");
}   