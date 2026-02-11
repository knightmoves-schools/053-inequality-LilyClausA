function guessNumber(guess){
    if (guess != 25){
        return "not it";
    }
}

function strictGuessNumber(guess){
    if (guess !== 25){
        return "not it";
    }

}


//should create a function named guessNumber that takes a guess and returns 
//the string not it if the number is not equivalent to 25

//should not return not it when the number 25 is passed in as an argument 
// to guessNumber

//should not return not it when the string 25 is passed in as an argument
//  to guessNumber

//should create a function named strictGuessNumber that takes a guess and 
// returns not it only if the guess is a number that is strictly not equal to 25

//should not return not it when the number 25 is passed in as an argument to 
// guessNumber

//should return not it when the string 25 is passed in as an argument to 
// strictGuessNumber
