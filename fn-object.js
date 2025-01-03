function objKeys(obj) {
    return Object.keys(obj);
}

function objValues(obj) {
    return Object.values(obj);
}

function explodeObj(obj) {
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
  