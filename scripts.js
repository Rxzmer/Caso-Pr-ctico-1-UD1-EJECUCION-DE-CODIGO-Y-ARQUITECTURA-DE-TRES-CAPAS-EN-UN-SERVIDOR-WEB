document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    fetch(`/api/games?search=${query}`)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error:', error));
});

function displayResults(games) {
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';
    games.forEach(game => {
        const row = `
            <tr>
                <td>${game.title}</td>
                <td>${game.platform}</td>
                <td>${game.price}</td>
            </tr>
        `;
        gamesList.innerHTML += row;
    });
}
