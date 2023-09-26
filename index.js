let arrNonUniqueElements = [
  8, 9, 7, 7, 6, 1, 8, 3, 9, 9, 4, 4, 6, 4, 3, 5, 2, 8, 1, 6,
];
const arr0 = [1, 2, 3, 4, 5, 6];

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

function getCommonElements(arrSrc, arr) {
  return arrSrc.filter((el) => arr.includes(el));
}
function getDifferentElements(arrSrc, arr) {
  return arrSrc.filter((el) => !arr.includes(el));
}

// getCommonElements - getDifferentElements - union = compareArrays
// compareArrays('com', aar[], arr2[]) else 'euqal'
// compareArrays('diff', aar[], arr2[]) else 'euqal'

const arrBig = [1, 3, 4, 5, 6, 7];
const arrSmall = [1, 3, 4];
// const commonElements = getCommonElements(arrBig, arrSmall);
const diffElements = getCommonElements(arrBig, arrSmall);

console.log(diffElements); // Output will be [1, 3, 4]

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

// direct and inverse action on the array -- start
function explodeArrayInterleave(srcArr) {
  const evenArr = [];
  const oddArr = [];
  // take through one
  for (let i = 0; i < srcArr.length; i++) {
    if (i % 2 === 0) {
      evenArr.push(srcArr[i]);
    } else {
      oddArr.push(srcArr[i]);
    }
  }
  return [evenArr, oddArr];
}
function joinArraysInterleave(arr1, arr2) {
  if (arr1.length !== arr2.length) throw new Error('diff arr len');
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}
// direct and inverse action on the array -- end

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
//

//

//
let [half1, half2] = splitArrayInHalf(arr0);
// join two arrays  explodeArray
const uniqueElArr = uniqueElArray(arrNonUniqueElements);

// direct and inverse action on the array -- start
const [evenArr, oddArr] = explodeArrayInterleave(uniqueElArr);
const augmentedArr = draggingElements(evenArr, oddArr, 3);

const unionArrs = joinArraysInterleave(half1, half2);
// direct and inverse action on the array -- end

let arrObj = arrayOfObjDiff(array1, array2);
console.log(arrObj);

// console.log('augmentedArr', evenArr, oddArr, augmentedArr);
// console.log(uniqueElArr);
