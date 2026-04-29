// take 10 elements and sort in descending order without using sort

let a = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] < a[j]) {
      // Swap elements if the current element is smaller than the next
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}

document.write("Array in descending order: " + a);