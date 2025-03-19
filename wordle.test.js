const { matchGuess } = require("./wordle.js");

/*
Test Strategy
Unit testing with mocking to test console.logs
1. Verify that the function returns the correct result for a guess that is completely correct. 
2. Verify that the function returns the correct result for a guess that is completely wrong.
3. Verify that the function returns the correct result for a guess that contains the correct letters but in the wrong position.
4. Verify that the function returns an error message for a guess that contains too many letters.
5. Verify that the function returns an error message for a guess that is too short.
6. Verify that the function returns the correct result for a guess that contains multiple instances of the same letter.
7. Verify that the method converting to uppercase works as expected.
8. Verify that the function returns an error message if the input consists of empty strings or whitespace.
9. Verify that the function returns an array of objects.
10. Verify that the function returns an array of objects in the same order as the guess.
11. Verify that the function handles special characters as intended.

These tests are considered complete as they thoroughly test both the logic and error handling of the function.
*/

describe("matchGuess function", () => {
  test("should return correct result for a completely correct guess", () => {
    const result = matchGuess("hello", "HeLLo");
    expect(result).toEqual([
      { letter: "H", result: "correct" },
      { letter: "E", result: "correct" },
      { letter: "L", result: "correct" },
      { letter: "L", result: "correct" },
      { letter: "O", result: "correct" },
    ]);
  });

  test("should return incorrect for a completely wrong guess", () => {
    const result = matchGuess("HEllo", "abcdf");
    expect(result).toEqual([
      { letter: "H", result: "incorrect" },
      { letter: "E", result: "incorrect" },
      { letter: "L", result: "incorrect" },
      { letter: "L", result: "incorrect" },
      { letter: "O", result: "incorrect" },
    ]);
  });

  test("should return misplaced for right letters in wrong place guess", () => {
    const result = matchGuess("emily", "yilme");
    expect(result).toEqual([
      { letter: "E", result: "misplaced" },
      { letter: "M", result: "misplaced" },
      { letter: "I", result: "misplaced" },
      { letter: "L", result: "misplaced" },
      { letter: "Y", result: "misplaced" },
    ]);
  });

  test("should handle multiple of same letter correctly", () => {
    const result = matchGuess("rraar", "hurry");
    expect(result).toEqual([
      { letter: 'R', result: 'misplaced' },
      { letter: 'R', result: 'misplaced' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'R', result: 'incorrect' }
    ]);
  });

  test("should remove all special characters from input", () => {
    const result = matchGuess("hello!","hello");
    expect(result).toEqual([
      { letter: "H", result: "correct" },
      { letter: "E", result: "correct" },
      { letter: "L", result: "correct" },
      { letter: "L", result: "correct" },
      { letter: "O", result: "correct" },
    ])
  })
});

describe("matchGuess error handling functions", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  test("should console.log error message when guess is longer than correct answer", () => {
    const result = matchGuess("hoolabadoola", "const");
    expect(result).toBeUndefined(); 
    expect(console.log).toHaveBeenCalled();
  });

  test("should console.log error message when correct answer is shorter than guess", ()=>{
    const result = matchGuess("short", "reallylong");
    expect(result).toBeUndefined();
    expect(console.log).toHaveBeenCalled();
  });
  
  test("should console.log error if input is empty or whitespace", () => {
    const result = matchGuess(""," ");
    expect(result).toBeUndefined();
    expect(console.log).toHaveBeenCalled();
  });
});
