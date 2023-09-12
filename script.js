// Created the pools of variable to be used in creating the password itself
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//I used Unicode here because I could not easily generate special characters without them running into issues or problems. The text editor kept trying to make them into something other than I wanted so I hard-coded them in unicode. The key for unicode can be found here: https://www.w3schools.com/charsets/ref_utf_basic_latin.asp
var specialChar = ["\u0020", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028","\u0029", "\u002A","\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F", "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"];

//Created several variables to call later and linked the corresponding HTML sections to their javascript.
var userChoice;
var totalChar;
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
//created an empty string to hold the characters from generatePassword() until the userChoice number was reached.
var password = "";

//This function generates a random array from the users selected criteria.
function generatePassword(){
   //I created my array from the userChoices and then combine them and shuffle them to create a truly random array. I used the 'Fisher-Yates Sorting Alogrithm' found here: https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/ 
    var shuffle = function(){
      for (var i = totalChar.length-1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
        [totalChar[i], totalChar[j]] = [totalChar[j], totalChar[i]];
      };return totalChar;
    };
    //I took the shuffled array and then drew a random character from the randomized array based on the userChoice number for the iteration in my for loop.
    var shuffledArray = shuffle(totalChar);
    console.log(shuffledArray);
    console.log(totalChar);
    for (var i = 0; i < userChoice; i++){
      var index = Math.floor(Math.random() * shuffledArray.length);
      password = password + shuffledArray[index];
      console.log(password);
    };
    return password;
  };

function writePassword() {
// Wrote a series of window prompts to determine how long you would like to make your password. If the length was too short or too long, or if you did not enter an amount, it would prompt you to the start to enter an appropriate amount. A confirmation window also appears which will allow you to go back and change your answer. 
  userChoice = window.prompt("Please choose how long you would like to make your new password. It must contain between 8 and 128 characters.");
    console.log(userChoice);
  if(userChoice<8){
    window.alert("Please choose a password length 8 characters or longer for a stronger password");
    return;
  }else if(userChoice>128){
    window.alert("Please choose a smaller password length that can be managable");
    return;
  };
  var intendedNum = window.confirm("You would like to make your password " + userChoice + " characters long?");
    if(!intendedNum){
    return;
    };
// This code creates a series of confirmation windows asking whether or not you would like to include the follow possibilities when creating your password in order: asking if you want number, lowercase letters, uppercase letters, and special characters. It would then take your preferences and concat them into a large array containing your preferences. If you chose none, it would prompt you to choose at least one in order to make a password.
  var stringOfNum = window.confirm("Would you like to include numbers in your password?"); 
  var stringOfLower = window.confirm("Would you like to include lowercase letters in your password?");
  var stringOfUpper = window.confirm("Would you like to include uppercase letters in your password?");
  var stringOfSpecial = window.confirm("Would you like to include special characters in your password?");
//This if/else statement starts with an empty array and then pushes the corresponding array into it if the user selected the according preference (numbers, lowercase letters, uppercase letters, special characters). If they did not choose a parameter, an alert window will pop up letting them know that they need to choose at least one in order to create their password.
  totalChar = [];
    if(stringOfNum) {
      totalChar = totalChar.concat(numeric);
    };
    if(stringOfLower){
      totalChar = totalChar.concat(lowerCase);
    };
    if(stringOfUpper){
      totalChar = totalChar.concat(upperCase);
    };
    if(stringOfSpecial){
      totalChar = totalChar.concat(specialChar)
    }

  if(!stringOfNum && !stringOfLower && !stringOfUpper && !stringOfSpecial){
    window.alert("You must choose at least one parameter to make your password with");
    return;
  };
  //The password string is filled and the finalpassword fills in the corresponding HTML linked text box, allowing the user to see the password they generated with their click.
    password = "";
    var finalpassword = generatePassword();
    passwordText.value = finalpassword;
   
    };
  //This listener even is waiting for the user to click on the button in order to start running the writePassword() function.
  generateBtn.addEventListener('click', writePassword);