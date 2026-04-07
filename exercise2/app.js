// 1. Data Store
const articles = [
    { id: 101, title: "JavaScript Tips", body: "Use 'const' by default for cleaner code." },
    { id: 102, title: "CSS Tricks", body: "Flexbox makes centering elements super easy." },
    { id: 103, title: "Web Security", body: "Always validate user input on the server side." }
];

// 2. Select UI Elements
const loadBtn = document.getElementById("load-btn");
const contentArea = document.getElementById("content-area");

// Step 1: Create a function to generate the HTML string for a card
function createCardHTML(article) {
    // Your code here
    return `
        <div class="card">
            <h3>${article.title}</h3>
            <p>${article.body}</p>
            <button class="btn-like">Like</button>
            <button class="btn-share">Share</button>
        </div>
    `;
}

// Step 2: Add click event listener to #load-btn
// Hint: Loop through 'articles' array and append HTML to 'contentArea'
loadBtn.addEventListener("click", () => {
    // Your code here

    contentArea.innerHTML = articles
        .map(article => createCardHTML(article))
        .join("");
});

// Step 3: Implement Event Delegation for the Like and Share buttons
// Hint: Add ONE listener to 'contentArea' and check e.target.classList
contentArea.addEventListener("click", (e) => {
    // 4. Handle Like Button
    if (e.target.classList.contains("btn-like")) {
        // Toggle class 'liked' and change text between "Like ❤️" and "Liked! ✅"
        e.target.classList.toggle("liked");

        if (e.target.classList.contains("liked")) {
            e.target.textContent = "Liked! ✅";
        } else {
            e.target.textContent = "Like ❤️";
        }
    }

    // 5. Handle Share Button
    if (e.target.classList.contains("btn-share")) {
        // Get the title from the card and show an alert
        // Get the parent card
        const card = e.target.closest(".card");

        // Get title inside the card
        const title = card.querySelector("h3").textContent;

        alert(`Sharing: ${title}`);
    }
});