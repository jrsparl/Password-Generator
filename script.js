// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //debugger
  var password = generatePassword();
  console.log("Password is " + password)
  window.alert("Your password is " + password)
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}




var charType = [
  {
    name: "Lowercase",
    Selected: false,
    GenerateRandom: function(){
   
      var AlphaIndex = Math.floor(Math.random() * 26);
      var LcLetterSelect = alphaArray[AlphaIndex]
      return LcLetterSelect.toLowerCase();
    }
  },
  {
    name: "Uppercase",
    Selected: false,
    GenerateRandom: function(){

      var AlphaIndex2 = Math.floor(Math.random() * 26);
      var UcLetterSelect = alphaArray[AlphaIndex2]
      return UcLetterSelect;
    }
  },
  {
    name: "Numeric",
    Selected: false,
    GenerateRandom: function(){

      var RanNum = Math.floor(Math.random()*10);
      return RanNum;
    }
  },
  {
    name: "Special",
    Selected: false,
    GenerateRandom: function(){

      var SpecIndex = Math.floor(Math.random()*4);
      var SpecSelect = specialCharArray[SpecIndex];
      return SpecSelect;
    }
  }
];

//var charType = ["Lowercase","Uppercase","numeric","special characters"]
var alphaArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharArray = ["!","?","-","$"]



function generatePassword() {
  
  var PasswordGen = ""
  var validateCnumber = 0;
  while (validateCnumber === 0) {
  var charnumber = window.prompt("Please choose a length of password no less than 8 and no more than 128.")
    if (charnumber < 8 || charnumber > 128){
      window.alert("The number you selected is outside the necessary range. Please select a valid number.")
    }else {
      validateCnumber = 1;
      //return charnumber;
    }
  };
  confirmcharType();
  //debugger
  for (var i=0; i < charnumber - 1; i++){
      for (var x = 0; x < charType.length; x++){
        var CharTypeCheck = charType[x]
        if (CharTypeCheck.Selected === true){
          PasswordGen = PasswordGen + CharTypeCheck.GenerateRandom();
          if (x != charType.length -1){
            if (i === charnumber -1){
              break;
            }
            i++
          }
        }
      }
  }
  return PasswordGen;
};

function confirmcharType(){
  var CharCounter = 0
  //loop to select character types
  for (var i=0; i < charType.length; i++){
      var CharTypeSelect = charType[i]
      var Chartypeconfirm = window.confirm("Would you like to use " + CharTypeSelect.name + " characters in your password?")
      if(Chartypeconfirm){
        CharTypeSelect.Selected = true
        CharCounter++
      }
  }
  //Validate a character type has been selected
      if (CharCounter = 0){
        window.alert("You must select at least one character type to continue, please try again.")
        confirmcharType();
      }
};







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
