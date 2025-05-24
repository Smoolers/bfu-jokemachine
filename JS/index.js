// Skriv ett program som skriver ut roliga skämt på konsolen
// Vid start av programmet skrivs ett skämt ut
// Skämtet slumpas från en lista med skämt
// Använd funktionen Math.random() för att slumpa fram ett heltal
// Använd denna data:

/*
const programmingJokes = [
  "Why don't programmers like nature? It has too many bugs.",
  "Why did the CSS developer go to therapy? To get rid of his margins.",
  "How do you comfort a JavaScript developer? You console them.",
  "Why did the CSS developer leave the restaurant? Because it had no class.",
  "Why did the JavaScript developer go missing? Because he didn't know when to return.",
  "Why did the HTML tag go to the party? Because it wanted to break the line.",
  "Why do JavaScript developers wear glasses? Because they don't C#.",
  "Why don't programmers like to use inline styles? Because they want to be classy.",
  "Why did the CSS selector break up with the HTML element? It found someone more specific.",
  "Why did the CSS developer apply for a job? They wanted to get a position.",
];
*/

// Skapa en funktion som returnerar ett slumpgenererat tal mellan 0 och 9
// Kolla med if else statements vad talet blir, och skriv ut ett skämt per tal

function randomNumber(max) {
  let = randomNumberGenerator = Math.floor(Math.random() * max);
  return randomNumberGenerator;
}

let outputtedRandomNumber = randomNumber(10);
// console.log(outputtedRandomNumber);

if (outputtedRandomNumber === 0) {
  console.log("Why don't programmers like nature? It has too many bugs.");
} else if (outputtedRandomNumber === 1) {
  console.log(
    "Why did the CSS developer go to therapy? To get rid of his margins."
  );
} else if (outputtedRandomNumber === 2) {
  console.log("How do you comfort a JavaScript developer? You console them.");
} else if (outputtedRandomNumber === 3) {
  console.log(
    "Why did the CSS developer leave the restaurant? Because it had no class."
  );
} else if (outputtedRandomNumber === 4) {
  console.log(
    "Why did the JavaScript developer go missing? Because he didn't know when to return."
  );
} else if (outputtedRandomNumber === 5) {
  console.log(
    "Why did the HTML tag go to the party? Because it wanted to break the line."
  );
} else if (outputtedRandomNumber === 6) {
  console.log(
    "Why do JavaScript developers wear glasses? Because they don't C#."
  );
} else if (outputtedRandomNumber === 7) {
  console.log(
    "Why don't programmers like to use inline styles? Because they want to be classy."
  );
} else if (outputtedRandomNumber === 8) {
  console.log(
    "Why did the CSS selector break up with the HTML element? It found someone more specific."
  );
} else {
  console.log(
    "Why did the CSS developer apply for a job? They wanted to get a position."
  );
}

// Uteslöt outputtedNumber === 9 i sista else, eftersom det ska vara det enda värdet som kan komma ut, som inte är ett av de ovan nämnda

// Checkad och klar!
