function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('');
  return reversedWord === word;
}

/* 
  Add your pseudocode here
  -Split the given word into array of characters
  -Reverse the array
  -Join the reversed array back into string
  -Compare the reversed string with the original string to check if they are the same
  -If they are the same, return true. Otherwise, return false.
*/

/*
  Add written explanation of your solution here
  This solution uses the split, reverse, and join methods to reverse the given word and then compares the reversed word with the original word to determine if it is a palindrome. If they are the same, the function returns true; otherwise, it returns false.
   The split method is used to split the word into an array of characters. The reverse method is used to reverse the array of characters. Finally, the join method is used to join the reversed array back into a string.
  If the reversed word is the same as the original word, then it is a palindrome, and the function returns true. Otherwise, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
