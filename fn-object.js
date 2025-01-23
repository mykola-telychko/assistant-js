function objKeys(obj) {
    return Object.keys(obj);
}

function objValues(obj) {
    return Object.values(obj);
}

function explodeObjToKeyValueArrays(obj) {
    return Object.entries(obj);
}

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

/**
 * Checks if a given key exists in an object.
 *
 * @param {string} key - The key to check for existence in the object.
 * @param {Object} obj - The object in which to check for the key.
 * @returns {boolean} - Returns `true` if `obj` is a valid object and contains the specified key; otherwise, `false`.
 *
 * The function first verifies if the provided `obj` is an object using the helper function `isObject(obj)`. 
 * It then checks if the object has the given key as its own property using `Object.prototype.hasOwnProperty()`.
 */
function objKeyExists(key, obj) {
    return isObject(obj) && obj.hasOwnProperty(key);
}

/**
 * Converts an object into an array of key-value pairs.
 * 
 * This function uses `Object.entries()` to transform an object into an array,
 * where each element is a two-item array `[key, value]`.
 *
 * @param {Object} obj - The input object to be transformed.
 * @returns {Array[]} An array of key-value pairs, where each element is `[key, value]`.
 *
 * @example
 * const person = { name: 'Alice', age: 30, city: 'New York' };
 * const result = explodeObjToKeyValueArrays(person);
 * console.log(result);
 * // Output: [['name', 'Alice'], ['age', 30], ['city', 'New York']]
 */
function explodeObjToKeyValueArrays(obj) { return Object.entries(obj); }

// use
const person = { name: 'Alice', age: 30, city: 'New York' };
const result = explodeObjToKeyValueArrays(person);
console.log(result);

  