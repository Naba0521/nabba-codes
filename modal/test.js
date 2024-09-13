// Selecting DOM elements
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal-container");
const form = document.querySelector("form");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("descripiton");
const rankSelect = document.getElementById("rank");
const cardsContainer = document.querySelector(".cards");

// State to hold cards data
let cardsData = [];

// Function to generate HTML for a card
const generateCardHTML = (title, description, rank, id) => {
    return `
        <div class="card">
            <div>
                <h1>${title}</h1>
                <p>${description}</p>
            </div>
            <div>
                Rank: ${rank}
            </div>
            <div onclick="deleteCard(${id})">
                X
            </div>
        </div>
    `;
};

// Function to render all cards in cardsData
const renderCards = () => {
    // Clear previous cards
    cardsContainer.innerHTML = "";

    // Sort cardsData based on rank
    cardsData.sort((a, b) => {
        const rankOrder = { High: 3, Medium: 2, Low: 1 };
        return rankOrder[b.rank] - rankOrder[a.rank];
    });

    // Generate HTML for each card and append to cardsContainer
    cardsData.forEach((card) => {
        const { title, description, rank, id } = card;
        const cardHTML = generateCardHTML(title, description, rank, id);
        cardsContainer.innerHTML += cardHTML;
    });
};

// Function to add a new card
const addCard = (title, description, rank) => {
    const id = cardsData.length; // Assigning a simple incrementing ID
    const newCard = { id, title, description, rank };
    cardsData.push(newCard);
    renderCards(); // Update UI with the new card
};

// Event listener for opening modal
openModalBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

// Event listener for closing modal
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

// Event listener for form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const rank = rankSelect.value;

    if (title === "" || description === "") {
        alert("Please enter both title and description.");
        return;
    }

    addCard(title, description, rank);

    // Reset form fields
    titleInput.value = "";
    descriptionInput.value = "";
    rankSelect.value = "High"; // Reset rank to High

    modal.classList.remove("open");
});

// Function to delete a card
const deleteCard = (id) => {
    cardsData = cardsData.filter((card) => card.id !== id);
    renderCards(); // Update UI after deletion
};

// Initial render of cards when the page loads
renderCards();