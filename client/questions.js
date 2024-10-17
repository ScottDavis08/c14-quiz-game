export const questions = [
    {
        question: "What is the correct way to export a function in a JavaScript module?",
        choices: [
            "export function myFunction() { ... }", 
            "module.exports = myFunction() { ... }", 
            "exports myFunction { ... }", 
            "require(myFunction)"],
        correctAnswer: "export function myFunction() { ... }"
    },
    {
        question: "What is the correct syntax for importing multiple named exports from a module?",
        choices: [
            "import default { func1, func2 } from './myModule';",
            "import [ func1, func2 ] from './myModule';",
            "require { func1, func2 } from './myModule';",
            "import { func1, func2 } from './myModule';", 
            ],
        correctAnswer: "import { func1, func2 } from './myModule';"
    },
    {
        question: "How can you import everything from a module and access each export via a namespace?",
        choices: [
            "import * from './myModule';", 
            "import all from './myModule';",
            "import * as myModule from './myModule';", 
            "requireAll('./myModule');"],
        correctAnswer: "import * as myModule from './myModule';"
    },
    {
        question: "How can you import everything from a module and access each export via a namespace?",
        choices: [
            "import * from './myModule';", 
            "import all from './myModule';",
            "import * as myModule from './myModule';", 
            "requireAll('./myModule');"],
        correctAnswer: "import * as myModule from './myModule';"
    },
];