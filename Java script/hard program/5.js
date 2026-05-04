// Write a function to reverse a linked list.

function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const array = ['aaaaz', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const reversedArray = reverseArray(array);
document.write(reversedArray);