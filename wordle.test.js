const { matchGuess } = require('./wordle.js');


/*
Skriv minst två tester, troligtvis fler, som verifierar att funktionen fungerar som den ska
Dokumentera er teststrategi med kommentarer i testkoden

Teststrategi
1. Testa att funktionen returnerar rätt resultat för en gissning som är helt rätt.
2. Testa att funktionen returnerar rätt resultat för en gissning som är helt fel.
3. Testa att funktionen returnerar rätt resultat för en gissning som innehåller rätt bokstäver men på fel plats.
4. Testa att funktionen returnerar felmeddelande för en gissning som är för lång.
5. Testa att funktionen returnerar felmeddelande för en gissning som är för kort.
6. Testa att funktionen returnerar rätt resultat för en gissning som innehåller flera av samma bokstav.
7. Testa att metoden som gör om till upperCase funkar som det ska.
8. Testa att metoden som gör om till array funkar som det ska.
9. Testa att funktionen returnerar felmeddelande om det är tomma strängar eller whitespace som input.
10. Testa att funktionen returnerar en array med objekt.
11. Testa att funktionen returnerar en array med objekt som har samma ordning som i gissningen.
*/
describe('matchGuess function', () => {
    test('should return correct result for a completely correct guess', () => {
      const result = matchGuess('hello', 'hello');
      expect(result).toEqual([
        { letter: 'H', result: 'correct' },
        { letter: 'E', result: 'correct' },
        { letter: 'L', result: 'correct' },
        { letter: 'L', result: 'correct' },
        { letter: 'O', result: 'correct' }
      ]);
    });
  });