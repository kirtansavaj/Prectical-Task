// Write a JavaScript program to sum 3 and 5 multiples under 1000. 

let a = 0;
for (i = 1; i <= 1000; i++)
{
    if(i%3==0 || i%5==0)
    {
        a += i;
    
    }
}
document.write(a);
