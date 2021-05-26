//////////////////////////////////////////////////////////////////////////////////////////////
///////////////===--- Practice Exercises: Data Types & Arithmetic Operators ---===////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Exercise #2
// Skills Practiced: prompt(), template literals, type conversion, arithmetic operators

var name = prompt("Hello! What is your name? (ex: Joe Summers) ");

var birthYear = Number(prompt("What year were you born? (ex: 1992) "));

var age = 2021 - birthYear;

console.log(`Guess what ${name}?! You're ${age} years old!`);
