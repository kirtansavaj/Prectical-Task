function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let a = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < a) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(a, quickSort(right));
}

let arr = [38, 27, 43, 3, 9, 82, 10];
document.write("Original array: " + arr.join(", ") + "<br>");

let sortedArr = quickSort(arr);
document.write("quick Sort array: " + sortedArr.join(", "));
