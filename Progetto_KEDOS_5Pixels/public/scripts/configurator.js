const languageSelect = document.getElementById('languageSelect');
const progressBarNodes = document.querySelectorAll('.progressBarNode');
const pages = {
  en: document.getElementById('en-page'),
  es: document.getElementById('es-page'),
  it: document.getElementById('it-page')
};
const sections = {
  en: {
    setUp: document.getElementById('setUp-En'),
    duration: document.getElementById('duration-En'),
    classNumber: document.getElementById('classNumber-En'),
    form: document.getElementById('form-En'),
    nextBtn: document.getElementById('nextBtnEn'),
    summary: document.getElementById('summaryListEn')
  },
  es: {
    setUp: document.getElementById('setUp-Es'),
    duration: document.getElementById('duration-Es'),
    classNumber: document.getElementById('classNumber-Es'),
    form: document.getElementById('form-Es'),
    nextBtn: document.getElementById('nextBtnEs'),
    summary: document.getElementById('summaryListEs')
  },
  it: {
    setUp: document.getElementById('setUp-It'),
    duration: document.getElementById('duration-It'),
    classNumber: document.getElementById('classNumber-It'),
    form: document.getElementById('form-It'),
    nextBtn: document.getElementById('nextBtnIt'),
    summary: document.getElementById('summaryListIt')
  }
};

// STATE VARIABLES
let currentLang = localStorage.getItem('lang') || 'en';
let currentPage = 'setUp'; 
const sessionData = {};

// UTILITY FUNCTIONS
function showFlag() {
  languageSelect.value = currentLang;
  languageSelect.style.backgroundImage = `url("../../public/img/${currentLang}.png")`;
}

function hideAll() {
  Object.values(pages).forEach(p => p.classList.add('d-none'));
  Object.values(sections[currentLang]).forEach(el => el?.classList?.add('d-none'));
}

function showCurrent() {
  pages[currentLang].classList.remove('d-none');
  sections[currentLang][currentPage]?.classList.remove('d-none');
  sections[currentLang].nextBtn.classList.remove("d-none");
}

function updateProgressBar() {
  progressBarNodes.forEach(node => node.classList.remove('active', 'completed'));
  const order = ['setUp', 'duration', 'classNumber', 'form'];
  order.forEach((step, idx) => {
    const node = document.getElementById(`${step}PageNode`);
    if (order.indexOf(currentPage) > idx) node.classList.add('completed');
    if (step === currentPage) node.classList.add('active');
  });
}

function renderSummary() {
  const list = sections[currentLang].summary;
  if (!list || currentPage !== 'form') return;
  list.innerHTML = '';
  const labels = {
    setUp: { base: {en: 'Manual certificate registration', es: 'Registrazione manual', it: 'Registrazione manuale'}, advanced: {en: 'API integration', es: 'Integración API', it: 'Integrazione API'} },
    duration: { 'with-expiry': '10 anni', 'without-expiry': currentLang==='it'? 'Permanent': 'Permanente' },
    classNumber: { single: 'Single class', package10: '10-class package', package50: '50-class package' },
    studentNumber: 'studentNumber'
  };
  ['setUp', 'duration', 'classNumber'].forEach(key => {
    if (sessionData[key]) {
      const text = labels[key][sessionData[key]][currentLang] || labels[key][sessionData[key]];
      list.innerHTML += `<li>${text}</li>`;
    }
  });
  if (sessionData.studentNumber) {
    list.innerHTML += `<li>${sessionData.studentNumber} ${sessionData.studentNumber>1?'students':'student'}</li>`;
  }
}

// INITIALIZE CARD LISTENERS
function bindCards() {
  const section = sections[currentLang][currentPage];
  const cards = section.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.remove('selected');
    const option = card.dataset.option;
    card.querySelector('.badge').style.background = '#2a2a2a';
    card.onclick = () => {
      // clear
      cards.forEach(c => { c.classList.remove('selected'); c.querySelector('.badge').style.background = '#2a2a2a'; });
      // select
      card.classList.add('selected');
      card.querySelector('.badge').style.background = '#5a60ea';
      sessionData[currentPage] = option;
      showCurrent();
      renderSummary();
    };
  });
}

// NEXT BUTTON HANDLER
function handleNext() {
  const order = ['setUp', 'duration', 'classNumber', 'form'];
  const idx = order.indexOf(currentPage);
  if (idx < order.length - 1) {
    currentPage = order[idx + 1];
  } else {
    alert('Configuration complete!');
    return;
  }
  hideAll();
  updateProgressBar();
  showCurrent();
  bindCards();
  renderSummary();
}

// EVENT BINDING
languageSelect.addEventListener('change', () => {
  currentLang = languageSelect.value;
  localStorage.setItem('lang', currentLang);
  hideAll(); showFlag(); updateProgressBar(); showCurrent(); bindCards(); renderSummary();
});

progressBarNodes.forEach(node => node.addEventListener('click', e => {
  const step = e.target.id.replace('PageNode','');
  currentPage = step;
  hideAll(); updateProgressBar(); showCurrent(); bindCards(); renderSummary();
}));


// ON LOAD
document.addEventListener('DOMContentLoaded', () => {
  showFlag();
  updateProgressBar();
  hideAll();
  showCurrent();
  bindCards();
  renderSummary();

  // Event listeners solo se esistono i pulsanti
  Object.values(sections).forEach(langObj => {
    if (langObj.nextBtn) {
      langObj.nextBtn.addEventListener("click", handleNext);
    }
  });
});