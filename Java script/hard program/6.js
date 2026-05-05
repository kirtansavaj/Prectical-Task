function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

}

let arr = [1, 3, 5, 7, 9, 11, 13];
let target = 2;

let index = binarySearch(arr, target);

if (index !== -1) {
    document.write(`Element ${target} found at index ${index}.`);
} else {
    document.write(`Element ${target} not found in the array.`);
}

