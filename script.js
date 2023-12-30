//your JS code here. If required.
const sizeDisplay = document.getElementById('sizeDisplay');

function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    sizeDisplay.textContent = `Width: ${width} Height: ${height}`;
}

// Initial size update
updateSize();

// Update size on window resize
window.addEventListener('resize', updateSize);
