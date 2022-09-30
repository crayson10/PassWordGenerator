
var generateBtn = document.querySelector("#generate")
//get our charaters and numbers into text
//array of numberss, specials , uppercase, lowercas
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var characterNum = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperNum = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// var specialChars = ["!","@","#","$","%","^","&","*","+"];

// var upperSpecials = ["!","@","#","$","%","^","&","*","+"];

//our global variable
// function of password- need to make password defined 
// functions take input and return an output-

function inputPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password
}

generateBtn.addEventListener("click",inputPassword)

function generatePassword(){
  //check length
  //prompt/confirm for types of characters
  var charLength = prompt("How many characters do you want in the generated password?");
  var whichCase = confirm("Do you want uppercase letters in the generated password?");
  var num = confirm("Do you want numbers in this generated password ?");
  // var specials = confirm(" Would you like special characters in the password that is generated");
  //prompt user for length

  //store the responses
let password = '';

  console.log(charLength);
  console.log(whichCase);
  console.log(num);
  // console.log(specials);

//based on the responses trim/build available pool of characters
//build password letter by letter
//generate random int within range of available chars length 
//add char to result
//do until length === desired password lengt
//add event listener to generate button
  // YES Numbers | YES Uppercase |
  if(num === true && whichCase === true){
  for(var i = 0; i <charLength; i++){

      charPick = upperNum[Math.floor(Math.random()*upperNum.length)];
      console.log(charPick);
      password = password.toString() +charPick.toString();
      console.log(password);
    }
  }  
//  NO Numbers | YES Uppercase |
    else if(num !== true && whichCase === true){
      for(var i = 0; i <charLength; i++){

      charPick = upperChars[Math.floor(Math.random()*upperChars.length)];
      console.log(charPick);
      password = password.toString() +charPick.toString();
      console.log(password);
    }
  }
//  YES numbers | NO Uppercase | 
    else if(num === true && whichCase !== true){
      for(var i = 0; i <charLength; i++){
        
        charPick = characterNum[Math.floor(Math.random()*characterNum.length)];
        console.log(charPick);
        password = password.toString() +charPick.toString();
        console.log(password);}
}
// NO Numbers | NO Uppercase |
    else if(num !== true && whichCase !== true){
      for(var i = 0; i <charLength; i++){

        charPick = characters[Math.floor(Math.random()*characters.length)];
        console.log(charPick);
        password = password.toString() +charPick.toString();
        console.log(password);} 
    }
    return password;
  }

