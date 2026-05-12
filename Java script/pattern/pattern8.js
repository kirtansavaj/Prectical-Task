//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

for(let i = 1; i <= 5; i++)
{
    for (let j = 0; j < i - 5; j--)
    {
        document.write("&nbsp;");
                document.write(" _ ")
    }
    for(let k = 1; k <= i; k++)
        {   
            document.write("*");
        }
        document.write("<br>");
}
for(let i = 4; i >= 1; i--)
{
    for (let j = 5; j < 5-i; j--)
    {
        document.write("&nbsp;");
        // document.write(" _ ")
    }
for(let k = 1; k <= i; k++)
    {   
        document.write("*");
    }
    document.write("<br>");
}
