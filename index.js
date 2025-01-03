let arrNonUniqueElements = [
  8, 9, 7, 7, 6, 1, 8, 3, 9, 9, 4, 4, 6, 4, 3, 5, 2, 8, 1, 6,
];

const array1 = [
  { id: 275, ipUsr: '444.42.22.109' },
  { id: 28, ipUsr: '444.63.22.127' },
  { id: 12, ipUsr: '544.43.32.246' },
  { id: 18, ipUsr: '545.46.92.122' },
  { id: 15, ipUsr: '564.75.66.136' },
];
const array2 = [
  { id: 75, ipUsr: '222.63.62.339' },
  { id: 14, ipUsr: '544.43.32.246' },
  { id: 58, ipUsr: '545.46.92.122' },
];

const obje = {
  name: 'John',
  age: 30,
  city: 'New York',
};

// getCommonElements - getDifferentElements - union = compareArrays
// compareArrays('com', aar[], arr2[]) else 'euqal'
// compareArrays('diff', aar[], arr2[]) else 'euqal'
function compareArrays(arr1, arr2, mod = true) {
  if (mod !== false) {
    // console.log('diffEl', arr1, arr2);
    if (mod === 'com') {
      return getCommonElements(arr1, arr2);
    } else if (mod === 'diff') {
      // if [] then false
      return getDifferentElements(arr1, arr2);
    } else {
      // console.log('diffElements');
      return equalArrays(arr1, arr2);
    }
  }
}
function equalArrays(array1, array2) {
  // Check if the arrays have the same length
  if (array1.length !== array2.length) return false;
  // Sort both arrays to ensure order doesn't affect comparison
  array1.sort();
  array2.sort();
  // Compare the sorted arrays element by element
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  // If all elements are equal, the arrays are equal
  return true;
}

const arrBig = [1, 3, 4, 5, 6, 7];
const arrBig2 = [1, 3, 4, 5, 6, 7];
const arrSmall = [1, 3, 4];
// const commonElements = getCommonElements(arrBig, arrSmall);
// const diffElements = getCommonElements(arrBig, arrSmall);
let arr32 = compareArrays(arrBig, arrBig2);

function splitArrayInHalf(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);

  return [firstHalf, secondHalf];
}
// getting random element from array
function getRandElFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
// draggingElements from arr1 to arr2 - specified qty
function draggingElements(sourceArray, targetArray, count) {
  if (!Array.isArray(sourceArray) || !Array.isArray(targetArray) || count < 0) {
    throw new Error('Параметри некоректні');
  }
  const elementsToMove = sourceArray.slice(0, count); // copy el not del
  const newTargetArray = [...targetArray, ...elementsToMove];
  return newTargetArray;
}

function arrayOfObjDiff(array1, array2) {
  const ipSet = new Set(array2.map((obj) => obj.ipUsr));
  return array1.filter((obj) => !ipSet.has(obj.ipUsr));
}

let [half1, half2] = splitArrayInHalf(arr0);
// join two arrays  explodeArray
const uniqueElArr = uniqueElArray(arrNonUniqueElements);

// direct and inverse action on the array -- start
const [evenArr, oddArr] = explodeArrayInterleave(uniqueElArr);
const augmentedArr = draggingElements(evenArr, oddArr, 3);
const unionArrs = joinArraysInterleave(half1, half2);
// direct and inverse action on the array -- end
// let arrObj = arrayOfObjDiff(array1, array2);
// console.log('augmentedArr', evenArr, oddArr, augmentedArr);