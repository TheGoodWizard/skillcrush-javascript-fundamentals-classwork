//////////////////////////////////////////////////////////////////////////
/////////===--- Practice Exercises: Events & Event Listeners ---===////////
///////////////////////////////////////////////////////////////////////////

// Exercise #1: Skills Practiced: querySelector, mouseover, event listeners, event handlers

var fans = document.querySelector(".fans");

var fish = document.querySelector(".fish");

var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
  // console.log(fans);
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
  // console.log(fish);
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
  console.log(pets);
});
