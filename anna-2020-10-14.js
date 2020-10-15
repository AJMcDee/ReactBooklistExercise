//Edabit 01: Create a function that takes an array and returns the first element.

function getFirstValue(arrayEntered) {
  return arrayEntered[0];
}

console.log(getFirstValue([1, 2, 3]));

//02: Write a function to reverse an array.

function reverseThis(arrayEntered) {
  return arrayEntered.reverse();
}

console.log(reverseThis([1, 2, 3]));

//03: Create a function that accepts an array and returns the last item in the array.

function getLastItem(arrayEntered) {
  return arrayEntered[arrayEntered.length - 1];
}

console.log(getLastItem([1, 2, 3]));

//04. Create a function that finds the index of a given item.

function search(arrayEntered, searchTerm) {
  if (arrayEntered.includes(searchTerm)) {
    return arrayEntered.indexOf(searchTerm);
  } else {
    return -1;
  }
}

console.log(search([1, 2, 3], 2));

//05. Write a function to check if an array contains a particular number.

function check(arrayEntered, searchTerm) {
  return arrayEntered.includes(searchTerm);
}

console.log(check([1, 2, 3], 5));
console.log(check([1, 2, 3], 3));

//06. Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.

function monthName(num) {
  switch (num) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid month";
  }
}

console.log(monthName(3));
console.log(monthName(11));
console.log(monthName(14));

//07. Given an array of numbers, negate all elements contained within.

function negate(arrayEntered) {
  let result = [];
  for (let i = 0; i < arrayEntered.length; i++) {
    result.push(arrayEntered[i] * -1);
  }
  return result;
}

console.log(negate([1, 2, 3, 4]));
console.log(negate([-1, 2, -3, 4]));

//08. Create a function that takes an array and returns the difference between the biggest and smallest numbers.

function diffMaxMin(arrayEntered) {
  let sortedArray = arrayEntered.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 1] - sortedArray[0];
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(diffMaxMin([44, 32, 86, 19]));

//09. Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

function unlucky13(arrayEntered) {
  let result = [];
  for (let i = 0; i < arrayEntered.length; i++) {
    if (arrayEntered[i] % 13 != 0) result.push(arrayEntered[i]);
  }
  return result;
}

console.log(unlucky13([104, 351, 455, 806, 871]));
console.log(unlucky13([24, 316, 393, 458, 1279]));
console.log(unlucky13([53, 182, 435, 591, 637]));

/// Results for 01-arrays-2-3.md

//1. The function should return the elements of the array which are greater than the second argument.

function findGreatest(arrayEntered, num) {
  let result = "";
  for (let i = 0; i < arrayEntered.length; i++) {
    if (i === arrayEntered.length - 1 && arrayEntered[i] > num) {
      result += arrayEntered[i];
    } else if (arrayEntered[i] > num) {
      result += arrayEntered[i] + ", ";
    } else continue;
  }
  return result;
}

console.log(findGreatest([10, 20, 30], 12));

//2. Create a function to find the longest word in a given string.

function longestWord(stringEntered) {
  return stringEntered.split(" ").sort((a, b) => b.length - a.length)[0];
}
console.log(longestWord("this is a web development course"));

//3. Create a function to reverse a number

function reverseNumber(number) {
  return number.toString().split("").reverse().join("");
}

console.log(reverseNumber(12345));

//4. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.

function countVowels(stringEntered) {
  let count = 0;
  for (let i = 0; i < stringEntered.length; i++) {
    if (
      stringEntered[i] === "a" ||
      stringEntered[i] === "e" ||
      stringEntered[i] === "i" ||
      stringEntered[i] === "o" ||
      stringEntered[i] === "u"
    )
      count++;
  }
  return count;
}

console.log(countVowels("this is a string"));

//5. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

function missingNums(arrayEntered) {
  let comparisonSum = 0;
  for (let i = 1; i <= 10; i++) {
    comparisonSum += i;
  }
  let arrayEnteredSum = arrayEntered.reduce((acc, current) => acc + current);
  return comparisonSum - arrayEnteredSum;
}

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

//6. Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(arrayEntered) {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue ** 3;
  };

  return arrayEntered.reduce(reducer, 0);
}

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));

//7. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

function dictionary(searchTerm, arrayOfWords) {
  return arrayOfWords.filter((word) => word.startsWith(searchTerm));
}

console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

//8. Create a function that finds all even numbers from 1 to the given number.

function evenNums(upperLimit) {
  let result = [];
  for (i = 1; i <= upperLimit; i++) {
    if (i % 2 === 0) result.push(i);
  }
  return result;
}

console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));
console.log(evenNums(1));

//Bonus: Create a function to sort a string into alphabetical order.

function alphaOrder(stringEntered) {
  return stringEntered.split("").sort().join("");
}

console.log(alphaOrder("webdev"));

///02-arrays-3-3.md questions

//1. Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

function isFourLetters(arrayOfWords) {
  let result = [];
  for (word of arrayOfWords) {
    if (word.length == 4) result.push(word);
  }
  return result;
}

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));

//2. Already done (return month)

//3. Amplify the Multiples of 4

function amplify(upperLimit) {
  let result = [];
  for (let i = 1; i <= upperLimit; i++) {
    result.push(i % 4 === 0 ? i * 10 : i);
  }
  return result;
}

console.log(amplify(4));
console.log(amplify(25));

//4. Create a function that takes an array of numbers and return the number that's unique.

function unique(arrayEntered) {
  let sortedArray = arrayEntered.sort();
  let firstNum = sortedArray[0];
  let lastNum = sortedArray[sortedArray.length - 1];
  let baseNum = sortedArray[Math.ceil(sortedArray.length / 2)];
  return firstNum === baseNum ? lastNum : firstNum;
}

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));

//5. Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.

function wordRank(stringEntered) {
  let alphabet = [
    null,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let arrayOfWords = stringEntered.split(" ");
  let topWord;
  let topWordScore = 0;
  for (word of arrayOfWords) {
    let totalWordScore = 0;
    for (let i = 0; i < word.length; i++) {
      totalWordScore += alphabet.indexOf(word[i]);
    }
    if (totalWordScore > topWordScore) {
      topWord = word;
      topWordScore = totalWordScore;
    }
  }
  return topWord;
}

console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday."));

//6. Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

function hackerSpeak(stringEntered) {
  let result = [];
  for (let i = 0; i < stringEntered.length; i++) {
    let output;
    switch (stringEntered[i]) {
      case "a":
        output = "4";
        break;
      case "e":
        output = "3";
        break;
      case "i":
        output = "1";
        break;
      case "o":
        output = "0";
        break;
      case "s":
        output = "5";
        break;
      default:
        output = stringEntered[i];
        break;
    }
    result.push(output);
  }
  return result.join("");
}

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));

//Bonus:
//1. Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not.

function isSymmetrical(num) {
  let numAsString = num.toString();
  let reversedNumAsString = numAsString.split("").reverse().join("");
  return numAsString === reversedNumAsString ? true : false;
}

console.log(isSymmetrical(7227));
console.log(isSymmetrical(12567));
console.log(isSymmetrical(1112111));

//2. Create a function toCamelCase() that takes a single string in `snake_case` and converts it into `camelCase`.

function toCamelCase(snakeCaseString) {
  let arrayOfTerms = snakeCaseString.split("_");
  let result = "";
  for (let i = 0; i < arrayOfTerms.length; i++) {
    let currentWord = "";
    if (i != 0) {
      currentWord =
        arrayOfTerms[i].charAt(0).toUpperCase() + arrayOfTerms[i].slice(1);
    } else {
      currentWord = arrayOfTerms[i];
    }
    result += currentWord;
  }
  return result;
}

console.log(toCamelCase("hello_world"));
console.log(toCamelCase("javascript_is_fun"));

//3. Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word.

function pigLatin(stringEntered) {
  let arrayOfWords = stringEntered.slice(0, -1).split(" ");
  let resultingArray = [];
  for (word of arrayOfWords) {
    let newWord = "";
    if (
      word[0] === "a" ||
      word[0] === "e" ||
      word[0] === "i" ||
      word[0] === "o" ||
      word[0] === "u"
    ) {
      newWord = word + "way";
    } else {
      newWord = word.slice(1) + word[0] + "ay";
    }
    if (word[0] === word[0].toUpperCase()) {
      newWord = newWord[0].toUpperCase() + newWord.slice(1).toLowerCase();
    }
    resultingArray.push(newWord);
  }
  return resultingArray.join(" ");
}

console.log(pigLatin("Cats are great pets."));

// Exercises 03-loops-using-arrays
//1. Create a program that adds up the numbers in an array (of at least 3 numbers). **Bonus**: Print to screen both the sum and the product of these numbers.

function calcArraySum(arrayEntered) {
  let total = 0;
  let totalString = "";
  for (let num of arrayEntered) {
    total += num;
    totalString += num + " + ";
  }

  console.log(totalString.slice(0, -3) + " = " + total);
}

calcArraySum([1, 2, 3]);

//2. Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. **Bonus**: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

function greet(arrayOfNames) {
  for (let i = 0; i < arrayOfNames.length; i++) {
    let name = arrayOfNames[i];
    console.log("Hello " + name + "!");
    console.log(name + " is in position " + i);
  }
}

greet(["Sally", "Ilya", "Lewes", "Karl"]);

//3. Create an array of city names. Loop through the array and add the city names to a string.

let cityArray = ["Berlin", "Prague", "Paris"];
let cityString = "";
for (let city of cityArray) {
  cityString += city + ", ";
}
console.log(cityString.slice(0, -2));

//4. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.

function shiftIntegers(arrayEntered) {
  let resultingArray = [];
  for (let num of arrayEntered) {
    resultingArray.push(num % 2 === 0 ? num - 1 : num + 1);
  }
  return resultingArray;
}

console.log(shiftIntegers([3, 5, 2, 4]));

//5. Create a program that capitalises the first letter of each element in an array of names.

function capitalise(arrayOfNames) {
  let resultingArray = [];
  for (let i = 0; i < arrayOfNames.length; i++) {
    let name = arrayOfNames[i].toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    resultingArray.push(name);
  }
  return resultingArray;
}

console.log(capitalise(["samuel", "MARIA", "luke", "mary"]));

//6.  A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values.

function createSetFrom(arrayEntered) {
  let resultingArray = [];
  for (let i = 0; i < arrayEntered.length; i++) {
    if (!resultingArray.includes(arrayEntered[i])) {
      resultingArray.push(arrayEntered[i]);
    }
  }
  return resultingArray;
}

console.log(createSetFrom([1, 6, 6, 9, 9]));
console.log(createSetFrom([2, 2, 2, 2, 2, 2]));
console.log(createSetFrom([5, 10, 15, 20, 25]));

//7. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times".

function multiplyString(string, times) {
  let resultingArray = [];
  for (let i = 0; i < times; i++) {
    resultingArray.push(string);
  }
  return resultingArray;
}

console.log(multiplyString("example", 3));

//Bonus #1: Create a program that determines whether or not a given array is a factor chain.

function isFactorChain(arrayEntered) {
  for (let i = 1; i < arrayEntered.length; i++) {
    if (arrayEntered[i] % arrayEntered[i - 1] === 0) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isFactorChain([1, 2, 4, 8, 16, 32]));
console.log(isFactorChain([1, 1, 1, 1, 1, 1]));
console.log(isFactorChain([2, 4, 6, 7, 12]));
console.log(isFactorChain([10, 1]));

//file 04-nested-for-loops-using-arrays.md
//1. Write a program to construct the following pattern:

// ```
// *
// * *
// * * *
// * * * *
// ```

function makeStars(num) {
  //without nested loop
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "* ";
    console.log(result);
  }
}
makeStars(4);

function makeStarsTheHardWay(rows, cols) {
  //making things needlessly complicated
  for (let i = 0; i < rows; i++) {
    let stringToPrint = "";
    for (let x = 0; x <= i; x++) {
      stringToPrint += "* ";
    }
    console.log(stringToPrint);
  }
}

makeStarsTheHardWay(4, 4);

//2. Create a row-displayed output of values

function displayValues(arrayEntered) {
  for (let i = 0; i < arrayEntered.length; i++) {
    let innerArray = arrayEntered[i];
    console.log("Row " + i);
    for (let x = 0; x < innerArray.length; x++) {
      console.log(" " + innerArray[x]);
    }
  }
}
let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
displayValues(arr);

console.log();
console.log();
console.log();

//3. Write a program that will output the following using loops:
// ```
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// ```

function printWithLoops(upperLimit, repeats) {
  let firstString = "";
  let secondString = "";
  for (let i = 1; i <= upperLimit; i++) {
    for (let x = 0; x < repeats; x++) {
      firstString += i;
    }
  }
  for (let a = 0; a < repeats; a++) {
    for (let b = 0; b <= upperLimit; b++) {
      secondString += b;
    }
  }
  console.log(firstString);
  console.log(secondString);
}

printWithLoops(4, 3);
