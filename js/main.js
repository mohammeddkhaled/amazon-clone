document.addEventListener('DOMContentLoaded', () => {
    const setupHoverPopup = (selector) => {
        const parent = document.querySelector(selector);
        if (!parent) return;

        const popup = parent.querySelector('.popup');
        if (!popup) return;

        parent.addEventListener('mouseenter', () => {
            popup.style.display = 'flex';
        });

        parent.addEventListener('mouseleave', () => {
            popup.style.display = 'none';
        });
    };

    // Setup hover dropdowns
    setupHoverPopup('.nav-signin');
    setupHoverPopup('.nav-language');


    // You can add more popups here if needed
});
