// BUTTONS
const nextBtn = document.getElementById("nextBtn");
const durationPageBtn = document.getElementById("durationPage");
const setUpPage = document.getElementById("setUpPage");
// ES LANGUAGE INTERFACE
const pageEs = document.getElementById("es-page");
// ES PAGES
// EN LANGUAGE INTERFACE
const pageEn = document.getElementById("en-page");
// EN PAGES
const setUpPageEn = document.getElementById("setUp-Eng");
const durationEn = document.getElementById("duration-Eng");
const classNumberEn = document.getElementById("classes-Eng");
const formPageEn = document.getElementById("form-Eng");
// IT LANGUAGE INTERFACE
const pageIt = document.getElementById("it-page");
// IT PAGES
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

function initializeLangPage(){
  if (currentLang === "en"){
    pageEn.classList.remove("d-none");
    pageEs.classList.add("d-none");
    pageIt.classList.add("d-none");
    setUpPageEn.classList.remove("d-none");
    durationEn.classList.add("d-none");
    classNumberEn.classList.add("d-none");
    formPageEn.classList.add("d-none");
  }
  if (currentLang === "es"){
    pageEn.classList.add("d-none");
    pageEs.classList.remove("d-none");
    pageIt.classList.add("d-none");
  }
  if (currentLang === "it"){
    pageEn.classList.add("d-none");
    pageEs.classList.add("d-none");
    pageIt.classList.remove("d-none");
  }
}

initializeLangPage();

//initialize the language
console.log(currentLang);
languageSelect.addEventListener("change", ()=>{
  currentLang = languageSelect.value;
  console.log(currentLang);
  initializeLangPage();
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
      initializeCards();
      initializeCardsListener();
    });
  });
};

initializeNodeListeners();


function initializeCards() {

  //first "page" of the configurator
  if (currentPage === "setUpPage") {
    if (currentLang === "en") {

    }
  };

  // second "page" of the configurator
  if (currentPage === "durationPage") {
    
  };
};

initializeCards();

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
      nextBtn.disabled = false;

    });
  });
};

initializeCardsListener();

/**
 * @function progressBarProgress
 * @description Advances the current configuration step from a page to another 
 * if the `sessionData` object contains valid data. 
 * It also enables the button associated with the second step.
 * 
 * @returns {void}
 */
function progressBarProgress() {
  switch (currentPage) {
    case "setUpPage":
      if (!sessionData.setUpPage) return;
      setUpPageEn.classList.add("d-none");
      durationEn.classList.remove("d-none");
      durationPageBtn.disabled = false;
      durationPageBtn.classList.add("active");
      setUpPage.classList.remove("active");
      currentPage = "durationPage";
      break;

    case "durationPage":
      if (!sessionData.durationPage) return;
      durationEn.classList.add("d-none");
      classNumberEn.classList.remove("d-none");
      document.getElementById("classNumberPage").disabled = false;
      document.getElementById("classNumberPage").classList.add("active");
      durationPageBtn.classList.remove("active");
      currentPage = "classNumberPage";
      break;

    case "classNumberPage":
      if (!sessionData.classNumberPage) return;
      classNumberEn.classList.add("d-none");
      formPageEn.classList.remove("d-none");
      document.getElementById("formPage").disabled = false;
      document.getElementById("formPage").classList.add("active");
      document.getElementById("classNumberPage").classList.remove("active");
      currentPage = "formPage";
      break;
  }
}


//pulsante per andare allo step successivo
nextBtn.addEventListener("click", () => {
  sessionData[currentPage] = selectedOption;
  selectedOption = "";
  progressBarProgress();
  console.log(currentPage)
  initializeCards();
  initializeCardsListener();
  initializeNodeListeners();
  console.log(sessionData)
});