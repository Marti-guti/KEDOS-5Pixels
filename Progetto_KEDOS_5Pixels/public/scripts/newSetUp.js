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
const durationPageEn = document.getElementById("duration-En");
const classNumberPageEn = document.getElementById("classes-En");
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

function initializeFlag() {
  const flag = languageSelect.value;
  languageSelect.style.backgroundImage = `url("../../public/img/${flag}.png")`;
}

// initialize the currentPage using the active class from the html
function initialize() {
  currentPage = "setUpPage";
  initializeFlag();
};

initialize();


function initializeCardsListener() {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let cardOption = card.dataset.option;

    // Caso speciale: siamo nella pagina con bottoni interni
    if (currentPage === "classNumberPage") {
      // NON assegnare il click alla card
      let btnStudents = card.querySelectorAll(".btn-student");

      btnStudents.forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();

          // Salva i valori selezionati
          sessionData["classNumberPage"] = cardOption;
          sessionData["studentNumber"] = btn.dataset.suboption;

          // Rimuovi selezioni precedenti
          cards.forEach(card => card.classList.remove("selected"));
          document.querySelectorAll(".btn-student").forEach(btn => btn.classList.remove("selected"));

          // Aggiungi selezione
          card.classList.add("selected");
          btn.classList.add("selected");

          // Abilita il pulsante Next
          getCurrentNextBtn().disabled = false;
        });
      });

    } else {
      // Pagine normali: click diretto sulla card
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");

        // Salva e abilita
        selectedOption = cardOption;
        sessionData[currentPage] = selectedOption;
        getCurrentNextBtn().disabled = false;
      });
    }
  });
}



function initializeLangPage() {

  pageEn.classList.add("d-none");
  pageEs.classList.add("d-none");
  pageIt.classList.add("d-none");

  setUpPageEn.classList.add("d-none");
  durationPageEn.classList.add("d-none");
  classNumberPageEn.classList.add("d-none");
  formPageEn.classList.add("d-none");
  setUpPageEs.classList.add("d-none");
  setUpPageIt.classList.add("d-none");

  if (currentLang === "en") {
    pageEn.classList.remove("d-none");

    if (currentPage === "setUpPage") {
      setUpPageEn.classList.remove("d-none");
    }
    if (currentPage === "durationPage") {
      durationPageEn.classList.remove("d-none")
    };
    if (currentPage === "classNumberPage") {
      classNumberPageEn.classList.remove("d-none");
    };
    if (currentPage === "formPage") {
      formPageEn.classList.remove("d-none")
    };
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
  initializeNodeListeners();
};

initializeLangPage();

//initialize the language
console.log(currentLang);
languageSelect.addEventListener("change", () => {
  currentLang = languageSelect.value;
  console.log(currentLang);
  initializeFlag();
  initializeLangPage();
  initializeCardsListener();
});



/**
 * @function initializeNodeListeners
 * @description Adds click event listeners to all `.progressBarNode` elements. 
 * When a node is clicked, it updates the visual state by marking the clicked node 
 * as active, disables the "Next" button and sets the current page ID.
 * 
 * @returns {void}
 * 
 */
function initializeNodeListeners() {
  let cards = document.querySelectorAll(".card");
  progressBarNodes.forEach(node => {
    node.addEventListener("click", () => {
      cards.forEach(card => card.classList.remove("selected"));
      progressBarNodes.forEach(allNode => allNode.classList.remove("active"));
      node.classList.add("active");

      getCurrentNextBtn().disabled = true;


      // ENGLISH PAGES
      if (currentLang === "en") {
        if (node.id === "setUpPageNodeEn") currentPage = "setUpPage";
        if (node.id === "durationPageNodeEn") currentPage = "durationPage";
        if (node.id === "classNumberPageNodeEn") currentPage = "classNumberPage";
        if (node.id === "formPageNodeEn") currentPage = "formPage";
      }

      // SPANISH PAGES
      if (currentLang === "es") {
        if (node.id === "setUpPageNodeEs") currentPage = "setUpPage";
        if (node.id === "durationPageNodeEs") currentPage = "durationPage";
        if (node.id === "classNumberPageNodeEs") currentPage = "classNumberPage";
        if (node.id === "formPageNodeEs") currentPage = "formPage";
      }

      // ITALIAN PAGES
      if (currentLang === "it") {
        if (node.id === "setUpPageNodeIt") currentPage = "setUpPage";
        if (node.id === "durationPageNodeIt") currentPage = "durationPage";
        if (node.id === "classNumberPageNodeIt") currentPage = "classNumberPage";
        if (node.id === "formPageNodeIt") currentPage = "formPage";
      }

      initializeLangPage();
      initializeCardsListener();

    });
  });
};

initializeNodeListeners();

/**
 * @function progressBarProgress
 * @description Advances the current configuration step from a page to another 
 * 
 * @returns {void}
 */
function progressBarProgress() {
  sessionData[currentPage] = selectedOption;
  selectedOption = null;
  console.log(sessionData);
  if (currentLang === "en") {
    setUpPageEn.classList.add("d-none");
    durationPageEn.classList.add("d-none");
    classNumberPageEn.classList.add("d-none");
    formPageEn.classList.add("d-none");

    if (currentPage === "setUpPage") {
      currentPage = "durationPage";
      durationPageNodeEn.disabled = false;
      durationPageNodeEn.classList.add("active");
      durationPageEn.classList.remove("d-none");
    }
    else if (currentPage === "durationPage") {
      currentPage = "classNumberPage";
      classNumberPageNodeEn.disabled = false;
      classNumberPageNodeEn.classList.add("active");
      classNumberPageEn.classList.remove("d-none");
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
  }

  // Disable the current language's Next button
  getCurrentNextBtn().disabled = true;

  // Re-initialize card listeners for the new step
  initializeCardsListener();
}

nextBtnEn.addEventListener("click", progressBarProgress);
nextBtnEs.addEventListener("click", progressBarProgress);
nextBtnIt.addEventListener("click", progressBarProgress);

