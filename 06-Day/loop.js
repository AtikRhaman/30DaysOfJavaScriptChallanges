//Day 6: loops
console.log(
  "1. Iterate 0 to 10 using for loop, do the same using while and do while loop"
);
// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
// do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);
console.log(
  "Iterate 10 to 0 using for loop, do the same using while and do while loop"
);
// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

//for loop
for (let p = 10; p >= 0; p--) {
  console.log(p);
}
// while loop
let q = 10;
while (q >= 0) {
  console.log(q);
  q--;
}
// do while
let r = 10;
do {
  console.log(r);
  r--;
} while (r >= 0);

console.log("Iterate 0 to n using for loop");

// 3. Iterate 0 to n using for loop'
const iterateN = n => {
  for (s = 0; s <= n; s++) {
    console.log(s);
  }
};
iterateN(10);

console.log(
  " Write a loop that makes the following pattern using console.log(###)"
);
// Write a loop that makes the following pattern using console.log(###)
let hash = "";
for (let r = 0; r < 7; r++) {
  hash += "#";
  console.log(hash);
}
console.log("Use loop to print the following pattern:");
// 5. Use loop to print the following pattern:

let patern = "";
for (s = 0; s <= 10; s++) {
  patern = `${s} x ${s} = ${s * s}`;
  console.log(patern);
}

console.log("Using loop print the following pattern");
//6. Using loop print the following pattern

let iSqure = "";
for (let i = 0; i <= 10; i++) {
  iSqure = `${i} ${i * i} ${i * i * i}`;
  console.log(iSqure);
}
console.log(
  "Use for loop to iterate from 0 to 100 and print only even numbers"
);
// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log("Use for loop to iterate from 0 to 100 and print only odd numbers");
// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log(
  "Use for loop to iterate from 0 to 100 and print and print the sum of all numbers."
);
// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);
console.log(
  "Use for loop to iterate from 0 to 100 and print and print the sum of all numbers."
);
// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.
let sumOfOdd = 0;
let sumOfEven = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumOfEven += i;
  } else if (i % 2 !== 0) {
    sumOfOdd += i;
  }
}
console.log(
  `The sum of all even is ${sumOfEven} and the sum of all odd is ${sumOfOdd}`
);

// let idText = "0123456789abcdef";
// let randomId = "";
// for (let i = 0; i < 6; i++) {
//   let id = Math.floor(Math.random() * 16);
//   randomId = randomId + idText[id];
//   console.log(randomId);
// }

console.log(
  "Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array"
);
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

const arrayOfSum = [];
console.log(arrayOfSum.push(`${sumOfEven}, ${sumOfOdd}`));
console.log(arrayOfSum);

console.log("Develop a small script which generate array of 5 random numbers");
// Develop a small script which generate array of 5 random numbers
let arryOfRanNum = [];
for (let i = 0; i < 5; i++) {
  let numbers = Math.floor(Math.random() * 11);
  arryOfRanNum.push(numbers);
}
console.log(arryOfRanNum);
console.log(
  "Develop a small script which generate a six characters random id:"
);

let idText = "0123456789abcdef";
let idNum = "";
for (let i = 0; i < 6; i++) {
  let indexOfidText = Math.floor(Math.random() * 16);
  idNum = idNum + idText[indexOfidText];
}
console.log(idNum);

console.log("Exercises: Level 2");
console.log(
  "Develop a small script which generate any number of characters random id:"
);

const anyNumberOfche = n => {
  let idText = "0123456789abcdefghojklmnopqrstuvwxyz";
  let idNum = "";
  for (let i = 0; i < n; i++) {
    let indexOfidText = Math.floor(Math.random() * idText.length);
    idNum = idNum + idText[indexOfidText];
  }
  console.log(idNum);
};
anyNumberOfche(10);

console.log("Write a script which generates a random hexadecimal number.");
// Write a script which generates a random hexadecimal number.

let hexacharecter = "0123456789abcdef";
let hexaNum = "#";
for (let i = 0; i < 6; i++) {
  let indexOfHexCh = Math.floor(Math.random() * hexacharecter.length);
  hexaNum = hexaNum + hexacharecter[indexOfHexCh];
}
console.log(hexaNum);
console.log("Write a script which generates a random rgb color number.");

// Write a script which generates a random rgb color number.
const rgbColorGenerator = () => {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  let rgb = `${a},${b},${c}`;
  let rgbColor = `rgb (${rgb})`;
  console.log(rgbColor);
};
rgbColorGenerator();

console.log("Using the above countries array, create the following new array.");
//Using the above countries array, create the following new array.

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya"
];

let countryUppercse = [];
for (country of countries) {
  countryUppercse.push(country.toUpperCase());
}
console.log(countryUppercse);
console.log(
  "Using the above countries array, create an array for countries length"
);
// Using the above countries array, create an array for countries length'.

let lenthOfcountry = [];
for (country of countries) {
  lenthOfcountry.push(country.length);
}
console.log(lenthOfcountry);

console.log("Use the countries array to create the following array of arrays");
//Use the countries array to create the following array of arrays
let arryForCou = [];

for (country of countries) {
  let shortArray = [];
  let word = "";
  for (let i = 0; i < 3; i++) {
    let shortLetter = country[i].toUpperCase();
    word = word + shortLetter;
  }
  let lengthOfCountry = country.length;
  shortArray.push(country);
  shortArray.push(word);
  shortArray.push(lengthOfCountry);
  arryForCou.push(shortArray);
}
console.log(arryForCou);
console.log(countries);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these are countries without land'.

// const countriesToUpperCase = countries.map(country => {
//   return country.toUpperCase();
// });
// //Explicit return arrow function
// const countriesToUpperCase = countries.map(country => country.toUpperCase());

const landCountries = countries.filter(country => {
  return country.includes("land");
});

console.log(landCountries);

const iACountries = countries.filter(country => {
  return country.includes("ia");
});
console.log(iACountries);

let bigCountryName = "";
for (country of countries) {
  if (country.length > bigCountryName.length) {
    bigCountryName = country;
  }
}
console.log(bigCountryName);

console.log(
  "Using the above countries array, find the country containing only 5 characters."
);
// Using the above countries array, find the country containing only 5 characters.

let fiveCharecCountry = [];
for (country of countries) {
  if (country.length === 5) {
    fiveCharecCountry.push(country);
  }
}
console.log(fiveCharecCountry);
console.log("Find the longest word in the webTechs array");
// Find the longest word in the webTechs array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];

let longestWordTech = "";
for (techName of webTechs) {
  if (techName.length > longestWordTech.length) {
    longestWordTech = techName;
  }
}
console.log(longestWordTech);
console.log("Use the webTechs are to create the following array of arrays:");
// Use the webTechs are to create the following array of arrays:
let newWebTechArry = [];
for (techName of webTechs) {
  let newArry = [];
  for (let i = 0; i < 1; i++) {
    newArry.push(techName);
    newArry.push(techName.length);
  }
  newWebTechArry.push(newArry);
}
console.log(newWebTechArry);
console.log(
  'Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.'
);
//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const techUsed = ["MongoDB", "Express", "React", "Node"];

let acronym = " ";
for (tech of techUsed) {
  for (let i = 0; i < 1; i++) {
    acronym += tech[0];
  }
}
console.log(acronym);
console.log(
  'Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.'
);
const webTech2 = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB"
];
for (let i = 0; i < webTech2.length; i++) {
  console.log(webTech2[i]);
}
console.log(
  "This is a fruit array, reverse the order using loop without using a reverse method"
);
const fruit = ["banana", "orange", "mango", "lemon"];
for (let i = fruit.length - 1; i >= 0; i--) {
  console.log(fruit[i]);
}
console.log("Print all the elements of array as shown below.");
// Print all the elements of array as shown below.

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"]
];

let arryTOString = fullStack.toString();
console.log(arryTOString);
const newArryFullStack = arryTOString.split(",");
for (techElements of newArryFullStack) {
  console.log(techElements);
}

// Exercises: Level 3
const newCountryArray = [...countries];
console.log(newCountryArray);
newCountryArray.push("Bangladesh");
console.log(newCountryArray);
console.log(countries);
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortArry = newCountryArray.sort();
console.log(sortArry);
