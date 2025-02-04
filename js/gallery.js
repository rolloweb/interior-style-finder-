document.addEventListener('DOMContentLoaded', () => {
    // Get style from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const style = urlParams.get('style');

    if (!style) {
        window.location.href = 'index.html';
        return;
    }

    // Update page title
    document.getElementById('gallery-title').textContent = 
        `${style.charAt(0).toUpperCase() + style.slice(1)} Style Gallery`;

    // Define room types
    const roomTypes = ['livingroom', 'bedroom', 'kitchen', 'bathroom', 'dining'];
    const galleryContainer = document.getElementById('gallery-container');
    
    // Generate gallery items for each room type
    roomTypes.forEach(roomType => {
        for (let i = 1; i <= 3; i++) {
            const imagePath = `./images/rooms/${style}/${style}-${roomType}-${i}.png`;

            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            galleryItem.innerHTML = `
                <img src="${imagePath}" alt="${style} interior" 
                     onerror="this.style.display='none'">
            `;

            galleryContainer.appendChild(galleryItem);
        }
    });
});