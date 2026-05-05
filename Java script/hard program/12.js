// Write a function to flatten a nested array.

function flattenArray(arr) {
    let result = [];
  
    for (let element of arr) {
      if (Array.isArray(element)) {
        result = result.concat(flattenArray(element));
      } else {
        result.push(element);
      }
    }
  
    return result;
  }

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flattened = flattenArray(nestedArray);
document.write(flattened);
