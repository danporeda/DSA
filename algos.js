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


// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
  return typeof(bool) === 'boolean';
}

booWho(null);


// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize 
// connecting words like the and of.

// #1
function titleCase(str) {
  const arr = str.split(" ");
  const titledArr = [];
  for (let word of arr) {
    let titledWord = '';
    for (let l = 0; l < word.length; l++) {
      if (l === 0) {
        titledWord += word[l].toUpperCase();
      } else {
        titledWord += word[l].toLowerCase();
      }
    }
    titledArr.push(titledWord);
  }
  return titledArr.join(" ");
}

titleCase("I'm a little tea pot");

// #2
function titleCase(str) {
  const arr = str.split(" ");

  const titledArr = arr.map((word) => {
    let titledWord = '';

    for (let l = 0; l < word.length; l++) {
      if (l === 0) {
        titledWord += word[l].toUpperCase();
      } else {
        titledWord += word[l].toLowerCase();
      }
    }

    return titledWord;
  })
  return titledArr.join(" ");
}

titleCase("I'm a little tea pot");


// Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain 
// the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  const slice1 = arr1.slice(0);
  const slice2 = arr2.slice(0);

  slice2.splice(n, 0, ...slice1);
  return slice2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);