// import questions from "./questions.json" with { type: "json" };



let currentQuestionIndex = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const quizForm = document.getElementById('quiz-form');
const resultEl = document.getElementById('result');

function loadQuestion(questions) {
    // Clear previous results and choices
    resultEl.textContent = '';
    choicesEl.innerHTML = '';

    // Load the current question
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    // Dynamically create radio buttons for each answer choice
    currentQuestion.choices.forEach((choice, index) => {
        const choiceLabel = document.createElement('label');
        const choiceInput = document.createElement('input');

        choiceInput.type = 'radio';
        choiceInput.name = 'answer';
        choiceInput.value = choice;
        choiceInput.id = `choice${index}`;

        choiceLabel.htmlFor = `choice${index}`;
        choiceLabel.textContent = choice;

        // Append radio button and label to choices container
        choicesEl.appendChild(choiceInput);
        choicesEl.appendChild(choiceLabel);
        choicesEl.appendChild(document.createElement('br')); // Add a line break
    });
}

function checkAnswer(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    // Get the selected answer
    const selectedAnswer = quizForm.elements['answer'].value;

    // Check if the answer is correct
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        resultEl.textContent = "Correct!";
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(loadQuestion, 1000); // Load next question after 1 second
        } else {
            resultEl.textContent = "You've completed the quiz!";
            document.getElementById('submit-btn').disabled = true;
        }
    } else {
        resultEl.textContent = "Wrong! Try again.";
    }
}

// Add event listener for form submission
quizForm.addEventListener('submit', checkAnswer);

// Fetch the json file with the questions then Load the first question when the page loads
fetch('questions.json')
  .then(response => response.json())
  .then(questions => {
    console.log(questions);
    loadQuestion(questions);
    })
  .catch(error => console.error('Error:', error));

