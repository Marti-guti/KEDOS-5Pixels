// NEXT BUTTONS
const nextBtnEn = document.getElementById("nextBtnEn");
const nextBtnEs = document.getElementById("nextBtnEs");
const nextBtnIt = document.getElementById("nextBtnIt");
// PROGRESS NODES EN
const setUpPageNode = document.getElementById("setUpPageNode");
const durationPageNode = document.getElementById("durationPageNode");
const classNumberPageNode = document.getElementById("classNumberPageNode");
const formPageNode = document.getElementById("formPageNode");
// ES LANGUAGE INTERFACE
const pageEs = document.getElementById("es-page");
// ES PAGES
const setUpPageEs = document.getElementById("setUp-Es");
const durationPageEs = document.getElementById("duration-Es");
const classNumberPageEs = document.getElementById("classNumber-Es");
const formPageEs = document.getElementById("form-Es");
// EN LANGUAGE INTERFACE
const pageEn = document.getElementById("en-page");
// EN PAGES
const setUpPageEn = document.getElementById("setUp-En");
const durationPageEn = document.getElementById("duration-En");
const classNumberPageEn = document.getElementById("classNumber-En");
const formPageEn = document.getElementById("form-En");
// IT LANGUAGE INTERFACE
const pageIt = document.getElementById("it-page");
// IT PAGES
const setUpPageIt = document.getElementById("setUp-It");
const durationPageIt = document.getElementById("duration-It");
const classNumberPageIt = document.getElementById("classNumber-It");
const formPageIt = document.getElementById("form-It");
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
  let sectionId = "#" + currentPage.replace("Page", "") + "-" + currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
  let visibleSection = document.querySelector(sectionId);
  let cards = visibleSection.querySelectorAll(".card");

  cards.forEach(card => {
    const cardOption = card.dataset.option;

    if (currentPage === "classNumberPage") {
      cards.forEach(card => card.style.cursor = "default");
      const btnStudents = card.querySelectorAll(".btn-student");
      card.querySelector(".badge").style.background = "#2a2a2a";
      btnStudents.forEach(btn => {
        btn.addEventListener("click", (event) => {
          event.stopPropagation();

          cards.forEach(card => {
            card.classList.remove("selected");

            let badge = card.querySelector(".badge");
            if (badge) badge.style.background = "#2a2a2a";

            card.querySelectorAll(".btn-student").forEach(btn => btn.classList.remove("selected"));
          });

          selectedOption = cardOption;
          sessionData["studentNumber"] = btn.dataset.suboption;

          card.classList.add("selected");

          let currentBadge = card.querySelector(".badge");
          if (currentBadge) currentBadge.style.background = "#5a60ea";

          getCurrentNextBtn().disabled = false;
        });
      });

    }
    else if (currentPage === "formPage") {
      cards.forEach(card => {
        card.classList.remove("selected");
        card.style.cursor = "default";
        card.classList.add("no-hover");
      });
    }

    else {
      card.querySelector(".badge").style.background = "#2a2a2a";
      card.addEventListener("click", () => {
        cards.forEach(c => {
          c.classList.remove("selected");
          let badge = c.querySelector(".badge");
          if (badge) badge.style.background = "#2a2a2a";
        });

        card.classList.add("selected");
        let currentBadge = card.querySelector(".badge");
        if (currentBadge) currentBadge.style.background = "#5a60ea";

        selectedOption = cardOption;
        sessionData[currentPage] = selectedOption;

        getCurrentNextBtn().disabled = false;
      });
    }
  });
}


/**
 * @function renderSummary
 * @description Generates a dynamic list in the form summary card from sessionData values (only for EN).
 */
function renderSummary() {
  // EN VERSION
  if (currentLang === "en" && currentPage === "formPage") {

  const list = document.getElementById("summaryListEn");
  list.innerHTML = ""; 

  const setUpPage = sessionData["setUpPage"];
  const durationPage = sessionData["durationPage"];
  const classNumberPage = sessionData["classNumberPage"];
  const studentNumber = sessionData["studentNumber"];

  // Set-Up
  if (setUpPage) {
    let label = setUpPage === "base"
      ? "Manual certificate registration"
      : "Automated certificate registration via API";
    list.innerHTML += "<li>Your set-up choice: " + label + "</li>";
  }

  // Duration
  if (durationPage) {
    let label = durationPage === "with-expiry"
      ? "10 years (with expiry)"
      : "permanent (without expiry)";
    list.innerHTML += "<li>Your duration choice: " + label + "</li>";
  }

  // Class number
  if (classNumberPage) {
    let label = "";
    if (classNumberPage === "single") label = "Single class";
    else if (classNumberPage === "package10") label = "10-class package";
    else if (classNumberPage === "package50") label = "50-class package";
    list.innerHTML += "<li>Your class package: " + label + "</li>";
  }

  // Students per class
  if (studentNumber) {
    let s = studentNumber === "1" ? "student" : "students";
    list.innerHTML += "<li>Number of students per class: " + studentNumber + " " + s + "</li>";
  }
  }

  // ES VERSION

  if (currentLang === "es" && currentPage === "formPage") {

  const list = document.getElementById("summaryListEs");
  list.innerHTML = ""; 

  const setUpPage = sessionData["setUpPage"];
  const durationPage = sessionData["durationPage"];
  const classNumberPage = sessionData["classNumberPage"];
  const studentNumber = sessionData["studentNumber"];

  // Set-Up 
  if (setUpPage) {
    let label = setUpPage === "base"
      ? "Manual certificate registration"
      : "Automated certificate registration via API";
    list.innerHTML += "<li>Your set-up choice: " + label + "</li>";
  }

  // Duration
  if (durationPage) {
    let label = durationPage === "with-expiry"
      ? "10 years (with expiry)"
      : "permanent (without expiry)";
    list.innerHTML += "<li>Your duration choice: " + label + "</li>";
  }

  // Class number
  if (classNumberPage) {
    let label = "";
    if (classNumberPage === "single") label = "Single class";
    else if (classNumberPage === "package10") label = "10-class package";
    else if (classNumberPage === "package50") label = "50-class package";
    list.innerHTML += "<li>Your class package: " + label + "</li>";
  }

  // Students per class
  if (studentNumber) {
    let s = studentNumber === "1" ? "student" : "students";
    list.innerHTML += "<li>Number of students per class: " + studentNumber + " " + s + "</li>";
  }
  }

  // IT VERSION

  if (currentLang === "it" && currentPage === "formPage") {

  const list = document.getElementById("summaryListIt");
  list.innerHTML = ""; 

  const setUpPage = sessionData["setUpPage"];
  const durationPage = sessionData["durationPage"];
  const classNumberPage = sessionData["classNumberPage"];
  const studentNumber = sessionData["studentNumber"];

  // Set-Up 
  if (setUpPage) {
    let label = setUpPage === "base"
      ? "Manual certificate registration"
      : "Automated certificate registration via API";
    list.innerHTML += "<li>Your set-up choice: " + label + "</li>";
  }

  // Duration
  if (durationPage) {
    let label = durationPage === "with-expiry"
      ? "10 years (with expiry)"
      : "permanent (without expiry)";
    list.innerHTML += "<li>Your duration choice: " + label + "</li>";
  }

  // Class number
  if (classNumberPage) {
    let label = "";
    if (classNumberPage === "single") label = "Single class";
    else if (classNumberPage === "package10") label = "10-class package";
    else if (classNumberPage === "package50") label = "50-class package";
    list.innerHTML += "<li>Your class package: " + label + "</li>";
  }

  // Students per class
  if (studentNumber) {
    let s = studentNumber === "1" ? "student" : "students";
    list.innerHTML += "<li>Number of students per class: " + studentNumber + " " + s + "</li>";
  }
  }
};


function initializeLangPage() {

  pageEn.classList.add("d-none");
  pageEs.classList.add("d-none");
  pageIt.classList.add("d-none");

  setUpPageEn.classList.add("d-none");
  durationPageEn.classList.add("d-none");
  classNumberPageEn.classList.add("d-none");
  formPageEn.classList.add("d-none");
  
  setUpPageEs.classList.add("d-none");
  durationPageEs.classList.add("d-none");
  classNumberPageEs.classList.add("d-none");
  formPageEs.classList.add("d-none");
  
  setUpPageIt.classList.add("d-none");
  durationPageIt.classList.add("d-none");
  classNumberPageIt.classList.add("d-none");
  formPageIt.classList.add("d-none");

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
  };

  if (currentLang === "es") {
    pageEs.classList.remove("d-none");

  if (currentPage === "setUpPage") {
    setUpPageEs.classList.remove("d-none");
  }
  if (currentPage === "durationPage") {
    durationPageEs.classList.remove("d-none");
  }
  if (currentPage === "classNumberPage") {
    classNumberPageEs.classList.remove("d-none");
  }
  if (currentPage === "formPage") {
    formPageEs.classList.remove("d-none");
  }
};

  if (currentLang === "it") {
  pageIt.classList.remove("d-none");

  if (currentPage === "setUpPage") {
    setUpPageIt.classList.remove("d-none");
  }
  if (currentPage === "durationPage") {
    durationPageIt.classList.remove("d-none");
  }
  if (currentPage === "classNumberPage") {
    classNumberPageIt.classList.remove("d-none");
  }
  if (currentPage === "formPage") {
    formPageIt.classList.remove("d-none");
  }
};

  renderSummary();
  initializeCardsListener();
  initializeNodeListeners();
};

initializeLangPage();

//change the language
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
 * Updates the current page and re-renders based on selected language and step.
 */
function initializeNodeListeners() {
  let cards = document.querySelectorAll(".card");

  progressBarNodes.forEach(node => {
    node.addEventListener("click", () => {
      // Reset selections
      cards.forEach(card => card.classList.remove("selected"));
      progressBarNodes.forEach(allNode => allNode.classList.remove("active"));
      node.classList.add("active");

      getCurrentNextBtn().disabled = true;

      // Determine currentPage from node id
      if (node.id === "setUpPageNode") currentPage = "setUpPage";
      if (node.id === "durationPageNode") currentPage = "durationPage";
      if (node.id === "classNumberPageNode") currentPage = "classNumberPage";
      if (node.id === "formPageNode") currentPage = "formPage";

      initializeLangPage();
      initializeCardsListener();
      renderSummary();
    });
  });
}

initializeNodeListeners();

function progressBarProgress() {
  sessionData[currentPage] = selectedOption;
  selectedOption = null;
  console.log(sessionData);

  let allSections = document.querySelectorAll("#" + currentLang + "-page > .container-personal > div");
  allSections.forEach(function(section) {
    section.classList.add("d-none");
  });

  if (currentPage === "setUpPage") {
    currentPage = "durationPage";
    durationPageNode.disabled = false;
    progressBarNodes.forEach(node => node.classList.remove("active"));
    setUpPageNode.classList.add("completed");
    durationPageNode.classList.add("active");
  } else if (currentPage === "durationPage") {
    currentPage = "classNumberPage";
    classNumberPageNode.disabled = false;
    progressBarNodes.forEach(node => node.classList.remove("active"));
    durationPageNode.classList.add("completed");
    classNumberPageNode.classList.add("active");
  } else if (currentPage === "classNumberPage") {
    currentPage = "formPage";
    formPageNode.disabled = false;
    progressBarNodes.forEach(node => node.classList.remove("active"));
    classNumberPageNode.classList.add("completed");
    formPageNode.classList.add("completed");
    formPageNode.classList.add("active");
  } else if (currentPage === "formPage") {
    alert("Configuration complete!");
    return;
  }

  let nextSectionId = "#" + currentPage.replace("Page", "") + "-" + currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
  let nextSection = document.querySelector(nextSectionId);
  if (nextSection) nextSection.classList.remove("d-none");

  renderSummary();
  getCurrentNextBtn().disabled = true;
  initializeCardsListener();
}

nextBtnEn.addEventListener("click", progressBarProgress);
nextBtnEs.addEventListener("click", progressBarProgress);
nextBtnIt.addEventListener("click", progressBarProgress);

