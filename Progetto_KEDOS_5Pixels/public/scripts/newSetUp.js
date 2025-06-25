// NEXT BUTTONS
const nextBtnEn = document.getElementById("nextBtnEn");
const nextBtnEs = document.getElementById("nextBtnEs");
const nextBtnIt = document.getElementById("nextBtnIt");
// PROGRESS NODES EN
const setUpPageNodeEn = document.getElementById("setUpPageNodeEn");
const durationPageNodeEn = document.getElementById("durationPageNodeEn");
const classNumberPageNodeEn = document.getElementById("classNumberPageNodeEn");
const formPageNodeEn = document.getElementById("formPageNodeEn");
// ES LANGUAGE INTERFACE
const pageEs = document.getElementById("es-page");
// ES PAGES
// EN LANGUAGE INTERFACE
const pageEn = document.getElementById("en-page");
// EN PAGES
const setUpPageEn = document.getElementById("setUp-En");
const durationEn = document.getElementById("duration-En");
const classNumberEn = document.getElementById("classes-En");
const formPageEn = document.getElementById("form-En");
// ES PAGES
const setUpPageEs = document.getElementById("setUp-Es");
// IT LANGUAGE INTERFACE
const pageIt = document.getElementById("it-page");
// IT PAGES
const setUpPageIt = document.getElementById("setUp-It");
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
// FUNCTION TO GET THE CORRECT NEXT BUTTON
function getCurrentNextBtn() {
  if (currentLang === "en") return nextBtnEn;
  if (currentLang === "es") return nextBtnEs;
  if (currentLang === "it") return nextBtnIt;
}

// initialize the currentPage using the active class from the html
function initialize(){
    currentPage = "setUpPage"
  };

initialize();

/**
 * @function initializeCardsListener
 * @description This function is used to take all the .card element and add a event listener
 * to them. This event listener, onClick will delete the class selected from all the cards and add 
 * the class selected to the selected card. It also stores the selected card's option value and enables the "Next" button.
 * 
 * @returns {void}
 * 
 * @example
 * // Call after rendering or updating cards in the DOM:
 * initializeCardsListener();
 * 
 * // The selected card will be visually highlighted and the next button will become active.
 */
function initializeCardsListener() {
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(card => card.classList.remove("selected"));
      card.classList.add("selected");

      // Save selected value
      selectedOption = card.dataset.option;
      if (currentLang === "en"){
        nextBtnEn.disabled = false;
      }
      if (currentLang === "es"){
        nextBtnEs.disabled = false;
      }
      if (currentLang === "it"){
        nextBtnIt.disabled = false;
      }
    });
  });
};

function initializeLangPage() {

  pageEn.classList.add("d-none");
  pageEs.classList.add("d-none");
  pageIt.classList.add("d-none");

  setUpPageEn.classList.add("d-none");
  durationEn.classList.add("d-none");
  classNumberEn.classList.add("d-none");
  formPageEn.classList.add("d-none");
  setUpPageEs.classList.add("d-none");
  setUpPageIt.classList.add("d-none");

  if (currentLang === "en") {
    pageEn.classList.remove("d-none");

    if (currentPage === "setUpPage") setUpPageEn.classList.remove("d-none");
    if (currentPage === "durationPage") durationEn.classList.remove("d-none");
    if (currentPage === "classNumberPage") classNumberEn.classList.remove("d-none");
    if (currentPage === "formPage") formPageEn.classList.remove("d-none");
  }

  if (currentLang === "es") {
    pageEs.classList.remove("d-none");
    if (currentPage === "setUpPage") setUpPageEs.classList.remove("d-none");
  }

  if (currentLang === "it") {
    pageIt.classList.remove("d-none");
    if (currentPage === "setUpPage") setUpPageIt.classList.remove("d-none");
  }

  initializeCardsListener();
};

initializeLangPage();

//initialize the language
console.log(currentLang);
languageSelect.addEventListener("change", ()=>{
  currentLang = languageSelect.value;
  console.log(currentLang);
  initializeLangPage();
  initializeCardsListener();
});



/**
 * @function initializeNodeListeners
 * @description Adds click event listeners to all `.progressBarNode` elements. 
 * When a node is clicked, it updates the visual state by marking the clicked node 
 * as active, disables the "Next" button, sets the current page ID, 
 * and re-initializes the corresponding cards and their listeners.
 * 
 * @returns {void}
 * 
 */
function initializeNodeListeners() {
  progressBarNodes.forEach(node => {
    // Add an event listener to each progress bar node like the card listener  
    node.addEventListener("click", () => {
      // use a foreach to take all the progressBarNodes and remove the class active
      progressBarNodes.forEach(allNode => allNode.classList.remove("active"));
      // Add the class active to the clicked node
      node.classList.add("active");
      nextBtn.disabled = true;
      currentPage = node.id;
      console.log(currentPage);

      initializeCardsListener();
    });
  });
};

initializeNodeListeners();

/**
 * @function progressBarProgress
 * @description Advances the current configuration step from a page to another 
 * if the `sessionData` object contains valid data. 
 * It also enables the button associated with the second step.
 * 
 * @returns {void}
 */
function progressBarProgress() {
  // Save the selected option for the current page
  sessionData[currentPage] = selectedOption;
  selectedOption = null;

  // Hide all English configuration pages
  setUpPageEn.classList.add("d-none");
  durationEn.classList.add("d-none");
  classNumberEn.classList.add("d-none");
  formPageEn.classList.add("d-none");

  // Move to the next step
  if (currentPage === "setUpPage") {
    currentPage = "durationPage";
    durationPageNodeEn.disabled = false;
    durationPageNodeEn.classList.add("active");
    durationEn.classList.remove("d-none");
  } 
  else if (currentPage === "durationPage") {
    currentPage = "classNumberPage";
    classNumberPageNodeEn.disabled = false;
    classNumberPageNodeEn.classList.add("active");
    classNumberEn.classList.remove("d-none");
  } 
  else if (currentPage === "classNumberPage") {
    currentPage = "formPage";
    formPageNodeEn.disabled = false;
    formPageNodeEn.classList.add("active");
    formPageEn.classList.remove("d-none");
  } 
  else if (currentPage === "formPage") {
    alert("Configuration complete!");
  }

  // Disable the current language's Next button
  getCurrentNextBtn().disabled = true;

  // Re-initialize card listeners for the new step
  initializeCardsListener();
}

nextBtnEn.addEventListener("click", progressBarProgress);
nextBtnEs.addEventListener("click", progressBarProgress);
nextBtnIt.addEventListener("click", progressBarProgress);

