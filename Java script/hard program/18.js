// Write a function to check if two strings are anagrams.


function areAnagrams(str1, str2) {
    const normalize = (str) => str.replace(/[^\w]/g, '').toLowerCase();
    
    const sortedStr1 = normalize(str1).split('').sort().join('');
    const sortedStr2 = normalize(str2).split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

document.write(areAnagrams("listen", "silent"));
document.write("<br>");
document.write(areAnagrams("hello", "world"));