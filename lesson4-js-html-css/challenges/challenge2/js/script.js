/////////////////////////////////////////////////////////////////////////////////////////////
////////////////===--- Lesson 04: Callenge #2: Manipulating the DOM ---===//////////////////
////////////////////////////////////////////////////////////////////////////////////////////

var firstListItem = document.querySelector("ul li");
// console.log(firstListItem);
firstListItem.style.textTransform = "uppercase";
// console.log(firstListItem);

var moreReasons = document.querySelector(".more-reasons");
moreReasons.style.fontSize = "2.5em";
// console.log(moreReasons);

var whyJS = document.querySelector("h3");
whyJS.innerHTML = '<span class="highlight">Why learn JavaScirpt?</span>';
// console.log(whyJS);

var highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";
// console.log(highlight);

var mainImage = document.querySelector("img");
mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code example";
console.log(mainImage);
