document.getElementById('get-pokemon').addEventListener('click', async function () {
    const randomId = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon in total
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Extract Pokémon information
        const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        const pokemonImage = data.sprites.front_default || 'https://via.placeholder.com/150'; // Placeholder if no image
        const pokemonAbilities = data.abilities.length > 0
            ? data.abilities.map(ability => ability.ability.name).join(', ')
            : 'No abilities available';

        // Update DOM with Pokémon data
        document.getElementById('pokemon-image').src = pokemonImage;
        document.getElementById('pokemon-image').alt = pokemonName; // Set alt text for accessibility
        document.getElementById('pokemon-info').innerHTML = `
            <p><strong>Name:</strong> ${pokemonName}</p>
            <p><strong>Abilities:</strong> ${pokemonAbilities}</p>
        `;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);

        // Display error message
        document.getElementById('pokemon-info').innerHTML = `
            <p style="color: red;">Failed to fetch Pokémon data. Please try again!</p>
        `;
        document.getElementById('pokemon-image').src = '';
        document.getElementById('pokemon-image').alt = 'Error fetching Pokémon';
    }
});
