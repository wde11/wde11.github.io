const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Check the initial mode and update the button text accordingly
if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
} else {
    toggleButton.textContent = 'Switch to Dark Mode';
}

toggleButton.addEventListener('click', () => {
    // Toggle between dark and light mode
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Update button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});
