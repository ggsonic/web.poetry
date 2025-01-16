// Function to create a poetry card
function createPoetryCard(poem) {
    const card = document.createElement('div');
    card.className = 'poetry-card';
    card.innerHTML = `
        <h2>${poem.title}</h2>
        <p class="author">${poem.author}</p>
        <p class="content">${poem.content}</p>
    `;
    
    // Add click event to navigate to individual poem page
    card.addEventListener('click', () => {
        window.location.href = `poem.html?id=${poem.id}`;
    });
    
    return card;
}

// Function to display all poems
function displayPoems(poemsToShow) {
    const poetryList = document.getElementById('poetryList');
    poetryList.innerHTML = '';
    
    poemsToShow.forEach(poem => {
        poetryList.appendChild(createPoetryCard(poem));
    });
}

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPoems = poems.filter(poem => 
        poem.title.toLowerCase().includes(searchTerm) ||
        poem.author.toLowerCase().includes(searchTerm) ||
        poem.content.toLowerCase().includes(searchTerm)
    );
    displayPoems(filteredPoems);
});

// Initial display of all poems
displayPoems(poems); 