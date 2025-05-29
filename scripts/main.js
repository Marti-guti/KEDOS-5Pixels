const templates = [
  {
    title: "Template Alpha",
    description: "A modern blockchain certificate layout with smart-contract integration.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    title: "Template Beta",
    description: "Perfect for academic credentials and official blockchain notarizations.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    title: "Template Gamma",
    description: "Clean and minimalist design, focused on identity and authenticity.",
    image: "https://via.placeholder.com/300x150",
  },
];

function createCard(template) {
  const card = document.createElement("div");
  card.className = "card shadow-sm";

  card.innerHTML = `
    <img src="${template.image}" class="card-img-top" alt="${template.title}">
    <div class="card-body">
      <h5 class="card-title">${template.title}</h5>
      <p class="card-text">${template.description}</p>
      <a href="#" class="btn btn-primary">Configure</a>
    </div>
  `;

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cardContainer");

  templates.forEach(template => {
    const card = createCard(template);
    container.appendChild(card);
  });
});


