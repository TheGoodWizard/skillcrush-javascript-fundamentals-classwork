//////////////////////////////////////////////////////////////////////////////////////////////
///////////////===--- Practice Exercises: Conditionals & Comparisons ---===////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Exercise #3

// Skills Practiced: Conditional Statements, Comparison Operators, alert(), prompt(), Arithmetic Operators, Template Literals:

var piecesOfChocolate = Number(
  prompt(
    "How many pieces of chocolate would you like? (Ex: Enter a whole number between 0 to 10.)"
  )
);

var piecesLeft = 10 - piecesOfChocolate;

if (piecesOfChocolate === 1) {
  alert(`
  Great choice!  You now have ${piecesLeft} remaining!`);
} else if (piecesOfChocolate === 2) {
  alert(`
  Great choice!  You now have ${piecesLeft} remaining!`);
} else if (piecesOfChocolate === 3) {
  alert(`
  Great Choice!  You now have ${piecesLeft} remaining!`);
} else if (piecesOfChocolate === 4) {
  alert(`
  Great Choice!  You now have ${piecesLeft} remaining!`);
} else if (piecesOfChocolate === 5) {
  alert(`
  Great Choice!  You now have ${piecesLeft} remaining!`);
} else if (piecesOfChocolate === 6) {
  alert(`
  Great Choice!  You now have ${piecesLeft} remaining!`);
} else if (piecesOfChocolate === 7) {
  alert(`
  Great Choice!  You now have ${piecesLeft} remaining!`);
} else if (piecesOfChocolate === 8) {
  alert(`
  Great Choice!  You now have ${piecesLeft} remaining!`);
} else if (piecesOfChocolate === 9) {
  alert(`
  Great Choice!  You now have ${piecesLeft} remaining!`);
} else {
  alert(`Uh oh!  All out of chocolate pieces!`);
}
