let arrNonUniqueElements = [
  8, 9, 7, 7, 6, 1, 8, 3, 9, 9, 4, 4, 6, 4, 3, 5, 2, 8, 1, 6,
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

let [half1, half2] = splitArrayInHalf(arr0);
// join two arrays  explodeArray

// direct and inverse action on the array -- start
const [evenArr, oddArr] = explodeArrayInterleave(uniqueElArr);
const unionArrs = joinArraysInterleave(half1, half2);
// direct and inverse action on the array -- end
