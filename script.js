// Theme Management with localStorage
const themeSelector = document.getElementById('themeSelector');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);
themeSelector.value = savedTheme;

// Theme change handler
themeSelector.addEventListener('change', (e) => {
    const theme = e.target.value;
    applyTheme(theme);
    localStorage.setItem('theme', theme);
});

function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
}

// Animation Controller
const animateBtn = document.getElementById('animateBtn');
const targetElement = document.getElementById('targetElement');

animateBtn.addEventListener('click', () => {
    // Reset animation
    targetElement.classList.remove('animate');
    void targetElement.offsetWidth; // Trigger reflow
    targetElement.classList.add('animate');
    
    // Store last animation time
    localStorage.setItem('lastAnimation', Date.now());
});

// Optional: Animation persistence
const lastAnimation = localStorage.getItem('lastAnimation');
if (lastAnimation) {
    console.log(`Last animation triggered at: ${new Date(Number(lastAnimation))}`);
}
