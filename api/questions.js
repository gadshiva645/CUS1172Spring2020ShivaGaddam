const express = require('express');
var router = express.Router()



router.get('/Sub/:id', async (req, res ) => {
    res.send(await questions.filter(quiz => quiz.test_id == req.params.id));
});



const questions = [

    {
        test_id:1,
        question: 'What is the result of 4+2+"7"',
        answers: [
            { text: '67', correct:true},
            { text: '6"7"', correct:false},
        ]
    },
    {
        test_id:1,
        question: 'Which of the following is not a example of pop up boxes in javascript',
        answers: [
            { text: 'Alert', correct:false},
            { text: 'Confirm', correct:false},
            { text: 'Prompt', correct:false},
            { text: 'Delete', correct:true},
        ]
    },
    {
        test_id:1,
        question: 'Which of the following is not a example of javascript data types',
        answers: [
            { text: 'String', correct:false},
            { text: 'Bit', correct:true},
            { text: 'Boolean', correct:false},
            { text: 'Undefined', correct:false},
        ]
    },      
    {
        test_id:1,
        question: 'Which of the following are not examples of looping structures in javascript?',
        answers: [
            { text: 'For', correct:false},
            { text: 'While', correct:false},
            { text: 'do-while', correct:false},
            { text: 'if', correct:true},
        ]
    },    
    {
        test_id:1,
        question: 'What is the use of type of operator?',
        answers: [
            { text: 'It is an operator which returns a string description of the type of a variable.', correct:true},
            { text: 'It is a javascript data type', correct:false},
        ]
    },      
    {
        test_id:1,
        question: 'What does NaN stand for in JavaScript?',
        answers: [
            { text: 'It stands for Not a Number', correct:true},
            { text: 'It stands for No Asynchronous Number', correct:false},
        ]
    },
    {
        test_id:1,
        question: 'What is a prompt box in JavaScript?',
        answers: [
            { text: 'It is a button that you click', correct:false},
            { text: 'A prompt box is a box which allows the user to enter input by providing a text box.', correct:true},
        ]
    },    
    {
        test_id:2,
        question: 'Is it true that Netscape is the software company who developed JavaScript.',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    },              
    {
        test_id:2,
        question: 'Is it true that the This keyword refers to the object from where it was called.',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    },  
    {
        test_id:2,
        question: 'Break statement continues with next statement of the loop.',
        answers: [
            { text: 'True', correct:false},
            { text: 'False', correct:true},
        ]
    },  
    {
        test_id:2,
        question: 'Blur function is used to remove the focus from the specified object.',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    },  
    {
        test_id:2,
        question: 'Which of the following are not ways to define a variable in JavaScript?',
        answers: [
            { text: 'Var', correct:false},
            { text: 'Const', correct:false},
            { text: 'Let', correct:false},
            { text: 'Int', correct:true},
        ]
    },  
    {
        test_id:2,
        question: 'What does DOM stand for?',
        answers: [
            { text: 'DOM stands for Document Object Model', correct:true},
            { text: 'DOM stands for Document Off Mode', correct:false},
        ]
    },  
    {
        test_id:2,
        question: 'What are not access modifiers in Java?',
        answers: [
            { text: 'Private', correct:false},
            { text: 'Public', correct:false},
            { text: 'Default', correct:false},
            { text: 'Intialized', correct:true},
        ]
    }, 
    {
        test_id:2,
        question: 'Which symbol is not used for comments in Javascript?',
        answers: [
            { text: '//', correct:false},
            { text: '/* */', correct:false},
            { text: '<!-->', correct:true},
        ]
    }, 
    {
        test_id:2,
        question: 'Is React a javascript framework?',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    },  
    {
        test_id:2,
        question: 'Does the NaN in javascript stand for Not a Number?',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    }, 
    {
        test_id:1,
        question: 'The Var keyword is block scoped, the let keyword is function scoped. ',
        answers: [
            { text: 'True', correct:false},
            { text: 'False', correct:true},
        ]
    }, 
    {
        test_id:2,
        question: 'Is it true that a callback is a function of Javascript which can be passed as an option or argument of JavaScript? ',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    }, 
    {
        test_id:1,
        question: 'How can negative infinity be derived in javascript?',
        answers: [
            { text: 'By dividing a negative number by zero', correct:false},
            { text: 'By adding a negative number to zero', correct:true},
        ]
    },
    
];


module.exports = router
