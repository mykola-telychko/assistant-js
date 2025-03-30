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

//-----------------------------------------------------------

/**
 * Picks specific properties from an object and returns a new object with just those properties.
 * 
 * @param {Object} obj - The source object to pick properties from
 * @param {Array<string>} keys - An array of property names to include in the resulting object
 * @returns {Object} A new object containing only the specified properties
 */
const pick = (obj, keys) => 
    Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
  
  /**
   * (Remove)Omits specific properties from an object and returns a new object without those properties.
   * 
   * @param {Object} obj - The source object to omit properties from
   * @param {Array<string>} keys - An array of property names to exclude from the resulting object
   * @returns {Object} A new object containing all properties except the specified ones
   */
  const omit = (obj, keys) => 
    Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
  
  // Example usage of pick and omit
  const user = {
    id: 123,
    name: "Max Pain",
    email: "max@example.com",
    password: "secret123",
    role: "admin",
    lastLogin: "2025-03-30"
  };
  // Using pick for configuration options
  const fullConfig = {
    theme: "dark",
    fontSize: 16,
    showNotifications: true,
    debugMode: false,
    apiKey: "abc123",
    maxRetries: 3
  };
  
  // Using pick to create a safe user object for public API
  const publicUser = pick(user, ["id", "name", "role"]);
  console.log('pick::', publicUser, user);
  
  // Using omit to remove sensitive information
  const safeUser = omit(user, ["password", "email"]);
  console.log('omit::', safeUser, user);
  
  // Only apply visual settings
  const visualSettings = pick(fullConfig, ["theme", "fontSize"]);
  console.log('pick::2', visualSettings, fullConfig);