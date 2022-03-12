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



