import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>`;

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // return "Let's Start";
  // 1 Example
  // const convertStrToArray = str.split("");
  // const reverseArray = convertStrToArray.reverse((text) => text);
  // const convertArrayToStr = reverseArray.join("");
  // return convertArrayToStr;
  // 2 Example
  // let reverseStr = "";
  // const strLength = str.length;
  // for (let index = strLength; index >= 0; index--) {
  //   if (index < strLength) reverseStr = reverseStr + str[index];
  // }
  // return reverseStr;
  // 3 Example
  // let reverseStr = "";
  // const strLength = str.length;
  // for (let index = 0; index < strLength; index++) {
  //   reverseStr = str[index] + reverseStr;
  // }
  // return reverseStr;
  // 4 Example
  // let reverseStr = "";
  // for (let character of str) {
  //   reverseStr = character + reverseStr;
  // }
  // return reverseStr;
  // 5 Example
  // let reverseStr = "";
  // str.split("").forEach((string) => {
  //   reverseStr = string + reverseStr;
  // });
  // return reverseStr;
  // 6 Example
  // let reverseStr = str.split("").reduce((revCharacter, character) => {
  //   return (revCharacter = character + revCharacter);
  // }, "");
  // return reverseStr;
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // 1 Example
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}

// Call Function
const output = isPalindrome("racecar");

console.log("racecar: isPalindrome", output);
