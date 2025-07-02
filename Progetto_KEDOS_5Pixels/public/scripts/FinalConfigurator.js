let gettingLangFromHome = new URLSearchParams(window.location.search);
let currentLang = gettingLangFromHome.get("lang") || "en";
console.log(currentLang);
const progressBarNodes = document.querySelectorAll('.progressBarNode');

let currentPage = "setUp";

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

const nextBtnS = {
    nextBtnEn: document.getElementById(""),
    nextBtnEs: document.getElementById(""),
    nextBtnIt: document.getElementById("")
};

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

document.addEventListener("DOMContentLoaded", ()=>{
  removeOtherLangPages(); 
  removeOtherPages();
});