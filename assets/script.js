// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numericNum = ["0","1","2","3","4","5","6","7","8","9",];
var specialCharactersOptions = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+",];
var passwordLength = 8 || 128;
var avaliable =[];


function writePassword() {
  var password = generatePassword();
  var completedPassword = document.querySelector("#password");
  
}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passwordLength = prompt ("How many characters would you like your password to contain? Type a number between 8 and 128")
  console.log(passwordLength)
  if (passwordLength < 8) {
    alert ("Not long enough! Password length must be at least 8 characters")
return null;
  }
  if (passwordLength > 128) {
    alert ("Too Long! Password length must be less that 128 characters")
return null;
  };

var lowerCase = window.confirm ('Would you like to use lower case letters in your password? eg. abcdefghijklmnopqrstuvwxyz');
  if (lowerCase == true) {
    avaliable = (avaliable || []).concat(lowerCaseLetters);
  } function lowerCase(){
  return lowerCase[Math.floor(Math.random()* lowerCase.length)];
  }console.log(lowerCaseLetters);

var upperCase = window.confirm ('Would you like to use upper case letters in your password? eg. ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  if (upperCase == true) {
    avaliable = avaliable.concat (upperCaseLetters);
  } function upperCase(){
  return upperCase[Math.floor(Math.random() * upperCase.length)];
  }console.log(upperCaseLetters);

  var numeric= window.confirm ('Would you like to use numbers in your password? eg. 1234567890');
  if (numeric == true) {
    avaliable = avaliable.concat (numericNum);
  } function numeric(){
  return numeric[Math.floor(Math.random() * numeric.length)];
  }console.log(numericNum);

  var specialCharacters= window.confirm ('Would you like to use numbers in your password? eg. !@##$%^&*()-_=+');
  if (specialCharacters == true) {
    avaliable = avaliable.concat (specialCharactersOptions);
  } function specialCharacters(){
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }console.log(numericNum);
  

  for (var i = 0; i < passwordLength; i++){
    var completedPassword = getRandom(avaliable)
  
  
    function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randElement = arr[randIndex];
  
      return randElement;
    }
  }
}