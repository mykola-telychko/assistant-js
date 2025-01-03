/**
 * Filters an array to return only unique elements.
 *
 * @param {Array} arr - The input array containing elements.
 * @returns {Array} - A new array containing only unique elements from the input array.
 *
 * The function uses an object (`seenValues`) to track elements that have already been added to the result (`uniqueArray`).
 * If an element is not in `seenValues`, it is added to `uniqueArray` and marked as seen.
 */
function uniqueElArray(arr) {
    const uniqueArray = [];
    const seenValues = {};
  
    for (const value of arr) {
      if (!seenValues[value]) {
        uniqueArray.push(value);
        seenValues[value] = true;
      }
    }
    return uniqueArray;
}


/**
 * Splits an array into two arrays: one with elements at even indices and another with elements at odd indices.
 *
 * @param {Array} srcArr - The source array to be split.
 * @returns {Array[]} - A two-element array:
 *                      - The first element contains values from even indices of the source array.
 *                      - The second element contains values from odd indices of the source array.
 *
 * The function iterates through the source array and distributes elements based on their index parity (even or odd).
 */
function explodeArrayInterleave(srcArr) {
    const evenArr = [];
    const oddArr = [];
    
    // Iterate through the array
    for (let i = 0; i < srcArr.length; i++) {
      if (i % 2 === 0) {
        evenArr.push(srcArr[i]); // Add elements at even indices
      } else {
        oddArr.push(srcArr[i]);  // Add elements at odd indices
      }
    }
    return [evenArr, oddArr];
}
// direct and inverse action on the array
function mergeArraysInterleave(arr1, arr2) {
    if (arr1.length !== arr2.length) throw new Error('diff arr len');
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i]);
      result.push(arr2[i]);
    }
    return result;
}


/**
 * Separates an array of numbers into two categories: odd and even.
 *
 * @param {number[]} numbers - An array of numbers to be categorized.
 * @returns {Object} - An object with two properties:
 *                     - `odd`: An array containing all odd numbers from the input.
 *                     - `even`: An array containing all even numbers from the input.
 *
 * The function uses the `reduce` method to iterate through the array and categorize each number based on its parity.
 */
function separateOddEven(numbers) {
    return numbers.reduce((result, number) => {
      (number % 2 === 0 ? result.even : result.odd).push(number); // Check if the number is even or odd
      return result; // Return the updated result object
    }, { odd: [], even: [] }); // Initialize the result object with empty arrays for odd and even numbers
}
  

/**
 * Sorts an array of objects by a specific numeric property (key) in ascending order.
 *
 * @param {Object[]} arr - An array of objects to be sorted.
 * @param {string} key - The key (property name) within each object to sort by. 
 *                       The value of this key should be numeric for correct sorting.
 * @returns {Object[]} - A new array sorted in ascending order based on the specified key.
 *
 * The function uses the `Array.prototype.sort()` method to compare objects by their nested key values.
 */
function sortByNestedKey(arr, key) {
    return arr.sort((a, b) => a[key] - b[key]);
}


/**
 * Compares two arrays and returns a new array containing elements that are present in both arrays.
 *
 * - compare array  ( LIKE INTERSECT IN MYSQL )
 * - indexes from two array (arrEnable, arrDisable)
 * 
 * @param {Array} arr - The main array to compare.
 * @param {Array} arrForCompare - The array to compare against.
 * @returns {Array} - A new array containing elements that exist in both `arr` and `arrForCompare`.
 *
 * The function uses `Array.prototype.filter()` to iterate through `arr` and checks for inclusion 
 * of each element in `arrForCompare` using `Array.prototype.includes()`.
 */
const compareArrays2 = (arr, arrForCompare) => {
  return arr.filter(value => arrForCompare.includes(value));
};


/**
 * Identifies and returns an array of duplicate values from the input array.
 *
 * @param {Array} arr - The input array to check for duplicate values.
 * @returns {Array} - An array containing all unique duplicate values from the input array.
 *
 * The function iterates through the input array and identifies duplicates by comparing 
 * the current index of a value with the index of its first occurrence in the array. 
 * If a duplicate is found, it is added to the result only if it hasn't been added already.
 */
function getDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    // Check if the current value has appeared before in the array
    if (arr.indexOf(arr[i]) !== i) {
      // Add to the result array if not already included
      if (!duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

/**
 * Returns an array of elements that are common between the source array and the comparison array.
 *
 * @param {Array} arrSrc - The source array to check elements from.
 * @param {Array} arr - The comparison array to find common elements with.
 * @returns {Array} - An array of elements that exist in both input arrays.
 *
 * This function identifies the intersection of two arrays by filtering elements in the source array that are present in the comparison array.
 */
function getCommonElements(arrSrc, arr) {
  return arrSrc.filter((el) => arr.includes(el));
}


/**
 * Returns the elements present in the source array that are not present in the comparison array.
 * Optionally checks for duplicates in the arrays before comparison.
 *
 * @param {Array} arrSrc - The source array to compare elements from.
 * @param {Array} arr - The comparison array to check against.
 * @param {boolean} [checkDuplicate=true] - Whether to handle duplicates in the arrays.
 * @returns {Array} - An array of elements unique to the source array based on the selected mode.
 *
 * This function compares two arrays and identifies elements in the source array that are not in the comparison array.
 * It has two modes:
 * 1. With duplicate handling (`checkDuplicate = true`): Removes duplicates first and then finds differences.
 * 2. Without duplicate handling (`checkDuplicate = false`): Handles duplicates explicitly by analyzing unique and duplicate elements separately.
 */
function getDifferentElements(arrSrc, arr, checkDuplicate = true) {
  // Mode 1: Check for duplicates before comparison
  if (checkDuplicate) {
    // Remove duplicates from both arrays using `uniqueElArray`
    let arr1 = uniqueElArray(arrSrc);
    let arr2 = uniqueElArray(arr);

    // Return elements from arr1 that are not in arr2
    return arr1.filter((el) => !arr2.includes(el));
  } else {
  // Mode 2: Without duplicate handling

    // Extract unique elements from both arrays
    let ar1 = uniqueElArray(arrSrc);
    let ar2 = uniqueElArray(arr);

    // Find elements unique to arrSrc
    let res = ar1.filter((el) => !ar2.includes(el));

    // Find duplicate elements from both arrays using `getDuplicates`
    let arr1Duplicates = getDuplicates(arrSrc);
    let arr2Duplicates = getDuplicates(arr);

    // Combine duplicates and unique elements, ensuring no duplicates in the final result
    let result = uniqueElArray(
      joinArrays(joinArrays(arr1Duplicates, arr2Duplicates), res)
    );

    return res;
  }
}

/**
 * Combines two arrays into one by concatenation.
 *
 * @param {Array} arr1 - The first array to combine.
 * @param {Array} arr2 - The second array to combine.
 * @returns {Array} - A new array containing all elements from both arrays.
 */
function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}



  