function isEmpty(str) {
  // Returns true if string is empty, null, undefined, or whitespace-only
  return !str || str.trim() === "";
}

function checkSubstring(mainString, subString) {
  return mainString.includes(subString);
}