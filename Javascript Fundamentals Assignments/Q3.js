// Function to search for specific character classes in a string and return matches
function findCharacterClass(str) {
  // Define regular expression patterns for different character classes
  let digitPattern = /\d/g; // Match digits (0-9)
  let uppercasePattern = /[A-Z]/g; // Match uppercase letters
  let lowercasePattern = /[a-z]/g; // Match lowercase letters
  let specialCharPattern = /[^a-zA-Z0-9\s]/g; // Match special characters

  // Find matches for each character class
  let digits = str.match(digitPattern) || [];
  let uppercaseLetters = str.match(uppercasePattern) || [];
  let lowercaseLetters = str.match(lowercasePattern) || [];
  let specialCharacters = str.match(specialCharPattern) || [];

  // Return an object containing matches for each character class
  return {
    digits: digits,
    uppercaseLetters: uppercaseLetters,
    lowercaseLetters: lowercaseLetters,
    specialCharacters: specialCharacters,
  };
}

// Test the findCharacterClass function with a sample string
let sampleString = "Hello123! How are you?";
let matches = findCharacterClass(sampleString);

// Display the matches for each character class
console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialCharacters);
