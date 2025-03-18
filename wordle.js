//kom ihåg att exportera till testet! export function minfunktion() funkar på alla funktioner 
// eller export { checkGuess, anotherFunction }; i slutet av filenom jag har fler 

/*
Implementera algoritmen i form av en funktion

Algoritm
1. Input i en console.log(Gissning, RättOrd)
2. Kontrollera om någon av inmatningarna är tom eller enbart whitespace:
   - Felmeddelande om någon av inmatningarna är tom eller enbart whitespace.
3. Ta bort whitespace
4. Kontrollera längderna på gissning och rättOrd:
   - Felmeddelande om längderna inte är lika.
5. Gör om input till versaler
6. Gör om strängar till arrayer med bokstäver
7. Gör en tom array för att spara resultat
8. Skapa en kopia av rättOrd-arrayen
9. Första loopen (För att hantera "correct"):
   - Loopa igenom varje bokstav i "Gissning" (index i):
     a. Om bokstaven på samma index i "RättOrd" är likadan:
        - Lägg till ett objekt i resultatarrayen med:
          {"letter": bokstaven, "result": "correct"}.
        - Markera bokstaven som använd i kopian av "RättOrd" (sätt till null).
     b. Om bokstaven inte är likadan:
        - Lägg till null i resultatarrayen som en temporär markering.

10. Andra loopen (För att hantera "misplaced" och "incorrect"):
    - Loopa igenom varje bokstav i "Gissning" (med index i) där resultatet är null:
      a. Om bokstaven finns i kopian av "RättOrd":
         - Lägg till ett objekt i resultatarrayen med:
           {"letter": bokstaven, "result": "misplaced"}.
         - Markera bokstaven som använd i kopian av "RättOrd" (sätt till null).
      b. Om bokstaven inte finns i kopian av "RättOrd":
         - Lägg till ett objekt i resultatarrayen med attributen:
           {"letter": bokstaven, "result": "incorrect"}.

11. Skriv ut resultatarrayen.
12. Returnera resultatarrayen.
*/