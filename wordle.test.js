const { matchGuess } = require("./wordle.js");

/*
Skriv minst två tester, troligtvis fler, som verifierar att funktionen fungerar som den ska

Teststrategi
1. Testa att funktionen returnerar rätt resultat för en gissning som är helt rätt. KLAR
2. Testa att funktionen returnerar rätt resultat för en gissning som är helt fel. KLAR
3. Testa att funktionen returnerar rätt resultat för en gissning som innehåller rätt bokstäver men på fel plats. KLAR
4. Testa att funktionen returnerar felmeddelande för en gissning innehåller för många bokstäver. KLART
5. Testa att funktionen returnerar felmeddelande för en gissning som är för kort. KLART
6. Testa att funktionen returnerar rätt resultat för en gissning som innehåller flera av samma bokstav. KLAR
7. Testa att metoden som gör om till upperCase funkar som det ska. GÖR DET REDAN I ANDRA TEST
8. Testa att funktionen returnerar felmeddelande om det är tomma strängar eller whitespace som input. KLART
9. Testa att funktionen returnerar en array med objekt. GÖR DET REDAN I ANDRA TEST
10. Testa att funktionen returnerar en array med objekt som har samma ordning som i gissningen. GÖR DET REDAN I ANDRA TEST
11. Testa att funktionen hanterar specialtecken på önskat sätt. KLAR
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
    expect(console.log).toHaveBeenCalledWith(
      "Your guess and the correct answer must have the same length, please try again."
    );
  });
  test("should console.log error message when correct answer is shorter than guess", ()=>{
    const result = matchGuess("short", "reallylong");
    expect(result).toBeUndefined();
    expect(console.log).toHaveBeenCalledWith(
        "Your guess and the correct answer must have the same length, please try again."
    );
  });
  test("should console.log error if input is empty or whitespace", () => {
    const result = matchGuess(""," ");
    expect(result).toBeUndefined();
    expect(console.log).toHaveBeenCalledWith("Input is empty, please try again.");
  });
});
