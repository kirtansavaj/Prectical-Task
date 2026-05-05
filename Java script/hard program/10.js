// Write a function to find the maximum subarray sum


function subarraysum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    document.write("Sum of sub array is: " + sum);
}

let a = [1, 2,100];
subarraysum(a);
