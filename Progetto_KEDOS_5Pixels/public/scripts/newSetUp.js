// BUTTONS
const nextBtn = document.getElementById("nextBtn");
const durationPageBtn = document.getElementById("durationPage");
const setUpPage = document.getElementById("setUpPage");
// VAR TO KNOW WHICH CARD IS CURRENTLY SELECTED
let selectedOption = null;
// VAR TO KNOW WHICH PAGE IS CURRENTLTY ACTIVE
let currentPage = null;
//VAR TO KNOW WHICH LANG IS CURRENTLY USED
let currentLang = "en";
//VAR TO TAKE THE LANG MENU
let languageSelect = document.querySelector("#languageSelect");


// CONST TO GET ALL PROGRESS BAR BUTTONS
const progressBarNodes = document.querySelectorAll(".progressBarNode");
// OBJ WHERE TO PUT ALL SELECTED VALUE OF EACH PAGE
let sessionData = {};

// initialize the currentPage using the active class from the html
const initiallyActive = document.querySelector(".progressBarNode.active");
if (initiallyActive) {
  currentPage = initiallyActive.id;
}
//initialize the language
console.log(currentLang);
languageSelect.addEventListener("change", ()=>{
  currentLang = languageSelect.value;
  console.log(currentLang);
});
