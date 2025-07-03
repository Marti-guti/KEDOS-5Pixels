let gettingLangFromHome = new URLSearchParams(window.location.search);
let currentLang = gettingLangFromHome.get("lang") || "en"; 
console.log(currentLang);

const progressBarNodes = document.querySelectorAll('.progressBarNode');
const nodes = {
  setUp: document.getElementById("setUpPageNode"),
  duration: document.getElementById("durationPageNode"),
  classNumber: document.getElementById("classNumberPageNode"),
  form: document.getElementById("formPageNode")
}

let currentPage = "setUp";

let currentSession = {};

const languageSelect = document.getElementById('languageSelect');

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

const nextBtn = document.getElementById("nextBtn");

function removeOtherLangPages(){
  for (let language in langPages){
      if (language === currentLang){
          langPages[language].classList.remove("d-none");
      }
      else {
          langPages[language].classList.add("d-none");
      }
  }
};

function removeOtherPages(){
  // FUNZIONE DA RIVDERE SOPRATTUTTO LA PRIMA PARTE
  Object.values(pages).forEach(langObj => {
    Object.values(langObj).forEach(pageEl => {
      pageEl.querySelectorAll(".card.selected")
            .forEach(c => c.classList.remove("selected"));
    });
  });

  for (let language in pages){
    if (language === currentLang){
      for (let page in pages[language]){
        const element = pages[language][page];
        if (page === currentPage){
          element.classList.remove("d-none");
        } else {
          element.classList.add("d-none");
        }
      }
    }
  }
}

function next(){
  if (currentPage === "setUp"){
    currentPage = "duration";
    nodes.setUp.classList.add("completed");
    nodes.duration.disabled = false;
    progressBarNodes.forEach((node)=>node.classList.remove("active"));
    // nodes[currentPage].classList.add("completed");
    nodes[currentPage].classList.add("active")
  }
  else if (currentPage === "duration"){
    currentPage = "classNumber";
    nodes.duration.classList.add("completed");
    nodes.classNumber.disabled = false;
    progressBarNodes.forEach((node)=>node.classList.remove("active"));
    nodes[currentPage].classList.add("active")
  }
  else if (currentPage === "classNumber"){
    currentPage = "form";
    nodes.classNumber.classList.add("completed");
    nodes.form.disabled = false;
    progressBarNodes.forEach((node)=>node.classList.remove("active"));
    nodes[currentPage].classList.add("active")
  }
  else if (currentPage === "form"){
    nodes.form.classList.add("completed");
    progressBarNodes.forEach((node)=>node.classList.remove("active"));
    nodes[currentPage].classList.add("active")
    
  };
  
  nextBtn.disabled = true;
}

function initializeCards() {
  const cards = pages[currentLang][currentPage].querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      nextBtn.disabled = false;
    });
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  removeOtherLangPages(); 
  removeOtherPages();
  initializeCards();
});

languageSelect.addEventListener('change', () => {
  currentLang = languageSelect.value;
  removeOtherLangPages();
  removeOtherPages();
  initializeCards();
});

progressBarNodes.forEach(node => node.addEventListener('click', btn => {
  const previousPage = currentPage;
  const page = btn.target.id.replace('PageNode','');
  currentPage = page;
  nodes[previousPage].classList.add("completed");
  removeOtherPages();
  initializeCards();
  progressBarNodes.forEach((node)=>node.classList.remove("active"));
  nodes[currentPage].classList.add("active");
}));

nextBtn.addEventListener("click", ()=>{
  next();
  removeOtherPages();
  initializeCards();
  console.log(currentPage);
})

