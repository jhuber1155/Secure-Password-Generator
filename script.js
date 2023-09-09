//  Assignment Code
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["\u0020", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028","\u0029", "\u002A","\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F", "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"]

// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
  var generatePassword = function() {
      var userChoice = window.prompt("Please choose how long you would like to make your new password. It must contain between 8 and 128 characters.");
      if(userChoice<8){
        window.alert("Please choose a password length 8 characters or longer for a stronger password");
        return generatePassword();
      }else if(userChoice>128){
        window.alert("Please choose a smaller password length that can be managable");
        return generatePassword();
      };
    
  var intendedNum = window.confirm("You would like to make your password " + userChoice + " characters long?");
      if(!intendedNum){
        return generatePassword();
      }
  }
// }

generatePassword();       


  
//

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
