const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = word => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
// const disableLetterButton = buttonEl => {
//   buttonEl.disabled = true;
// };

const disableLetterButton = buttonEl => {
  // loop throug buttonEl array and create event listener for each button
  for (const button of buttonEl) {  
    // evt gets element that was actually clicked
    button.addEventListener('click', (evt) => {
      // once sth is clicked, update target of clicking event disabled prop to true
      evt.target.setAttribute('disabled', 'true');    
  });}
};

// CALL disableLetterButton
// get array all elements within container with id=letter-button id
const listButtons = document.querySelectorAll('#letter-buttons');
// call disableLetterButton on all buttons
disableLetterButton(listButtons);


// Return `true` if `letter` is in the word.
//
const isLetterInWord = letter => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = letter => {
  // select the div w/ class = letter
  const letterDivs = document.querySelectorAll(`div.${letter}`);
  console.log(letterDivs)
  // create paragraph or text in div showing letter
  // for (const letterDiv of letterDivs) {
  //   letterDivs.insertAdjacentHTML('beforeend', `<p>${letter}</p>`);
  // }
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // Replace this with your code
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  // add an event handler to handle clicking on a letter
  
  // if letter is in word, execute handleCorrectGuess
  document.querySelector('button').addEventListener('click', (evt) => {
    const clickedBtn = evt.target;
    // check if clickedBtn's letter is in word
    if (isLetterInWord(clickedBtn)) {
      console.log('in word');
      handleCorrectGuess(clickedBtn);
    }
    else {
      // else, handleWrongGuess
      handleWrongGuess();
    }
  });  
  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();
