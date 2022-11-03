// random value generated
var y = Math.floor(Math.random() * 10 + 1);
  
// counting the number of guesses

// made for correct Guess

  
// function for number guessed by user     
var y = document.getElementById("guessField").value;


if(x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}  


if(x == y)
{
    alert("CONGRAUTIONS!!" + playername +" YOU GUSSED IT RIGHT IN" + guess+ "GUESS");
    guess=1;
}


function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}