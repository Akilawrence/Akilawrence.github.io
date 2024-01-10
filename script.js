
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

// Initial check and add event listener for orientation change
updateRotatePopup();
window.addEventListener('orientationchange', updateRotatePopup);
