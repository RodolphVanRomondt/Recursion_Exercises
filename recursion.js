/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  
  let max = words[i].length;

  if (i === words.length - 1) return max;

  return Math.max(max, longest(words, i + 1));

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {

  if (i >= str.length) return "";

  return str[i] + everyOther(str, i + 2);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {

  let toReturn = str[i] === str[str.length - (i + 1)];
  
  if (i + 1 === str.length || !toReturn || i + 1 >= str.length / 2) return toReturn;

  return isPalindrome(str, i + 1); 
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {

  let toReturn = arr[i] === val ? i : -1;
  
  if (i === arr.length - 1 || toReturn !== -1) return toReturn;

  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {

  if (i >= str.length) return "";

  return str[str.length - (i+1)] + revString(str, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  const toReturn = [];

  for (let ele in obj) {
    if (typeof obj[ele] === "string") {
      toReturn.push(obj[ele]);
    }
    else if (typeof obj[ele] === "object") {
      toReturn.push(...gatherStrings(obj[ele]));
    }
  }

  return toReturn;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */


function binarySearch(arr, val, left = 0, right = arr.length) {

  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, right -1);
  }
  return binarySearch(arr, val, left +1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
