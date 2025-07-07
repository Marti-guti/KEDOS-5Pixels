// VARIABLES
let gettingLangFromHome = new URLSearchParams(window.location.search);
let currentLang = gettingLangFromHome.get("lang") || "en";
console.log(currentLang);

let languageSelect = document.getElementById('languageSelect');

let currentPage = "setUp";

let currentSession = {};

let currentSelected = null;

let finalPrice = 0;

//CONSTANTS

const progressBarNodes = document.querySelectorAll('.progressBarNode');
const nodes = {
  setUp: document.getElementById("setUpPageNode"),
  duration: document.getElementById("durationPageNode"),
  classNumber: document.getElementById("classNumberPageNode"),
  form: document.getElementById("formPageNode")
}

const nextBtn = document.getElementById("nextBtn");

const langPages = {
  en: document.getElementById("en-page"),
  es: document.getElementById("es-page"),
  it: document.getElementById("it-page")
};

const pages = {
  en: {
    setUp: document.getElementById("setUp-En"),
    duration: document.getElementById("duration-En"),
    classNumber: document.getElementById("classNumber-En"),
    form: document.getElementById("form-En"),
  },
  es: {
    setUp: document.getElementById("setUp-Es"),
    duration: document.getElementById("duration-Es"),
    classNumber: document.getElementById("classNumber-Es"),
    form: document.getElementById("form-Es"),
  },
  it: {
    setUp: document.getElementById("setUp-It"),
    duration: document.getElementById("duration-It"),
    classNumber: document.getElementById("classNumber-It"),
    form: document.getElementById("form-It"),
  }
};

//FUNCTIONS

function showFlag() {
  languageSelect.value = currentLang;
  languageSelect.style.backgroundImage = 'url("../../public/img/' + currentLang + '.png")';
}

function removeOtherLangPages() {
  for (let language in langPages) {
    if (language === currentLang) {
      langPages[language].classList.remove("d-none");
    }
    else {
      langPages[language].classList.add("d-none");
    }
  }
};

function removeOtherPages() {
  Object.values(pages).forEach(langObj => {
    Object.values(langObj).forEach(page => {
      page.querySelectorAll(".card.selected")
        .forEach(c => c.classList.remove("selected"));
    });
  });

  for (let language in pages) {
    if (language === currentLang) {
      for (let page in pages[language]) {
        const element = pages[language][page];
        if (page === currentPage) {
          element.classList.remove("d-none");
        } else {
          element.classList.add("d-none");
        }
      }
    }
  }
}

function next() {
  if (currentPage === "setUp") {
    currentPage = "duration";
    nodes.setUp.classList.add("completed");
    nodes.duration.disabled = false;
    progressBarNodes.forEach((node) => node.classList.remove("active"));
    nodes[currentPage].classList.add("active")
  }
  else if (currentPage === "duration") {
    currentPage = "classNumber";
    nodes.duration.classList.add("completed");
    nodes.classNumber.disabled = false;
    progressBarNodes.forEach((node) => node.classList.remove("active"));
    nodes[currentPage].classList.add("active")
  }
  else if (currentPage === "classNumber") {
    currentPage = "form";
    nodes.classNumber.classList.add("completed");
    nodes.form.disabled = false;
    progressBarNodes.forEach((node) => node.classList.remove("active"));
    nodes[currentPage].classList.add("active")
    renderSummary();
  }
  else if (currentPage === "form") {
    nodes.form.classList.add("completed");
    progressBarNodes.forEach((node) => node.classList.remove("active"));
    nodes[currentPage].classList.add("active")

  };

  nextBtn.disabled = true;
}

function initializeCards() {
  const currentSection = pages[currentLang][currentPage];
  const cards = currentSection.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardOption = card.getAttribute("data-option");
    card.addEventListener("click", () => {
      cards.forEach((card) => card.classList.remove("selected"));
      card.classList.add("selected");
      currentSession[currentPage] = cardOption;
      nextBtn.disabled = false;
    });
  });
  
  const classCards = currentSection.querySelectorAll(".class-card");
  classCards.forEach((classCard) => {
    classCards.forEach((card) => card.classList.remove("selected"));
    const cardOption = classCard.dataset.option;
    const buttons = classCard.querySelectorAll(".btn-student");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        classCards.forEach((card) => card.classList.remove("selected"));
        classCard.classList.add("selected");
        const subOption = btn.getAttribute("data-suboption");
        currentSession["classNumber"] = cardOption;
        currentSession["subOption"] = subOption;
        nextBtn.disabled = false;
      });
    });
  });
}

function renderSummary() {
  const summaryList = document.getElementById("summaryList" + currentLang.charAt(0).toUpperCase() + currentLang.slice(1));
  summaryList.innerHTML = "";
  const summaryItems = [
    "Set-Up: " + currentSession.setUp,
    "Duration: " + currentSession.duration,
    "Package: " + currentSession.classNumber,
    "Students per emission: " + currentSession.subOption
  ];

  let finalPrice = 0;
  const setUp = currentSession.setUp;
  const duration = currentSession.duration;
  const classNumber = currentSession.classNumber;
  const subOption = currentSession.subOption;

  if (setUp === "base") {
    finalPrice += 1000;
  }
  else {
    finalPrice += 6000;
  }

  if (classNumber === "single") {
    if (duration === "with-expiry") finalPrice += 100;
    if (duration === "without-expiry") finalPrice += 250;
  }

  if (classNumber === "package10") {
    if (subOption === "1" && duration === "with-expiry") finalPrice += 300;
    if (subOption === "1" && duration === "without-expiry") finalPrice += 750;
    if (subOption === "30" && duration === "with-expiry") finalPrice += 500;
    if (subOption === "30" && duration === "without-expiry") finalPrice += 1250;
  }

  if (classNumber === "package50") {
    if (subOption === "1" && duration === "with-expiry") finalPrice += 800;
    if (subOption === "1" && duration === "without-expiry") finalPrice += 2000;
    if (subOption === "30" && duration === "with-expiry") finalPrice += 1000;
    if (subOption === "30" && duration === "without-expiry") finalPrice += 2500;
  }

  summaryItems.push("Final price: " + finalPrice + " €");
  currentPrize = finalPrice;

  // Stampa tutto in lista
  summaryItems.forEach((text)=>{
    const li = document.createElement("li");
    li.textContent = text;
    summaryList.appendChild(li);
  });
}


//EVENTS

document.addEventListener("DOMContentLoaded", () => {
  removeOtherLangPages();
  removeOtherPages();
  initializeCards();
  showFlag();
});

languageSelect.addEventListener('change', () => {
  currentLang = languageSelect.value;
  removeOtherLangPages();
  showFlag();
  removeOtherPages();
  initializeCards();
});

progressBarNodes.forEach(node => node.addEventListener('click', btn => {
  const previousPage = currentPage;
  const page = btn.target.id.replace('PageNode', '');
  currentPage = page;
  nodes[previousPage].classList.add("completed");
  removeOtherPages();
  initializeCards();
  progressBarNodes.forEach((node) => node.classList.remove("active"));
  nodes[currentPage].classList.add("active");
}));

nextBtn.addEventListener("click", () => {
  next();
  removeOtherPages();
  initializeCards();
  console.log(currentPage);
})

