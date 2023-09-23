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
function explodeArray(srcArr) {
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

// const [evenArr, oddArr] = explodeArray(arr0);
// take through one
const [evenArr, oddArr] = explodeArray(uniqueElArray(arrNonUniqueElements));
console.log('evenArr', evenArr, '\n', 'oddArr', oddArr);
// filter unique
console.log(uniqueElArray(arrNonUniqueElements));
