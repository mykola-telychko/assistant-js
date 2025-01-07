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
