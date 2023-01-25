/**
 * @author : Koua Ekaza Wilfried
 * @description :  Make A Complete Hanging Game In Javascript
 * @param : operator : function
 * @date: 25/01/2023
 * 
 **/


/*
Create the “Hangman” game. Your game will run in the console.
You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.
*/

const word = prompt("Player 1: Please give us a word (The word must have a minimum of 8 letters)");
// The word must have a minimum of 8 letters

if (word.length < 8) {
    console.log("The word must have a minimum of 8 letters");
}else {
    
// Hidden the word with stars
    let hiddenWord = '';
    for (let i = 0; i < word.length; i++) {
        hiddenWord += '*';
    }
    console.log(hiddenWord); 

// We count the number of chances 
    let chances = 10;
    let guesses = [];
    while (chances > 0 && hiddenWord.indexOf('*') !== -1) {
   // At this point continuously prompt player 2 for a letter

        let letter = prompt("Player 2, give us a number :");

        // Check if the word is found

        if (guesses.indexOf(letter) !== -1) 
            return console.log("You successfuly  !");
            // give positions
        guesses.push(letter);
        console.log("Suppositions :", guesses);

        if (word.indexOf(letter) !== -1) {

            console.log("Bonne supposition !");

            let temp = '';

            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    temp += letter;
                } else {
                    temp += hiddenWord[i];
                }
            }
            hiddenWord = temp;
            console.log(hiddenWord); 
        } else {
            console.log("Bad solution !");
            chances--; // décrémenter le compteur de chances
            console.log("Rest of luck :", chances);
        }
    }
    return  (hiddenWord.indexOf('*') === -1) ? console.log("CONGRATS YOU WIN !") : console.log("YOU LOSE !") ;    
}