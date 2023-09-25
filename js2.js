const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sortAlphabetically(inputString) {
    var charArray = inputString.split('');
    var sortedArray = charArray.sort();
    var sortedString = sortedArray.join('');
    return sortedString;
}

rl.question('Enter a string: ', (userInput) => {
  const sortedString = sortAlphabetically(userInput);
  console.log("Original String:", userInput);
  console.log("Sorted String:", sortedString);

  rl.close();
});

