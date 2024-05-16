document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const description = document.createElement('div');
        description.textContent = item.getAttribute('data-description');
        description.style.position = 'absolute';
        description.style.bottom = '100%';
        description.style.left = '50%';
        description.style.transform = 'translateX(-50%)';
        description.style.background = 'white';
        description.style.padding = '10px';
        description.style.border = '1px solid #ccc';
        description.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
        item.appendChild(description);
    });

    item.addEventListener('mouseleave', () => {
        item.removeChild(item.lastChild);
    });
});
