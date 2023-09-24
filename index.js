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

// take through one
function explodeArrayInterleave(srcArr) {
  const evenArr = [];
  const oddArr = [];

  for (let i = 0; i < srcArr.length; i++) {
    if (i % 2 === 0) {
      evenArr.push(srcArr[i]);
    } else {
      oddArr.push(srcArr[i]);
    }
  }
  return [evenArr, oddArr];
}
// same explodeArray
function joinArraysInterleave(arr1, arr2) {
  if (arr1.length !== arr2.length) throw new Error('diff arr len');
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}

function splitArrayInHalf(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);

  return [firstHalf, secondHalf];
}

let [half1, half2] = splitArrayInHalf(arr0);

// join two arrays  explodeArray
const uniqueElArr = uniqueElArray(arrNonUniqueElements);

// direct and inverse action on the array -- start
const [evenArr, oddArr] = explodeArrayInterleave(uniqueElArr);
const unionArrs = joinArraysInterleave(evenArr, oddArr);
// direct and inverse action on the array -- end

console.log('unionArrs', unionArrs, '\n', 'oddArr', oddArr);
// filter unique
console.log(uniqueElArr);
