


let a = 5; // kg
let b = 1000;// gram
let c = 1; // ton
let d = 10;// milligram

let weight = prompt("press 1 for kg, press 2 for gram,press 3 for ton,press 4 for milligram");
// let weight = prompt("Enter your weight:");
// window.alert(weight);

document.write(weight + "kg to gram: " + (weight * 1000) + " grams<br>");
document.write(weight + "kg to ton: " + (weight / 1000) + " tons<br>");
document.write(weight + "kg to milligram: " + (weight * 1000000) + " mg<br>");

document.write("1000 gram to ton: " + (b / 1000000) + " tons<br>");
document.write("1000 gram to milligram: " + (b * 1000) + " mg<br>");
document.write("1000 gram to kg: " + (b / 1000) + " kg<br>");

document.write("1 ton to milligram: " + (c * 1000000000) + " mg<br>");
document.write("1 ton to kg: " + (c * 1000) + " kg<br>");
document.write("1 ton to gram: " + (c * 1000000) + " grams<br>");

document.write("10 milligram to kg: " + (d / 1000000) + " kg<br>");
document.write("10 milligram to gram: " + (d / 1000) + " grams<br>");
document.write("10 milligram to ton: " + (d / 1000000000) + " tons<br>");
