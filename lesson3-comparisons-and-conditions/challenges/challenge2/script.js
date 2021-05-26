var time = new Date().getHours();

var greeting = "Hello and Welcome,";

var name = "Good Wizard";

// console.log(time);

// Your conditional statements here

if (time < 12) {
  greeting = "Good morning,";
} else if (time <= 18) {
  greeting = "Good afternoon,";
} else if (time <= 22) {
  greeting = "Good evening,";
} else {
  greeting = "Go to bed,";
}

alert(`${greeting} ${name}!`);
