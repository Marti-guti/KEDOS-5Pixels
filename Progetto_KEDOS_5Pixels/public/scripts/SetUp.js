//CONFIGURATOR QUESTION
let question = document.getElementById("question");
// CARDS CONTAINER
const cardContainer = document.getElementById("cards");
// BUTTONS
const nextBtn = document.getElementById("nextBtn");
const durationPageBtn = document.getElementById("durationPage");
const setUpPage = document.getElementById("setUpPage");
// VAR TO KNOW WHICH CARD IS CURRENTLY SELECTED
let selectedOption = null;
// VAR TO KNOW WHICH PAGE IS CURRENTLTY ACTIVE
let currentPage = null;
//VAR TO KNOW WHICH LANG IS CURRENTLY USED
let currentLang = "en";
//VAR TO TAKE THE LANG MENU
let languageSelect = document.querySelector("#languageSelect");
//VAR FOR LANG OPTIONS


// CONST TO GET ALL PROGRESS BAR BUTTONS
const progressBarNodes = document.querySelectorAll(".progressBarNode");
// OBJ WHERE TO PUT ALL SELECTED VALUE OF EACH PAGE
let sessionData = {};

// initialize the currentPage using the active class from the html
const initiallyActive = document.querySelector(".progressBarNode.active");
if (initiallyActive) {
  currentPage = initiallyActive.id;
}
//initialize the language
console.log(currentLang);
languageSelect.addEventListener("change", ()=>{
  currentLang = languageSelect.value;
  console.log(currentLang);
  initializeCards();
  initializeCardsListener();
});

/**
 * @constructor
 * @name CardConstructor
 * @description Constructs a card object with a title and description, and provides a method to generate a corresponding DOM element.
 * 
 * @param {string} title - The title displayed at the top of the card.
 * @param {string} description - A short descriptive text displayed below the title.
 * 
 * @method createCard
 * @description Generates a new HTML card element with the provided title and description.
 * @returns {HTMLDivElement} A div element representing the visual card, ready to be appended to the DOM.
 */
function CardConstructor(title, description, optionValue) {
  this.title = title;
  this.description = description;
  this.optionValue = optionValue;

  this.createCard = function () {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.option = this.optionValue;

    card.innerHTML = `
      <h2>${this.title}</h2>
      <p>${this.description}</p>
    `;

    return card;
  };
};

/**
 * @function initializeCardsListener
 * @description Create new cards depending on the current page
 * 
 * @returns {void}
 */
function initializeCards() {
  cardContainer.innerHTML = "";

  //first "page" of the configurator
  if (currentPage === "setUpPage") {
    if (currentLang === "en") {
      let baseEng = new CardConstructor("Manual certificate registration.", "Ideal for individual users or small teams. All certificates are registered manually through our platform, without API integration.", "base");
      let apiEng = new CardConstructor("Automated certificate registration via API.", "Designed for organizations with their own IT systems. Integrate with our service through the KeCert API for seamless and scalable blockchain certificate issuance.", "advanced");
      const leftCard = baseEng.createCard();
      const rightCard = apiEng.createCard();
      cardContainer.appendChild(leftCard);
      cardContainer.appendChild(rightCard);
    }
  };

  // second "page" of the configurator
  if (currentPage === "durationPage") {
    let seconda1 = new CardConstructor("seconda pagina", "Include la configurazione iniziale", "base");
    let seconda2 = new CardConstructor("seconda pagina ma a destra", "Include la configurazione + API KedosInclude la configurazione iniziale", "advanced");

    const leftCard = seconda1.createCard();
    const rightCard = seconda2.createCard();
    cardContainer.appendChild(leftCard);
    cardContainer.appendChild(rightCard);
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
      initializeCards();
      initializeCardsListener();
      console.log(currentPage);
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
  if (currentPage === "setUpPage" && sessionData.setUpPage) {
    currentPage = "durationPage";
    durationPageBtn.disabled = false;
  };
}





//pulsante per andare allo step successivo
nextBtn.addEventListener("click", () => {
  sessionData[currentPage] = selectedOption;
  selectedOption.innerHTML = "";
  progressBarProgress();
  console.log(currentPage)
  initializeCards();
  initializeCardsListener();
  initializeNodeListeners();
  console.log(sessionData)
});
