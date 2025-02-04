window.addEventListener('load', () => {
    if (typeof quizData === 'undefined') {
        console.error('Quiz data not loaded');
        return;
    }

    // Initialize global variables
    window.userScores = {};
    quizData.styles.forEach(style => {
        window.userScores[style] = 0;
    });

    // Get DOM elements
    const startButton = document.getElementById('start-quiz-btn');
    const quizContainer = document.querySelector('.question-container');
    const progressBar = document.querySelector('.progress');
    const navigationButtons = document.querySelector('.navigation-buttons');
    const previousButton = navigationButtons.querySelector('.btn-previous');
    const sections = document.querySelectorAll('.section');
    let currentQuestionIndex = 0;
    let questionHistory = []; // Track question history

    // Function to show a question
    const showQuestion = (index) => {
        const question = quizData.questions[index];
        
        // Ensure quiz section is visible
        document.getElementById('landing-section').style.display = 'none';
        document.getElementById('quiz-section').style.display = 'block';
        document.getElementById('results-section').style.display = 'none';
        
        // Fade out current content
        quizContainer.style.opacity = '0';
        
        setTimeout(() => {
            quizContainer.innerHTML = `<h3>${question.question}</h3>`;
            const imagesContainer = document.createElement('div');
            imagesContainer.classList.add('images-container');
            
            question.options.forEach(option => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                
                const img = document.createElement('img');
                img.src = option.image;
                img.alt = `${option.style} style room`;
                img.className = 'quiz-image';
                
                optionElement.appendChild(img);
                optionElement.addEventListener('click', () => selectOption(option));
                
                imagesContainer.appendChild(optionElement);
            });
            
            quizContainer.appendChild(imagesContainer);
            
            // Update progress bar
            progressBar.style.width = `${((index + 1) / quizData.questions.length) * 100}%`;
            
            // Show/hide previous button
            previousButton.style.display = index > 0 ? 'block' : 'none';
            
            // Fade in new content
            quizContainer.style.opacity = '1';
        }, 300);
    };

    // Function to handle option selection
    const selectOption = (option) => {
        // Store current question and answer
        questionHistory.push({
            questionIndex: currentQuestionIndex,
            selectedOption: option
        });

        // Add points for selected style
        Object.entries(option.points).forEach(([style, points]) => {
            window.userScores[style] = (window.userScores[style] || 0) + points;
        });

        // Move to next question or show results
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    };

    // Function to go to previous question
    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0 && questionHistory.length > 0) {
            // Remove last answer from scores
            const lastAnswer = questionHistory.pop();
            Object.entries(lastAnswer.selectedOption.points).forEach(([style, points]) => {
                window.userScores[style] -= points;
            });
            
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    };

    // Function to show results
    const showResults = () => {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.style.display = 'flex';
        }

        sections.forEach(section => section.style.display = 'none');

        setTimeout(() => {
            try {
                const totalScore = Object.values(window.userScores).reduce((a, b) => a + b, 0);
                const sortedStyles = Object.entries(window.userScores)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 3);

                const resultsContainer = document.querySelector('.style-results');
                const stylesHTML = sortedStyles.map(([style, score], index) => {
                    const percentage = Math.round((score / totalScore) * 100);
                    const roomTypes = ['livingroom', 'bedroom', 'kitchen', 'bathroom'];
                    const randomRoomType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
                    const randomNumber = Math.floor(Math.random() * 3) + 1;
                    
                    return `
                        <div class="style-result">
                            <h3>${capitalizeFirstLetter(style)} (${percentage}%)</h3>
                            <img src="./images/rooms/${style}/${style}-${randomRoomType}-${randomNumber}.png" 
                                 alt="${style} ${randomRoomType}" 
                                 class="style-image" />
                            <button class="browse-more-btn" onclick="window.location.href='gallery.html?style=${style}'">Browse More</button>
                            <div class="style-details">
                                <p>${quizData.styleDescriptions[style]}</p>
                                
                                ${quizData.styleElements && quizData.styleElements[style] ? `
                                    <div class="style-elements">
                                        <h4>Key Elements</h4>
                                        <ul>
                                            ${quizData.styleElements[style].map(element => `
                                                <li>${element}</li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                ` : ''}

                                ${quizData.colorPalettes && quizData.colorPalettes[style] ? `
                                    <div class="color-palette">
                                        <h4>Recommended Colors</h4>
                                        <div class="color-swatches">
                                            ${quizData.colorPalettes[style].map(color => `
                                                <div class="color-swatch" style="background-color: ${color}">
                                                    <span class="color-code">${color}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}

                                <div class="shopping-recommendations">
                                    <h4>Where to Shop This Style</h4>
                                    <div class="retailer-links">
                                        <div class="uk-retailers">
                                            <h5>UK Retailers</h5>
                                            <a href="https://www.wayfair.co.uk" target="_blank" class="retailer-link">Wayfair UK</a>
                                            <a href="https://www.johnlewis.com/home-garden" target="_blank" class="retailer-link">John Lewis</a>
                                            <a href="https://www.dunelm.com" target="_blank" class="retailer-link">Dunelm</a>
                                        </div>
                                        <div class="us-retailers">
                                            <h5>US Retailers</h5>
                                            <a href="https://www.wayfair.com" target="_blank" class="retailer-link">Wayfair US</a>
                                            <a href="https://www.westelm.com" target="_blank" class="retailer-link">West Elm</a>
                                            <a href="https://www.crateandbarrel.com" target="_blank" class="retailer-link">Crate & Barrel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');

                if (resultsContainer) {
                    resultsContainer.innerHTML = stylesHTML;
                }

                document.getElementById('results-section').style.display = 'block';

            } catch (error) {
                console.error('Error generating results:', error);
                const resultsContainer = document.querySelector('.style-results');
                if (resultsContainer) {
                    resultsContainer.innerHTML = '<p>Sorry, there was an error generating your results. Please try again.</p>';
                }
            } finally {
                if (loadingOverlay) {
                    loadingOverlay.style.display = 'none';
                }
                document.getElementById('results-section').style.display = 'block';
            }
        }, 1000);
    };

    // Function to start quiz
    const startQuiz = () => {
        document.getElementById('landing-section').style.display = 'none';
        document.getElementById('quiz-section').style.display = 'block';
        document.getElementById('results-section').style.display = 'none';
        showQuestion(currentQuestionIndex);
    };

    // Helper function to capitalize first letter
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Event Listeners
    if (startButton) {
        startButton.addEventListener('click', startQuiz);
    }

    if (previousButton) {
        previousButton.addEventListener('click', goToPreviousQuestion);
    }
});