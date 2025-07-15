// VARIABLES
let gettingLangFromHome = new URLSearchParams(window.location.search);
let currentLang = gettingLangFromHome.get("lang") || "en";

let languageSelect = document.getElementById('languageSelect');

let flagDiv = document.getElementById("flag");

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
    formAlt: document.getElementById("form-alt-En")
  },
  es: {
    setUp: document.getElementById("setUp-Es"),
    duration: document.getElementById("duration-Es"),
    classNumber: document.getElementById("classNumber-Es"),
    form: document.getElementById("form-Es"),
    formAlt: document.getElementById("form-alt-Es")
  },
  it: {
    setUp: document.getElementById("setUp-It"),
    duration: document.getElementById("duration-It"),
    classNumber: document.getElementById("classNumber-It"),
    form: document.getElementById("form-It"),
    formAlt: document.getElementById("form-alt-It")
  }
};

//FUNCTIONS

function showFlag() {
  languageSelect.value = currentLang;
  flagDiv.style.backgroundImage = 'url("../../public/img/' + currentLang + '.png")';
}

function updateNextButtonText() {
  const texts = {
    en: "Next",
    es: "Siguiente",
    it: "Avanti"
  };
  nextBtn.textContent = texts[currentLang] || texts.en;
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
        .forEach(card => card.classList.remove("selected"));
      page.querySelectorAll(".badge")
        .forEach(badge => badge.style.background = "#2a2a2a");  
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
    nextBtn.disabled = true;
  }
  else if (currentPage === "duration") {
    currentPage = "classNumber";
    nodes.duration.classList.add("completed");
    nodes.classNumber.disabled = false;
    progressBarNodes.forEach((node) => node.classList.remove("active"));
    nodes[currentPage].classList.add("active")
    nextBtn.disabled = true;
  }
  else if (currentPage === "classNumber") {
    currentPage = "form";
    nodes.classNumber.classList.add("completed");
    nodes.form.disabled = false;
    progressBarNodes.forEach((node) => node.classList.remove("active"));
    nodes[currentPage].classList.add("active")
    renderSummary();
    nextBtn.disabled = false;
  }
  else if (currentPage === "form") {
    nodes.form.classList.add("completed");
    progressBarNodes.forEach((node) => node.classList.remove("active"));
    nodes[currentPage].classList.add("active")
    nextBtn.disabled = false;
  };

  // nextBtn.disabled = true;
}

function initializeCards() {
  const currentSection = pages[currentLang][currentPage];
  const cards = currentSection.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardOption = card.getAttribute("data-option");
    card.addEventListener("click", () => {
      cards.forEach((card) => card.classList.remove("selected"));
      card.classList.add("selected");
      const allBadges = currentSection.querySelectorAll(".badge");
      allBadges.forEach((badge) => {
        badge.style.background = "#2a2a2a";
      });

      let currentBadge = card.querySelector(".badge");
      currentBadge.style.background = "#5a60ea";
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
        const allBadges = currentSection.querySelectorAll(".badge");
        allBadges.forEach((badge) => {
        badge.style.background = "#2a2a2a";
      });

      let currentBadge = classCard.querySelector(".badge");
      currentBadge.style.background = "#5a60ea";
        const subOption = btn.getAttribute("data-suboption");
        currentSession["classNumber"] = cardOption;
        currentSession["subOption"] = subOption;
        nextBtn.disabled = false;
      });
    });
  });
}

function renderSummary() {
  if (currentPage === "form") {
  const summaryListEn = document.getElementById("summaryListEn");
  const summaryListEs = document.getElementById("summaryListEs");
  const summaryListIt = document.getElementById("summaryListIt");

  let finalPrice = 0;
  const setUp = currentSession.setUp;
  const duration = currentSession.duration;
  const classNumber = currentSession.classNumber;
  const subOption = currentSession.subOption;

  if (setUp === "base bases base") {
    finalPrice += 1000;
  }
  else {
    finalPrice += 6000;
  }

  if (classNumber === "single singolas singola") {
    if (duration === "with-expiry con-scadenzas con-scadenza") finalPrice += 100;
    if (duration === "without-expiry senza-scadenzas senza-scadenza") finalPrice += 250;
  }

  if (classNumber === "package-10 pacchettos-10 pacchetto-10") {
    if (subOption === "1" && duration === "with-expiry con-scadenzas con-scadenza") finalPrice += 300;
    if (subOption === "1" && duration === "without-expiry senza-scadenzas senza-scadenza") finalPrice += 750;
    if (subOption === "30" && duration === "with-expiry con-scadenzas con-scadenza") finalPrice += 500;
    if (subOption === "30" && duration === "without-expiry senza-scadenzas senza-scadenza") finalPrice += 1250;
  }

  if (classNumber === "package-50 pacchettos-50 pacchetto-50") {
    if (subOption === "1" && duration === "with-expiry con-scadenzas con-scadenza") finalPrice += 800;
    if (subOption === "1" && duration === "without-expiry senza-scadenzas senza-scadenza") finalPrice += 2000;
    if (subOption === "30" && duration === "with-expiry con-scadenzas con-scadenza") finalPrice += 1000;
    if (subOption === "30" && duration === "without-expiry senza-scadenzas senza-scadenza") finalPrice += 2500;
  }

    let langIndex = 0;
    if (currentLang === "es") langIndex = 1;
    else if (currentLang === "it") langIndex = 2;

    const getTranslated = (value) => {
      return value.split(" ")[langIndex] || value;
    };

    const summaryItemsEn = [
      "Set-Up: " + getTranslated(setUp),
      "Duration: " + getTranslated(duration),
      "Package: " + getTranslated(classNumber),
      "Students per emission: " + subOption,
      "Final price: " + finalPrice + " €"
    ];
    const summaryItemsEs = [
      "Set-Up: " + getTranslated(setUp),
      "Duración: " + getTranslated(duration),
      "Paquete: " + getTranslated(classNumber),
      "Estudiantes por emisión: " + subOption,
      "precio final: " + finalPrice + " €"
    ];
    const summaryItemsIt = [
      "Set-Up: " + getTranslated(setUp),
      "Durata: " + getTranslated(duration),
      "Pacchetto: " + getTranslated(classNumber),
      "Studenti per emissione: " + subOption,
      "Prezzo finale: " + finalPrice + " €"
    ];

    if (currentLang === "en") {
      summaryListEn.innerHTML = "";
      summaryItemsEn.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        summaryListEn.appendChild(li);
      });
    }

    if (currentLang === "es") {
      summaryListEs.innerHTML = "";
      summaryItemsEs.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        summaryListEs.appendChild(li);
      });
    }

    if (currentLang === "it") {
      summaryListIt.innerHTML = "";
      summaryItemsIt.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        summaryListIt.appendChild(li);
      });
    }
  }
}

//EVENTS

document.addEventListener("DOMContentLoaded", () => {
  removeOtherLangPages();
  removeOtherPages();
  initializeCards();
  showFlag();
  const currentContainer = pages[currentLang][currentPage].querySelector(".cards");
  mobileView(currentContainer);
  updateNextButtonText();
});

languageSelect.addEventListener('change', () => {
  currentLang = languageSelect.value;
  removeOtherLangPages();
  showFlag();
  removeOtherPages();
  initializeCards();
 const currentContainer = pages[currentLang][currentPage].querySelector(".cards");
  mobileView(currentContainer);
  renderSummary();
  updateNextButtonText();
});

progressBarNodes.forEach(node => {
  node.addEventListener('click', (e) => {
    const previousPage = currentPage;
    const page = e.currentTarget.id.replace("PageNode", "");

    // Solo se il nodo esiste
    if (!pages[currentLang][page]) return;

    currentPage = page;
    nodes[previousPage].classList.add("completed");
    removeOtherPages();
    initializeCards();

    const currentContainer = pages[currentLang][currentPage]?.querySelector(".cards");
    if (currentContainer) {
      mobileView(currentContainer);
    }

    progressBarNodes.forEach((node) => node.classList.remove("active"));
    nodes[currentPage].classList.add("active");
    nextBtn.disabled = true;
  });
});

nextBtn.addEventListener("click", () => {
  next();
  removeOtherPages();
  initializeCards();
  const currentContainer = pages[currentLang][currentPage].querySelector(".cards");
  mobileView(currentContainer);
})

function mobileView(container) {
  if (!container) return;
  
  const MOBILE_WIDTH = 1400;
  const cards = Array.from(container.querySelectorAll(".card, .class-card, .form-card"));
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");

  let currentIndex = 0;

  let dotsWrapper = container.querySelector(".carousel-dots");
  if (!dotsWrapper) {
    dotsWrapper = document.createElement("div");
    dotsWrapper.className = "carousel-dots d-none";
    container.appendChild(dotsWrapper);
  }
  dotsWrapper.innerHTML = "";

  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "carousel-dot";
    if (i === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateCardsView();
    });
    dotsWrapper.appendChild(dot);
  });

  const updateCardsView = () => {
    const isMobile = window.innerWidth < MOBILE_WIDTH;

    if (isMobile) {
      cards.forEach((card, i) => {
        card.classList.toggle("d-none", i !== currentIndex);
      });

      prevBtn.classList.toggle("d-none", cards.length <= 1);
      nextBtn.classList.toggle("d-none", cards.length <= 1);
      dotsWrapper.classList.remove("d-none");

      const dots = dotsWrapper.querySelectorAll(".carousel-dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    } else {
      cards.forEach((card) => card.classList.remove("d-none"));
      prevBtn.classList.add("d-none");
      nextBtn.classList.add("d-none");
      dotsWrapper.classList.add("d-none");
    }
  };

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCardsView();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCardsView();
  });

  window.addEventListener("resize", updateCardsView);
  updateCardsView();
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("skip")) {
          
    currentPage = "formAlt";
    nodes.duration.disabled = true;
    nodes.duration.classList.remove("completed")
    nodes.classNumber.disabled = true;
    nodes.classNumber.classList.remove("completed")
    nodes.form.disabled = true;
    nodes.form.classList.remove("completed")
    removeOtherPages();
    initializeCards();
    progressBarNodes.forEach((node) => node.classList.remove("active"));
  }
});

