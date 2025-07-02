let gettingLangFromHome = new URLSearchParams(window.location.search);
let currentLang = gettingLangFromHome.get("lang");
console.log(currentLang);
const progressBarNodes = document.querySelectorAll('.progressBarNode');

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
    nextBtn: document.getElementById("nextBtnEn"),
    summary: document.getElementById("summaryListEn")
  },
  es: {
    setUp: document.getElementById("setUp-Es"),
    duration: document.getElementById("duration-Es"),
    classNumber: document.getElementById("classNumber-Es"),
    form: document.getElementById("form-Es"),
    nextBtn: document.getElementById("nextBtnEs"),
    summary: document.getElementById("summaryListEs")
  },
  it: {
    setUp: document.getElementById("setUp-It"),
    duration: document.getElementById("duration-It"),
    classNumber: document.getElementById("classNumber-It"),
    form: document.getElementById("form-It"),
    nextBtn: document.getElementById("nextBtnIt"),
    summary: document.getElementById("summaryListIt")
  }
};

const nextBtnS = {
    nextBtnEn: document.getElementById(""),
    nextBtnEs: document.getElementById(""),
    nextBtnIt: document.getElementById("")
};

