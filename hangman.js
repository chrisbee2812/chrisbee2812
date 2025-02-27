const wordDisplay = document.getElementById('word-display');
const guessedLettersDisplay = document.getElementById('guessed-letters');
const attemptsDisplay = document.getElementById('attempts');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resetButton = document.getElementById('reset-button');
const message = document.getElementById('message');

const words = ['javascript', 'hangman', 'developer', 'openai', 'programming'];
let selectedWord = '';
let guessedLetters = [];
let attemptsLeft = 6;

// Initialize the game
function initGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attemptsLeft = 6;
    updateDisplay();
    message.textContent = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
}

// Update the display
function updateDisplay() {
    // Display the word with guessed letters
    const displayWord = selectedWord
        .split('')
        .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');
    wordDisplay.textContent = displayWord;

    // Display guessed letters
    guessedLettersDisplay.textContent = guessedLetters.join(', ');

    // Display remaining attempts
    attemptsDisplay.textContent = attemptsLeft;
}

// Check if the player has won
function checkWin() {
    return selectedWord
        .split('')
        .every(letter => guessedLetters.includes(letter));
}

// Check if the player has lost
function checkLose() {
    return attemptsLeft === 0;
}

// Handle a guess
function handleGuess() {
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (!guess || guessedLetters.includes(guess)) {
        message.textContent = 'Please enter a valid letter.';
        return;
    }

    guessedLetters.push(guess);

    if (!selectedWord.includes(guess)) {
        attemptsLeft--;
        message.textContent = `Incorrect! ${attemptsLeft} attempts remaining.`;
    } else {
        message.textContent = 'Correct guess!';
    }

    updateDisplay();

    if (checkWin()) {
        message.textContent = 'Congratulations! You won!';
        endGame();
    } else if (checkLose()) {
        message.textContent = `Game over! The word was "${selectedWord}".`;
        endGame();
    }
}

// End the game
function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
}

// Event listeners
guessButton.addEventListener('click', handleGuess);
resetButton.addEventListener('click', initGame);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleGuess();
    }
});

// Start the game
initGame();