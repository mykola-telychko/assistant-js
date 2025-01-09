let arrNonUniqueElements = [
  8, 9, 7, 7, 6, 1, 8, 3, 9, 9, 4, 4, 6, 4, 3, 5, 2, 8, 1, 6,
];

const obje = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const arrBig = [1, 3, 4, 5, 6, 7];
const arrBig2 = [1, 3, 4, 5, 6, 7];
const arrSmall = [1, 3, 4];
// const commonElements = getCommonElements(arrBig, arrSmall);
let arr32 = compareArrays(arrBig, arrBig2);

function splitArrayInHalf(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);
  return [firstHalf, secondHalf];
}

let [half1, half2] = splitArrayInHalf(arr0);
// join two arrays  explodeArray
// direct and inverse action on the array -- start
const [evenArr, oddArr] = explodeArrayInterleave(uniqueElArr);
const unionArrs = joinArraysInterleave(half1, half2);
// direct and inverse action on the array -- end



// Flatten Array
// Flattens a multi-dimensional array into a single level.
   const flattenArray = (arr) => arr.flat(Infinity);
   

//  Unique Elements
//  Filters out duplicate elements in an array.
   const uniqueArray = (arr) => [...new Set(arr)];
   

// Chunk Array
// Divides an array into smaller arrays of a specified size.
   const chunkArray = (arr, size) => 
     arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
   

// Shuffle Array
//  Randomizes the order of elements in an array.
   const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
   

// Group by Key
//    Groups an array of objects by a specific key.
   const groupBy = (arr, key) => 
     arr.reduce((acc, obj) => ({ ...acc, [obj[key]]: [...(acc[obj[key]] || []), obj] }), {});
   

// Filter by Key
//    Filters objects in an array by a specific key and value.
   const filterByKey = (arr, key, value) => arr.filter(obj => obj[key] === value);
   

// Intersection
//    Returns elements common to multiple arrays.
   const intersection = (arr1, arr2) => arr1.filter(el => arr2.includes(el));
   

//  Difference
//    Returns elements present in the first array but not in the second.
   const difference = (arr1, arr2) => arr1.filter(el => !arr2.includes(el));
   

//  Remove Duplicates by Key
//    Filters out duplicate objects based on a specific key.
   const removeDuplicatesByKey = (arr, key) => 
     [...new Map(arr.map(item => [item[key], item])).values()];
   

// Sort by Multiple Keys
// Sorts an array of objects by multiple keys in a specified order.
    const sortByKeys = (arr, keys) => 
      arr.sort((a, b) => keys.reduce((acc, key) => acc || (a[key] > b[key] ? 1 : -1), 0));

// ### Objects
// Deep Merge
// Merges two objects, including nested properties.  
   const deepMerge = (target, source) => {
     for (let key in source) {
       if (source[key] instanceof Object) 
         Object.assign(source[key], deepMerge(target[key] || {}, source[key]));
     }
     return { ...target, ...source };
   };
   

// Filter Object by Keys
// Filters an object to include only specified keys.
   const filterObject = (obj, keys) => 
     Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
   

// Invert Object
// Swaps the keys and values of an object.
   const invertObject = (obj) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
   

// Get Nested Property
// Safely retrieves a nested property value.
   const getNestedProp = (obj, path) => 
     path.split('.').reduce((acc, key) => acc && acc[key], obj);
   

// Object to Array
//  Converts an object into an array of key-value pairs.
   const objectToArray = (obj) => Object.entries(obj);
   

// Array to Object
//  Converts an array of key-value pairs into an object.  
   const arrayToObject = (arr) => Object.fromEntries(arr);
   

// Rename Keys
// Renames keys in an object based on a mapping. 
   const renameKeys = (obj, keyMap) => 
     Object.fromEntries(Object.entries(obj).map(([key, value]) => [keyMap[key] || key, value]));
   

// Deep Clone
// Creates a deep copy of an object.
   const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
   

// Compare Objects
// Compares two objects for deep equality.
   const deepEqual = (obj1, obj2) => 
     JSON.stringify(obj1) === JSON.stringify(obj2);
  

// Pick and Omit
// Picks or omits specific keys from an object.
    const pick = (obj, keys) => 
      Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
    const omit = (obj, keys) => 
      Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));


