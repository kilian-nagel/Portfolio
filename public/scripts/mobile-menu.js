const toggleMenuBtn = document.getElementById('toggleMenu');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const hideMenuBtn = document.getElementById('hideMenuBtn');

toggleMenuBtn.addEventListener('click', () => {
    if (!fullscreenMenu.classList.contains('menu-open')) {
        fullscreenMenu.classList.add('menu-open');
    } else {
        // Close the menu with a delay after opening animation completes
        fullscreenMenu.classList.remove('menu-open');
        setTimeout(() => {
          fullscreenMenu.style.display = 'none';
        }, 500); // Delay should match the transition duration in CSS
    }
});

hideMenuBtn.addEventListener('click',()=>{
    fullscreenMenu.classList.remove('menu-open');
})