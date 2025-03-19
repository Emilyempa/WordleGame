/*
Algoritm

1. Input is a a console.log(guess, correct).
2. Check if the input is empty or consist only of whitespace:
 - Return an error message if any input is empty or only whitespace.
3. Remove special characters and whitespace, and convert input to uppercase.
4. Check the lengths of guess and correct:
 -  Return an error message if the lengths are not equal.
5. Convert the strings to arrays of letters.
6. Create an empty array to store results.
7. Make a copy of the correct array.
8. First loop (to handle "correct"):
   - Loop through each letter in guess (index i):
     a. If the letter at the same index in correct is the same:
        - Add an object to the results array with: 
        {"letter": letter, "result": "correct"}.
        - Mark the letter as used in the correct copy (set it to null).
     b. If the letter is not the same:
        - Add null to the results array as a temporary marker.
9. Second loop (to handle "misplaced" and "incorrect"):
    - Loop through each letter in guess (index i) where the result is null:
      a. If the letter exists in the correct copy:
         - Add an object to the results array with:
           {"letter": letter, "result": "misplaced"}.
         - Mark the letter as used in the correct copy (set it to null).
      b. If the letter does not exist in the correct copy:
         - Add an object to the results array with the attributes:
           {"letter": letter, "result": "incorrect"}.
10. Print the results array.
11. Return the results array.
*/

function matchGuess(guess, correct) {
  if (!guess.trim() || !correct.trim()) {
    console.log("Input is empty, please try again.");
    return;
  }

  guess = guess.replace(/\W/g, '').toUpperCase();
  correct = correct.replace(/\W/g, '').toUpperCase();

  if (guess.length !== correct.length) {
    console.log(
      "Your guess and the correct answer must have the same length, please try again."
    );
    return;
  }

  const guessArray = Array.from(guess);
  const correctArray = Array.from(correct);
  const resultArray = [];
  const correctCopy = [...correctArray];

  guessArray.forEach((letter, i) => {
    if (letter === correctArray[i]) {
      resultArray.push({ letter: letter, result: "correct" });
      correctCopy[i] = null;
    } else {
      resultArray.push(null);
    }
  });

  guessArray.forEach((letter, i) => {
    if (resultArray[i] === null) {
      if (correctCopy.includes(letter)) {
        resultArray[i] = { letter: letter, result: "misplaced" };
        correctCopy[correctCopy.indexOf(letter)] = null;
      } else {
        resultArray[i] = { letter: letter, result: "incorrect" };
      }
    }
  });

  console.log(resultArray);
  return resultArray;
}

module.exports = { matchGuess };