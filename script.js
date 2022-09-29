// Assignment Code
var generateBtn = document.querySelector("#generate")
//get our charaters and numbers into text
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var characterNum = ["0","1","2","3","4","5","6","7","8","9"];
var specialSymbols = ["!","@","#","$","%","^","&","*","+"];

var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var upperNum = ["0","1","2","3","4","5","6","7","8","9"];

//our global variable

//array of numberss, specials , uppercase, lowercas
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password
}

function generatePassword(){
  var charLength = prompt("How many characters do you want in the generated password?");
  var whichCase = confirm("Do you want uppercase letters in the generated password?");
    var num = confirm("Do you want numbers in this generated password ?");
//prompt user for length
//check length
//prompt/confirm for types of characters
//store the responses
//based on the responses trim/build available pool of characters
//build password letter by letter
//generate random int within range of available chars length 
//add char to result
//do until length === desired password lengt
return 'Crayson'  
 
//add event listener to generate button


//____________________________________________________________________________
// 
 
passwordText.value= password
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  
  // This creates a local variable for the password instead of getting the DOM object with id="password"
  let password = '';

  console.log(charLength);
  console.log(whichCase);
  console.log(num);

  // if uppercase and numbers are confirmed
  if(num === true && whichCase === true){
    for(var i = 0; i <charLength; i++){

      charPick = upperNum[Math.floor(Math.random()*upperNum.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);



    }
  }  
//if uppercase but no numbers
    else if(num != true && whichCase === true){
      for(var i = 0; i <charLength; i++){

      charPick = upperChars[Math.floor(Math.random()*upperChars.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);



    }
  }
// numbers no uppercase
    else if(num === true && whichCase != true){
      for(var i = 0; i <charLength; i++){

        charPick = characterNum[Math.floor(Math.random()*characterNum.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);       
      }

    }
    else if(num != true && whichCase != true){
      for(var i = 0; i <charLength; i++){

        charPick = characters[Math.floor(Math.random()*characters.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);


  } 
    }
    return password;
}