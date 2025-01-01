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
  
  