var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// Your code here

// console.log(weekday);

if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky worky");
} else if (weekday === "Wednesday") {
  console.log("HUMPDAY!!!");
} else if (weekday === "Thursday") {
  console.log("Almost Friday!");
} else if (weekday === "Friday") {
  console.log("Weekend's almost here!");
} else {
  console.log("WEEKEND, YAYYYY!!!");
}
