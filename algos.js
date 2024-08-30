// Truncate a String
// Truncate a string (first argument) if it is longer than 
// the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  } else {
    return str.slice(0, num) + '...';
  }
}


// Finders Keepers
// Create a function that looks through an array arr and returns 
// the first element in it that passes a 'truth test'. 
// This means that given an element x, the 'truth test' is passed if 
// func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  let el;
  for (let e of arr) {
    if (func(e)) {
      el = e;
      break;
    }
  }
  return el;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);