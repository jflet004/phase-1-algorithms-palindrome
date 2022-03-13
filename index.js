function reverse(word) {
  const splitWord = word.split('');
  const reverseSplitWord = splitWord.reverse();
  const reversedWord = reverseSplitWord.join('');
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  // I had something different here. I used a for loop to iterate through the index value of two arrays but will return true as long as first and last letters were the same

  const wordBackwards = reverse(word);
  return word === wordBackwards;
}
/* 
  pseudocode:
  -split word input into a character array, reverse it then join together back as a string
  -if original input and reversed string match, return true.
*/
/*
  Add written explanation of your solution here:
  -A palindrum is a word that reads the same forward and backwards so each letter will be the same if they are in order or reversed. By converting the string into an array, I was able to use the reverse() array method to reverse the order of the letters and then I used join() to turn it back to a string. I then compared the original string with the reversed one and returned true if they matched.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here`
  console.log("");
  const array1 = 'tom'.split('');
  console.log("Expecting: ['t', 'o, 'm']");
  console.log('=>', array1);
  console.log("");

  console.log('Expecting: ["m", "o", "t"]');
  console.log('=>', array1.reverse());
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");

  console.log("Expecting: tobor");
  console.log("=>", reverse("robot"));
  console.log("");
}

module.exports = isPalindrome;
