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


// Falsy Bouncer
// Remove all falsy values from an array. 
// Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  const trueArr = arr.filter(e => e);
  return trueArr
}

bouncer([7, "ate", "", false, 9]);


// Where do I Belong
// Return the lowest index at which a value (second argument) 
// should be inserted into an array (first argument) once it has 
// been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because
//  it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because
//  once the array has been sorted it will look like [3,5,20] 
//  and 19 is less than 20 (index 2) and greater than 5 (index 1).

// #1
function getIndexToIns(arr, num) {
  arr.sort((a,b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    } 
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);

// #2
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

// #3
function getIndexToIns(arr, num) {
  const index = arr
  .sort((a,b) => a - b)
  .findIndex((i) => num <= i);

  return index === -1 ? arr.length : index;
}

// #4
function getIndexToIns(arr, num) {
  return arr
  .concat(num)
  .sort((a, b) => a - b)
  .indexOf(num);
}


// Mutations
// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the 
// letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string 
// hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters 
// in line are present in Alien.

function mutation(arr) {
  for (let letter of arr[1]) {
    if (!arr[0].toLowerCase().includes(letter.toLowerCase())) return false;
  }
  return true;
}

mutation(["hello", "hey"]);


// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length
// of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  const chonkedArr = [];
  for (let chunk = 0; chunk < arr.length; chunk += size) {
    chonkedArr.push(arr.slice(chunk, chunk + size));
  }
  return chonkedArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


// Object Orieted Programming

function Bird(name, color) {
  this.name = name,
  this.color = color
}

Bird.prototype.legs = 2;

const raven = new Bird("joey", "black");

raven instanceof Bird // true
Bird.prototype.isPrototypeOf(raven) // true
raven.contructor === Bird; // true

// inheritance 

function Animal() {};
Animal.prototype = {
  constructor: Animal,
  eat: () => console.log('nom nom nom'),
  poop: () => console.log('plop plop plop')
}

let mammal = Object.create(Animal.prototype);

function Butterfly(color) {
  this.color = color;
};

Butterfly.prototype = Object.create(Animal.prototype);
Butterfly.prototype.constructor = Butterfly;
Butterfly.constructor.fly = function() {
  console.log('flap flap flap');
};
Butterfly.prototype.poop = () => console.log('squirt squirt squirt');

let marmalade = new Butterfly('orange');
marmalade.eat();
marmalade.fly();

// mixins

const laughMixin = function(obj) {
  obj.laugh = () => 'ha ha ha';
}
laughMixin(marmalade);
marmalade.laugh() // ha ha ha


