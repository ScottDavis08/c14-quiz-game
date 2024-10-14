# quiz-game

## Overview
This project is a simple multiple-choice quiz game built using Node.js without any additional frameworks like Express. The game serves HTML, CSS, and JavaScript files from a basic HTTP server built using Node.js's core modules. Players answer multiple-choice questions, and the game keeps track of their progress.

## Features
**Multiple Choice Questions**: Each question comes with a set of multiple answers to choose from.
**Dynamic Front-End**: Questions and answers are dynamically loaded using JavaScript.
**Real-Time Feedback**: Players get instant feedback after submitting each answer (correct or wrong).
**Progress Tracking**: The game progresses through a series of questions, and when all questions are answered, the game notifies the player.
**Core Node.js**: No external libraries or frameworks are required; the server is built using Node.js's built-in modules (http, fs, and path).
Project Structure
bash
```
/node-quiz-game
    /public
        index.html          # The main HTML file for the quiz game
        styles.css          # Basic styles for the quiz UI
        app.js              # Front-end JavaScript to manage the game logic
    server.js               # Node.js server that serves the static files
    package.json            # Project metadata and scripts
```
## Getting Started
### Prerequisites
**Node.js**: You’ll need Node.js installed on your machine. 

### Installation
**Clone the repository**:
```
git clone <repository-url>
cd node-quiz-game
```
**Install dependencies**: Although this project doesn’t rely on external dependencies like Express, you can run npm install to initialize the project and handle any potential future package additions.

```
npm install
Running the Server
```
**Start the Node.js server**: Run the following command to start the server:
```
node server.js
```
**Access the game**: Open your web browser and go to http://localhost:3000 to start playing the quiz game.

## Game Flow
The server serves an HTML file with dynamically generated multiple-choice questions.
Each question appears with multiple answer choices. Select the correct answer and hit the Submit button.
You'll get instant feedback: "Correct!" or "Wrong! Try again."
The game progresses through a series of questions until all questions have been answered.
## Modifying the Quiz
To customize the quiz questions:

Open the public/app.js file.

Modify the questions array by adding, removing, or updating the questions, answer choices, and correct answers.

**Example**:
```
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Rome", "Madrid"],
        correctAnswer: "Paris"
    },
    // Add more questions here
];
```
## How It Works
**Node.js Server (server.js)**
The Node.js server uses the built-in http module to serve static files from the /public directory.
The server listens on port 3000 and serves index.html, styles.css, and app.js to the browser.
When a user accesses the root (/) or other asset files (like CSS and JS), the server responds with the appropriate content.
**Front-End (app.js)**
The front-end JavaScript dynamically loads each question and its answer choices, listens for the user’s input, and provides feedback based on the user's selection.
The game is simple and uses DOM manipulation to update the UI in real time.
**CSS (styles.css)**
Basic styles are applied to make the quiz visually appealing, centering the content and styling the buttons and text fields.

## Future Improvements
**Score Tracking**: Add a score system that keeps track of how many answers the player got correct.
**Leaderboard**: Implement a leaderboard to display top scores.
**Timer**: Add a timer for each question to increase the challenge.
**Mobile-Friendly Design**: Improve the CSS to make the game more responsive on mobile devices.
## License
This project is open-source and available under the MIT License.
