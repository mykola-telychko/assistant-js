function URLToArray(url) {
  // Get the query string starting after '?'
  const queryString = url.split('?')[1] || '';

  // Split the query string into individual key-value pairs
  return queryString.split('&')
    .filter(pair => pair) // Filter out empty pairs
    .reduce((request, pair) => {
      const [key, value] = pair.split('=');
      request[decodeURIComponent(key)] = decodeURIComponent(value || ''); // Handle cases where value might be empty
      return request;
    }, {});
}
const url = "https://example.com?name=Alice&age=30&city=New%20York";
const result = URLToArray(url);
console.log(result);

// reverse string
// functional programming
const revStr = (str) => { return str.split("").reverse().join(""); }


// GROUP BY
// Можна зробити через хеш карту, тоді буде не O(n^2), а просто O(n)
const data = [
  { usrId: 1, bookId: 876 },
  { usrId: 1, bookId: 189 },
  { usrId: 1, bookId: 25 },
  { usrId: 2, bookId: 532 },
  { usrId: 2, bookId: 414 },
  { usrId: 5, bookId: 49 },
  { usrId: 5, bookId: 579 },
  { usrId: 8, bookId: 116 }
];

const result = data.reduce((acc, { usrId, bookId }) => {
  // get curr usrId
  const user = acc.find(item => item.usrId === usrId);

  if (user) {
    // if exists uid then push bookId to array
    user.bookArrayId.push(bookId);
  } else {
    // if new add new obj
    acc.push({ usrId, bookArrayId: [bookId] });
  }

  return acc;
}, []); // start from empty array

console.log(result);

// SEARCH KEY ON VALUE
let getKeyByValue = (object, value) => { return Object.keys(object).find(key => object[key] === value); }


let ar1 = [12, 43, 45, 21, 87];
let ar2 = [72, 23, 75, 71, 17];

function combs(arr1, arr2) {
  let res = [];

  for(let i = 0; i < arr1.length; i++){
   for(let k = 0; k < arr2.length; k++){
      res.push(`${arr1[i]}, ${arr2[k]}`);
   }
  }
  return res;
}

console.log(combs(ar1, ar2));