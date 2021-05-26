//////////////////////////////////////////////////////////////////////////////////////////////
///////////////===--- Practice Exercises: Data Types & Arithmetic Operators ---===////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Exercise #3
// Skills Practiced: prompt(), template literals, type conversion, arithmetic operators, toFixed()

var hourlyWage = Number(
  prompt(
    "Hello worker bee!  What is your hourly wage currently? (ex: 40.75 = $40.75 per hour)"
  )
);

var hoursPerWeek = Number(
  prompt(
    "How many hours did you work this week? (*** Minimum Input Requirement of 1. ***)"
  )
);

var weeklyWage = hoursPerWeek * hourlyWage;

console.log(
  `Congrats worker bee!  You earned $${weeklyWage.toFixed(2)} this week!
  Ya know.....minus taxes and everything... `
);
