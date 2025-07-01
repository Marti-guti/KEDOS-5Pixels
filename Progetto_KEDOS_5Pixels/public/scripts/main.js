let buttons = document.querySelectorAll(".goToConfigurator");

buttons.forEach(btn => {
btn.addEventListener("click", () => {
    let value = btn.id;
    localStorage.setItem("lang", value);
    window.location.href = "../../src/pages/Configurator.html";
})
});

// <button id="it" class="goToConfigurator">vai</button>