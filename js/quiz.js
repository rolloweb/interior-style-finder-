const quiz = {
    currentQuestion: 0,
    answers: [],
    
    init: function() {
        this.showQuestion(0);
        this.updateProgress();
    },

    renderQuestion() {
        const question = quizData.questions[this.currentQuestion];
        const container = document.querySelector('.question-container');
        
        let html = `<h2>${question.question}</h2>`;

        if (question.type === 'image') {
            html += `<div class="image-options">`;
            question.options.forEach((option, index) => {
                html += `
                    <div class="image-option" data-index="${index}">
                        <img src="${option.image}" alt="Style option ${index + 1}">
                    </div>
                `;
            });
            html += `</div>`;
        } else {
            html += `<div class="choice-options">`;
            question.options.forEach((option, index) => {
                html += `
                    <div class="choice-option" data-index="${index}">
                        ${option.text}
                    </div>
                `;
            });
            html += `</div>`;
        }

        container.innerHTML = html;
        this.addOptionListeners();
    },

    addOptionListeners() {
        const options = document.querySelectorAll('.image-option, .choice-option');
        options.forEach(option => {
            option.addEventListener('click', () => this.selectOption(option));
        });
    },

    selectOption(option) {
        // Remove previous selections
        document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
        
        // Add selected class
        option.classList.add('selected');
        
        // Store answer
        const index = option.dataset.index;
        this.answers[this.currentQuestion] = index;

        // Auto-advance after selection
        setTimeout(() => {
            this.nextQuestion();
        }, 500); // Half-second delay to show selection before advancing
    },

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / quizData.questions.length) * 100;
        document.querySelector('.progress').style.width = `${progress}%`;
    },

    nextQuestion() {
        if (this.currentQuestion < quizData.questions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
            this.updateProgress();
        } else {
            this.calculateResults();
        }
    },

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
            this.updateProgress();
        }
    },

    calculateResults() {
        // Calculate style points
        this.answers.forEach((answer, index) => {
            const question = quizData.questions[index];
            const selectedOption = question.options[answer];
            
            Object.entries(selectedOption.points).forEach(([style, points]) => {
                quiz.stylePoints[style] = (quiz.stylePoints[style] || 0) + points;
            });
        });

        // Show results
        showResults(quiz.stylePoints);
    }
};

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    quiz.init();
});

// Make quiz available globally
window.quiz = quiz;

function startQuiz() {
    document.getElementById('landing').classList.remove('active');
    document.getElementById('quiz').classList.add('active');
    quiz.init();
}

function nextQuestion() {
    quiz.nextQuestion();
}

function previousQuestion() {
    quiz.previousQuestion();
}
