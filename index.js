let arrNonUniqueElements = [
  8, 9, 7, 7, 6, 1, 8, 3, 9, 9, 4, 4, 6, 4, 3, 5, 2, 8, 1, 6,
];
const arr0 = [1, 2, 3, 4, 5, 6];

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

// console.log('augmentedArr', evenArr, oddArr, augmentedArr);
// console.log(uniqueElArr);
