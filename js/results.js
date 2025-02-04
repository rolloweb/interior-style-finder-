function displayResults(results) {
    const resultsContainer = document.querySelector('.style-results');
    resultsContainer.innerHTML = '';

    // Sort styles by score
    const sortedStyles = Object.entries(results).sort((a, b) => b[1] - a[1]);

    sortedStyles.forEach(([style, score], index) => {
        const styleData = quizData.styles[style];
        const isPrimary = index === 0;
        
        const stylePath = `./images/room_layouts/${style}/${style}-livingroom-2.png`;

        const styleElement = document.createElement('div');
        styleElement.className = `style-result ${isPrimary ? 'primary' : 'secondary'}`;
        styleElement.innerHTML = `
            <h3>${styleData.name} Style - ${Math.round(score)}%</h3>
            <div class="style-images">
                <img src="${stylePath}" alt="${styleData.name} style" onerror="this.style.display='none'"/>
            </div>
            <div class="style-details">
                <h4>Key Characteristics:</h4>
                <ul>
                    ${styleData.characteristics.map(char => `<li>${char}</li>`).join('')}
                </ul>
                <p><strong>Colors:</strong> ${styleData.colors}</p>
                <p><strong>Materials:</strong> ${styleData.materials}</p>
            </div>
        `;
        resultsContainer.appendChild(styleElement);
    });

    // Add Funk3000 branding
    const brandingElement = document.createElement('div');
    brandingElement.className = 'results-footer';
    brandingElement.innerHTML = `
        <p>Discover more about your interior style journey with Funk3000</p>
        <a href="https://funk3000.com" class="funk3000-link">Visit Funk3000</a>
    `;
    resultsContainer.appendChild(brandingElement);
}