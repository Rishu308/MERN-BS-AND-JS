function reverseNumber(x) {
  // Convert the number to a string
  let strNum = x.toString();

  // Reverse the string
  let reversedStr = strNum.split('').reverse().join('');

  // Convert the reversed string back to a number
  let reversedNum = parseInt(reversedStr);

  return reversedNum;
}

// Example usage:
let x = 32243;
let reversed = reverseNumber(x);
console.log(reversed); // Output: 34223