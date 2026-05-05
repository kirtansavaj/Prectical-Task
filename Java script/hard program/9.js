// 9. Write a function to find the longest substring without repeating characters.

function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === reversed[i]) {
            return;
        }
        else {
            reversed.push(arr[i]);
        }
    }
    return reversed;
}

const array = ["abacbegessrewwnmdenma"];
const reversedArray = reverseArray(array);
document.write(reversedArray);