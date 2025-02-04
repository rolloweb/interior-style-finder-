document.addEventListener('DOMContentLoaded', () => {
    // Function to capitalize first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Function to get a random room image
    const getRandomRoomImage = (style) => {
        const roomTypes = ['livingroom', 'bedroom', 'kitchen', 'bathroom'];
        const randomRoomType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        return {
            src: `./images/rooms/${style}/${style}-${randomRoomType}-${randomNumber}.png`,
            type: randomRoomType
        };
    };

    // Function to create style characteristics list
    const getStyleCharacteristics = (style) => {
        const characteristics = {
            artdeco: ['Geometric patterns', 'Luxurious materials', 'Bold colors', 'Symmetrical designs'],
            bohemian: ['Mixed patterns', 'Layered textures', 'Vintage pieces', 'Natural materials'],
            coastal: ['Light colors', 'Natural light', 'Beach-inspired', 'Relaxed atmosphere'],
            contemporary: ['Clean lines', 'Neutral palette', 'Current trends', 'Subtle sophistication'],
            industrial: ['Raw materials', 'Exposed elements', 'Metal accents', 'Urban aesthetic'],
            midcentury: ['Organic curves', 'Functional design', 'Retro elements', 'Mixed materials'],
            modern: ['Minimalist', 'Functional spaces', 'Simple lines', 'Monochromatic'],
            rustic: ['Natural textures', 'Warm colors', 'Wooden elements', 'Cozy atmosphere'],
            scandinavian: ['Light woods', 'Minimal decor', 'Functional beauty', 'Natural elements'],
            traditional: ['Classic details', 'Rich textures', 'Elegant decor', 'Symmetrical layout']
        };
        return characteristics[style] || [];
    };

    // Function to display enlarged image in modal
    const showImageModal = (src, alt) => {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${src}" alt="${alt}" />
                <button class="modal-close">&times;</button>
            </div>
        `;

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.className === 'modal-close') {
                modal.remove();
            }
        });

        document.body.appendChild(modal);
    };

    // Function to share results
    const shareResults = () => {
        if (!window.userScores) return;

        // Get the top style
        const topStyle = Object.entries(window.userScores)
            .sort(([,a], [,b]) => b - a)[0][0];

        const shareText = `I just discovered my interior design style is ${capitalizeFirstLetter(topStyle)}! Find your style at Interior Style Finder`;

        if (navigator.share) {
            navigator.share({
                title: 'My Interior Style Results',
                text: shareText,
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareText)
                .then(() => alert('Results copied to clipboard!'))
                .catch(err => console.error('Failed to copy:', err));
        }
    };

    // Function to restart quiz
    const restartQuiz = () => {
        window.location.reload();
    };

    // Add event listeners to results page elements
    const initializeResultsPage = () => {
        // Add click events to all style images
        document.querySelectorAll('.style-image').forEach(img => {
            img.addEventListener('click', () => {
                showImageModal(img.src, img.alt);
            });
        });

        // Add share button functionality if it exists
        const shareButton = document.querySelector('.share-button');
        if (shareButton) {
            shareButton.addEventListener('click', shareResults);
        }

        // Add restart button functionality if it exists
        const restartButton = document.querySelector('.restart-button');
        if (restartButton) {
            restartButton.addEventListener('click', restartQuiz);
        }
    };

    // Initialize if we're on the results page
    if (document.querySelector('.style-results')) {
        initializeResultsPage();
    }

    // Export functions for use in other scripts
    window.shareResults = shareResults;
    window.restartQuiz = restartQuiz;
    window.showImageModal = showImageModal;

    // Add this to the results page generation
    const getShoppingLinks = (style) => {
        const retailers = {
            uk: {
                'wayfair': 'https://www.wayfair.co.uk',
                'made': 'https://www.made.com',
                'johnlewis': 'https://www.johnlewis.com'
            },
            us: {
                'wayfair': 'https://www.wayfair.com',
                'westelm': 'https://www.westelm.com',
                'cb2': 'https://www.cb2.com'
            }
        };

        return `
            <div class="shopping-recommendations">
                <h4>Where to Shop This Style</h4>
                <div class="retailer-links">
                    ${Object.entries(retailers.uk).map(([name, url]) => `
                        <a href="${url}/search?query=${style}" target="_blank" class="retailer-link">
                            ${name.charAt(0).toUpperCase() + name.slice(1)} UK
                        </a>
                    `).join('')}
                    ${Object.entries(retailers.us).map(([name, url]) => `
                        <a href="${url}/search?query=${style}" target="_blank" class="retailer-link">
                            ${name.charAt(0).toUpperCase() + name.slice(1)} US
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    };

    const getStyleElements = (style) => {
        const elements = {
            'modern': ['Clean lines', 'Minimal decor', 'Neutral colors', 'Open spaces'],
            'traditional': ['Classic patterns', 'Rich textures', 'Symmetrical layout', 'Elegant details'],
            // ... more styles
        };
        // ... style elements HTML generation
    };

    const getColorPalette = (style) => {
        const palettes = {
            'modern': ['#F5F5F5', '#333333', '#A7C7D7', '#B7B7A4'],
            'traditional': ['#8B4513', '#DEB887', '#800020', '#F5F5DC'],
            // ... more palettes
        };
        // ... color palette HTML generation
    };

    // Update the existing results display to include new sections
    const updateResults = (style) => {
        const resultsContainer = document.querySelector('.style-result');
        if (resultsContainer) {
            resultsContainer.insertAdjacentHTML('beforeend', getStyleElements(style));
            resultsContainer.insertAdjacentHTML('beforeend', getColorPalette(style));
            resultsContainer.insertAdjacentHTML('beforeend', getShoppingLinks(style));
        }
    };
});