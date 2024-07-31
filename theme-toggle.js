document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const themeImage = document.getElementById('theme-image');
    
    // Get the saved theme from localStorage or default to dark theme
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark' || !savedTheme;
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeStylesheet.href = 'dark-theme.css';
        themeImage.src = 'github-mark-white.png';
        themeToggleButton.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        themeStylesheet.href = 'light-theme.css';
        themeImage.src = 'github-mark.png';
        themeToggleButton.textContent = 'Dark Mode';
    }

    themeToggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            // Switch to light mode
            document.body.classList.remove('dark-mode');
            themeStylesheet.href = 'light-theme.css';
            themeImage.src = 'github-mark.png';
            themeToggleButton.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            document.body.classList.add('dark-mode');
            themeStylesheet.href = 'dark-theme.css';
            themeImage.src = 'github-mark-white.png';
            themeToggleButton.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });
});
