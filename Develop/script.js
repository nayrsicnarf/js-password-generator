// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// THE ABOVE CODE DEALS WITH:
// CREATING AND CLICKING THE GENERATE PASSWORD BUTTON
// PRINTING THE PASSWORD
//
//
///// DO NOT TOUCH CODE ABOVE THIS LINE /////
////////////////////////////////////////////////////////////////


// Creating global variable list of possible characters
var lowerString = "abcdefghijklmnoprstuvwxyz";
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericString = "1234567890";
var specialString = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Creating function generatePassword
function generatePassword() {

  var passwordLength = "";          // Sets the length of the password
  var possChar = "";                // Sets the possible characters based off the password length
  var createdPassword = "";         // Sets the randomly generated password

  // While loop to validate user input. Checks if user hits cancel or if a number out of range is chosen
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please choose a length from 8 to 128 characters for your password.");
    if (passwordLength === null) {
      return "User has selected Cancel.";
    } else if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
       return "Password must be between 8-128 characters. Please try again."
    } else passwordLength = parseInt(passwordLength);
  }
  
  // Set all booleans to false
  var lowerBoolean = upperBoolean = numericBoolean = specialBoolean = false;

  // if statement to check and make sure at least one value is selected
  if (lowerBoolean === false && upperBoolean === false && numericBoolean === false && specialBoolean === false) {
    var lowerBoolean = confirm("Do you want your password to contain a lowercase character? Press 'OK' for yes or 'Cancel' for no");
    var upperBoolean = confirm("Do you want your password to contain a uppercase character? Press 'OK' for yes or 'Cancel' for no");
    var numericBoolean = confirm("Do you want your password to contain a numerical character? Press 'OK' for yes or 'Cancel' for no");
    var specialBoolean = confirm("Do you want your password to contain a special character? Press 'OK' for yes or 'Cancel' for no");
  }

   // if statemnents to verify possible characters chosen based off user inputs
   if (lowerBoolean) {
    possChar = possChar.concat(lowerString)
  }
  if (upperBoolean) {
    possChar = possChar.concat(upperString)
  }
  if (numericBoolean) {
    possChar = possChar.concat(numericString)
  }
  if (specialBoolean) {
    possChar = possChar.concat(specialString)
  }
  if (!lowerBoolean && !upperBoolean && !numericBoolean && !specialBoolean) {
    return "You must select at least one character to generate your password. Please try again."
  }
  
  // for loop to randomly choose the characters that generates the password
  for (let i = 0; i < passwordLength; i++) {
    createdPassword += possChar[Math.floor(Math.random() * possChar.length)]
  }

  return createdPassword;
}