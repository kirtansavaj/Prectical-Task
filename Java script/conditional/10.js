let a = parseInt(prompt("Enter the first number:"));

// console.log(typeof a);

switch(a)
{
    case(1):                    
    document.write("January = 31 Days")
    break;
    
    case(2):
    document.write("February = 28 Days")
    break;

     
    case(3):
    document.write("March = 31 Days")
    break;
    
    case(4):
    alert('April = 30 Days')
    break;
    
    case(5):
    document.write("May = 31 Days")
    break;
    
    case(6):
    document.write("Jun = 30 Days")
    break;
    
    case(7):
    document.write("July = 31 Days")
    break;
    
    case(8):
    document.write("Augest = 30 Days")
    break;
    
    case(9):
    document.write("September = 31 Days")
    break;
    
    case(10):
    document.write("Octomber = 30 Days")
    break;
    
    case(11):
    document.write("November = 31 Days")
    break;
    
    case(12):
    document.write("December = 30 Days")
    break;

    default:
    alert('Please Enter Proper Value');
    break;
}
