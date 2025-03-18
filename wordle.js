//kom ihåg att exportera till testet! export function minfunktion() funkar på alla funktioner
// eller export { checkGuess, anotherFunction }; i slutet av filenom jag har fler

/*
Implementera algoritmen i form av en funktion

Algoritm
1. Input i en console.log(Gissning, RättOrd)
2. Kontrollera om någon av inmatningarna är tom eller enbart whitespace:
   - Felmeddelande om någon av inmatningarna är tom eller enbart whitespace.
3. Ta bort whitespace och gör om input till versaler
4. Kontrollera längderna på gissning och rättOrd:
   - Felmeddelande om längderna inte är lika.
5. Gör om strängar till arrayer med bokstäver
6. Gör en tom array för att spara resultat
7. Skapa en kopia av rättOrd-arrayen
8. Första loopen (För att hantera "correct"):
   - Loopa igenom varje bokstav i "Gissning" (index i):
     a. Om bokstaven på samma index i "RättOrd" är likadan:
        - Lägg till ett objekt i resultatarrayen med:
          {"letter": bokstaven, "result": "correct"}.
        - Markera bokstaven som använd i kopian av "RättOrd" (sätt till null).
     b. Om bokstaven inte är likadan:
        - Lägg till null i resultatarrayen som en temporär markering.
9. Andra loopen (För att hantera "misplaced" och "incorrect"):
    - Loopa igenom varje bokstav i "Gissning" (med index i) där resultatet är null:
      a. Om bokstaven finns i kopian av "RättOrd":
         - Lägg till ett objekt i resultatarrayen med:
           {"letter": bokstaven, "result": "misplaced"}.
         - Markera bokstaven som använd i kopian av "RättOrd" (sätt till null).
      b. Om bokstaven inte finns i kopian av "RättOrd":
         - Lägg till ett objekt i resultatarrayen med attributen:
           {"letter": bokstaven, "result": "incorrect"}.
10. Skriv ut resultatarrayen.
11. Returnera resultatarrayen.
*/

function matchGuess(guess, correct) {
  if (!guess.trim() || !correct.trim()) {
    console.log("Input is empty, please try again.");
    return;
  }

  guess = guess.trim().toUpperCase();
  correct = correct.trim().toUpperCase();

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

matchGuess("cykla", "hallå");
matchGuess("salsa", "lasså");
