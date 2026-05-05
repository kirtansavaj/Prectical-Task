// Write a function to deep clone an object.


let student1 = {
    name: "Manish",
    company: "Gfg"
}

let student2 = { ...student1 };

document.write("student 1 name is","&nbsp", student1.name)
document.write("<br>")
document.write("student 2 name is ", student2.name,"&nbsp",student2.company);