document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const quizSection = document.getElementById('quiz');
    const quizContainer = document.getElementById('quizContainer');
    const submitQuizBtn = document.getElementById('submitQuiz');

    startBtn.addEventListener('click', startQuiz);
    submitQuizBtn.addEventListener('click', submitQuiz);

    function startQuiz() {
        quizSection.style.display = 'block';
        submitQuizBtn.style.display = 'block';
        loadQuizQuestions();
    }

    function loadQuizQuestions() {
        const questions = [
            {
                question: "Which of the following activities do you enjoy the most?",
                options: [
                    "Solving mathematical problems", 
                    "Writing stories", 
                    "Designing graphics", 
                    "Conducting experiments"
                ]
            },
            {
                question: "In a group project, which role do you prefer?",
                options: [
                    "Leader", 
                    "Creative thinker", 
                    "Organizer", 
                    "Researcher"
                ]
            },
            {
                question: "What type of activities do you enjoy in your free time?",
                options: [
                        "Reading books",
                        "Playing sports",
                        "Solving puzzles",
                        "Creating art",
                        "Helping others"
                    ]
            },
            {
                question: "Which subjects do you enjoy the most in school?",
                options: [
                        "Math and Science",
                        "Language and Literature",
                        "Physical Education",
                        "Art and Music",
                        "Social Studies"
                    ]
            },
            {
                question: "How do you prefer to work on a project?",
                options: [
                        "Independently",
                        "In a team",
                        "With clear instructions",
                        "With creative freedom",
                        "Under pressure with deadlines"
                    ]
            },
            {
                question: "What motivates you the most in your work or studies?",
                options: [
                    "Solving complex problems",
                    "Helping others",
                    "Achieving goals and targets",
                    "Expressing creativity",
                    "Learning new things"
                ]
            },
        ];

        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.innerHTML = `
                <h3>Question ${index + 1}: ${q.question}</h3>
                ${q.options.map((option, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${i}">
                        ${option}
                    </label>
                `).join('')}
            `;
            quizContainer.appendChild(questionDiv);
        });
    }

    function submitQuiz() {
        // Here you would typically process the quiz results
        alert("Quiz submitted! We'll analyze your results and provide career suggestions.");
        // You can add logic here to display career suggestions based on the quiz results
    }
});