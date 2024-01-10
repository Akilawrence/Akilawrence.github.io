// Check if the device is in portrait mode
const isPortrait = () => window.innerHeight > window.innerWidth;

// Function to display or hide the rotate popup
const updateRotatePopup = () => {
    const rotatePopup = document.getElementById('rotatePopup');
    if (isPortrait()) {
        rotatePopup.style.display = 'block';
    } else {
        rotatePopup.style.display = 'none';
    }
};

updateRotatePopup();
window.addEventListener('orientationchange', () => {
    
    updateRotatePopup();
    
    
    if (rotatePopup.style.display === 'none') {
        window.removeEventListener('orientationchange', updateRotatePopup);
    }
});
