// Give a number between 0 and 6. Write a program to print day of 
// week name using switch case 
// number: 0 => day of week name: Sunday 
// number: 1 => day of week name: Monday 
// number: 2 => day of week name: Tuesday 
// number: 3 => day of week name: Wednesday 
// number: 4 => day of week name: Thursday 
// number: 5 => day of week name: Friday 
// number: 6 => day of week name: Saturday 


let a = parseInt(prompt("Enter the  number from 1 TO 7:"));
switch(a)
{
    case(0):
    document.write("day of week name: Sunday" + "<br>");
    break;
    case(1):
    document.write("day of week name: Monday" + "<br>");
    break;
    case(2):
    document.write("day of week name: Tuesday" + "<br>");
    break;
    case(3):
    document.write("day of week name: Wednesday" + "<br>");
    break;
    case(4):
    document.write("day of week name: Thursday" + "<br>");
    break;
    case(5):
    document.write("day of week name: Friday" + "<br>");
    break;
    case(6):
    document.write("day of week name: Saturday" + "<br>");
    break;

    default:
    alert('Please Enter Proper Value');
    break;
}