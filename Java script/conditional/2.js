// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results. Sample numbers : -5, -2, -6, 0, -1


// let a = -5;
// let b = -2;
// let c = -6;
// let d = -1;
// let e = 0;

let a = 1;
let b = 2;
let c = 1;
let d = 2;
let e = 0;


if (a > b && a > c && a > d && a > e)
{
    window.alert("the largest integer Int is" + a);
}
else if (b > c && b > d && b > d && b > e)
{
    window.alert("the largest integer Int is" + b);
}
else if (c > d && c > e)
{
    window.alert("the largest integer Int is" + c);
}
else if (d > e)
{
    window.alert("the largest integer Int is" + d);
}
else
{
    window.alert("the largest integer Int is" + e);
}
