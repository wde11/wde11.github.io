const toggleButton = document.getElementById('mode-toggle');
const body = document.body;


if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
} else {
    toggleButton.textContent = 'Switch to Dark Mode';
}

toggleButton.addEventListener('click', () => {

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');


    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});
