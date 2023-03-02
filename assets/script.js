// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numbers = ["0","1","2","3","4","5","6","7","8","9",];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+",];
var passwordLength = 8 || 128;


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = prompt ("How many characters would you like your password to contain? Type a number between 8 and 128")
  console.log(length)
  if (length < 8) {
    alert ("Not long enough! Password length must be at least 8 characters")
return null;
  }
  if (length > 128) {
    alert ("Too Long! Password length must be less that 128 characters")
return null;
  };

var lowerCase= parseInt (window.confirm ('Would you like to use lower case letters in your password? eg. abcdefghijklmnopqrstuvwxyz'));
  if (lowerCase == true) {
  avalaible = avalaible.concat (lowerCase)
  } function lowerCase(){
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
  };

var upperCase= parseInt (window.confirm ('Would you like to use upper case letters in your password? eg. ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
  if (upperCase == true) {
  avalaible = avalaible.concat (upperCase)
  } function upperCase(){
  return upperCase[Math.floor(Math.random() * upperCase.length)];
  };

  var numbers= parseInt (window.confirm ('Would you like to use numbers in your password? eg. 1234567890'));
  if (numbers == true) {
  avalaible = avalaible.concat (numbers)
  } function numbers(){
  return numbers[Math.floor(Math.random() * numbers.length)];
  };

  var specialCharacters= parseInt (window.confirm ('Would you like to use numbers in your password? eg. !@##$%^&*()-_=+'));
  if (specialCharacters== true) {
  avalaible = avalaible.concat (specialCharacters)
  } function specialCharacters(){
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  };
} 
