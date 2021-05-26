////////////////////////////////////////////////////////////////////////////////////
/////////////===--- Lesson 04: Practice Exercises: JS, HTML, & CSS ---===///////////
/////////////////////////////////////////////////////////////////////////////////////

// Exercise #1:
// Skills Practiced: document.querySelector, style, innerText, innerHTML

var footerBackgroundColor = document.querySelector("footer");
footerBackgroundColor.style.backgroundColor = "#d7ddf3";
// console.log(footerBackgroundColor);

var tagline = document.querySelector(".tagline");
tagline.innerText = "let our flowers do the expressing for you!";
//

var addressFormat = document.querySelector("address");
addressFormat.style.lineHeight = "1.5em";
addressFormat.style.fontSize = "1.75em";
// console.log(addressFormat);

var emphasize = document.querySelector("footer h3");
emphasize.innerHTML = "We are here for you <em>every day</em> of the week";
console.log(emphasize);
