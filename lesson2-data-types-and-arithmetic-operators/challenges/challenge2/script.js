///////////////////////////////////////////////////////////////////////
//////////////===--- Split the Check Calculator ---===/////////////////
///////////////////////////////////////////////////////////////////////

// Declare Five Variables

var mealCost = Number(prompt("Enter Cost of meal (ex. 25.99)")); // Add & Test a Prompt.

var tip = Number(prompt("Enter Tip Percentage for Meal (ex. 0.15 for 15%)")); // Add First of Two Prompts & Number().

var tipAmount = mealCost * tip;

var total = mealCost + tipAmount;

var numOfPeople = Number(prompt("Enter Number of People (*Minimum of 1!*)")); // Add Second of Two Prompts & a Number.

// Create a Template Literal

console.log(
  `Your meal cost is $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}.  
   Your share is $${(total / numOfPeople).toFixed(2)}. 
   Hope it was delicious!`
);
