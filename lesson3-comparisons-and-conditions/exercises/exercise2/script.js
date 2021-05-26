//////////////////////////////////////////////////////////////////////////////////////////////
///////////////===--- Practice Exercises: Conditionals & Comparisons ---===////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Exercise #2

// Skills Practiced: Conditional Statements, Comparison Operators, prompt(), Number()

var hoursOfSleep = Number(
  prompt(
    "How many hours did you sleep last night? (ex: enter a number 0-12 representing hours of sleep)."
  )
);

if (hoursOfSleep > 12) {
  console.log("Please be truthful and try again?");
} else if (hoursOfSleep >= 8) {
  console.log("Congrats, Your body thanks you!");
} else if (hoursOfSleep >= 5) {
  console.log(
    "5ish hours is okay, but you should consider tryig to get more sleep."
  );
} else {
  console.log(
    "Sometimes we have to burn the midnight oil, but try not to make this a habit.  Long-term, it is very taxing on the body."
  );
}
