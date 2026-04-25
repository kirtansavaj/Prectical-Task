let a = parseInt(prompt("Enter the positive number"));
let b = parseInt(prompt("Enter the positive number"));

if (a > 0 && b > 0)
{
    while(a != b)
        {
        if (a > b)
            {
                a = a - b;
            }
            else
            {
                b = b - a;
            }
    }
    console.log();
    (a);
}