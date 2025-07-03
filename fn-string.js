/**
* Checks if a string is empty, null, undefined, or contains only whitespace.
* 
* @param {string|null|undefined} str - The string to check
* @returns {boolean} True if the string is empty, null, undefined, or whitespace-only; otherwise false
*/
function isEmptyStr(str) {
  // Returns true if string is empty, null, undefined, or whitespace-only
  return !str || str.trim() === "";
}
 
 /**
 * Determines if a substring exists within a main string.
 * 
 * @param {string} mainString - The string to search within
 * @param {string} subString - The substring to look for
 * @returns {boolean} True if the substring is found within the main string; otherwise false
 */
function checkSubstring(mainString, subString) {
  return mainString.includes(subString);
}

// reverse string 
const revStr = (str) => { return str.split("").reverse().join(""); }