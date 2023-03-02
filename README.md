# 03 JavaScript: Password Generator

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numeric = ["0","1","2","3","4","5","6","7","8","9",];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+",];
var passwordLength = 8 || 128;



// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt ("How many characters would you like your password to contain")
  console.log(length)
  if (length < 8) {
    alert ("Password length must be at least 8 characters")
return null;
  }
  if (length > 128) {
    alert ("Password length must be less that 128 characters")
return null;
  };
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 var islowerCaseLetters = confirm ("Would you like to include lower case characters")
  console.log(islowerCaseCharacters)

  var isupperCaseLetters = confirm ("Would you like to include upper case characters")
  console.log(isupperCaseCharacters)

  var isnumericCharacters = confirm ("Would you like to include upper case characters")
  console.log(isnumericCharacters)

  var isspecialCharacters = confirm ("Would you like to include upper case characters")
  console.log(isnumericCharacters)

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  const length = passwordLength.value;
  const lowerCase = includelowerCase.checked;
  const upperCase = includeupperCase.checked;
  const numbers = includenumbers.checked;
  const specialCharacters = includespecialCharacters.checked;
  result.value = generatePassword(lowerCase, upperCase, numbers, specialCharacters, length);
};

function generatePassword(lowerCase, upperCase, numbers, specialCharacters, length) {
  let generatedPassword = "";
  let variationsCount = [lowerCase, upperCase, numbers, specialCharacters].length;
  for (let i = 0; i < length; i += variationsCount) {
    if (lowerCase) {
      generatedPassword += getRandomlowerCase();
    }
    if (upperCase) {
      generatedPassword += getRandomupperCase();
    }
    if (upperCase) {
      generatedPassword += getRandomupperCase();
    }
    if (number) {
      generatedPassword += getRandomNumber();
    }
    if (specialCharacters) {
      generatedPassword += getRandomspecialCharacters();
    }
    generatedPassword += getRandomLower();
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
