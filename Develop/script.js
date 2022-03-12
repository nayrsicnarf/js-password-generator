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
//1. Get user preferences 
//2. Create buckets for each character type 
//3. Identify and collect the buckets the user has chosen 
//4. Create a guarenteed collection
//5. Create a password variable 
//6. Randomly draw a character 
//7. Put character on the password variable 
//8. Repeat 6 and 7 as many times as specified 
//9. Loop through the guaranteed elements, replace elements in password array
//10. Join characters in the password array into a string 
//11. Return the password string 


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

    // Set all booleans to false
    var lowerBoolean = upperBoolean = numericBoolean = specialBoolean = false;

    // if statement to check and make sure at least one value is selected
    if (lowerBoolean === false && upperBoolean === false && numericBoolean === false && specialBoolean === false) {
      var lowerBoolean = confirm("Do you want your password to contain a lowercase character? Press 'OK' for yes or 'Cancel' for no");
      var upperBoolean = confirm("Do you want your password to contain a uppercase character? Press 'OK' for yes or 'Cancel' for no");
      var numericBoolean = confirm("Do you want your password to contain a numerical character? Press 'OK' for yes or 'Cancel' for no");
      var specialBoolean = confirm("Do you want your password to contain a special character? Press 'OK' for yes or 'Cancel' for no");
    }

    if (lowerBoolean && upperBoolean && numericBoolean && specialBoolean) {
      return createPass(lowerString, upperString, numericString, specialString);
      } else if (lowerBoolean && upperBoolean && numericBoolean) {
      return createPass(lowerString, upperString, numericString);
      } else if (lowerBoolean && upperBoolean && specialBoolean) {
      return createPass(lowerString, upperString, specialString);
      } else if (lowerBoolean && numericBoolean && specialBoolean) {
      return createPass(lowerString, numericString, specialString);
      } else if (lowerBoolean && upperBoolean) {
      return createPass(lowerString, upperString);
      } else if (lowerBoolean && numericBoolean) {
      return createPass(lowerString, numericString);
      } else if (lowerBoolean && specialBoolean) {
      return createPass(lowerString, specialString);
      } else if (upperBoolean && numericBoolean && specialBoolean) {
      return createPass(upperString, numericString, specialString);
      } else if (upperBoolean && numericBoolean) {
      return createPass(upperString, numericString);
      } else if (upperBoolean && specialBoolean) {
      return createPass(upperString, specialString);
      } else if (upperBoolean) {
      return createPass(upperString);
      } else if (numericBoolean && specialBoolean) {
      return createPass(numericString, specialString);
      } else if (numericBoolean) {
      return createPass(numericString);
      } else if (specialBoolean) {
      return createPass(specialString);
      } else if (lowerBoolean) {
      return createPass(lowerString);
      }

      return createdPassword;
}