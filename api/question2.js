const express = require('express');
var router = express.Router()



router.get('/Sub/:id/:q_id',  (req, res ) => {
    var Array = questions.filter(quiz => quiz.test_id == req.params.id);
    
        res.send( {question :Array[req.params.q_id],meta:parseInt(req.params.q_id) + parseInt("1"),totalquestions:Array.length} );
    
});




const questions = [

    {
        id:1,
        test_id:1,
        question: 'What is the result of 4+2+"7"',
        answers: [
            { text: '67' },
            { text: '6"7"'},
        ]
    },
    {
        id:2,
        test_id:1,
        question: 'Which of the following is not a example of pop up boxes in javascript',
        answers: [
            { text: 'Alert' },
            { text: 'Confirm'},
            { text: 'Prompt'},
            { text: 'Delete', },
        ]
    },
    {
        id:3,
        test_id:1,
        question: 'Which of the following is not a example of javascript data types',
        answers: [
            { text: 'String'},
            { text: 'Bit'},
            { text: 'Boolean'},
            { text: 'Undefined'},
        ]
    },      
    
    {
        id:4,
        test_id:2,
        question: 'Is it true that Netscape is the software company who developed JavaScript.',
        answers: [
            { text: 'True'},
            { text: 'False'},
        ]
    },              
    {
        id:5,
        test_id:2,
        question: 'Is it true that the This keyword refers to the object from where it was called.',
        answers: [
            { text: 'True'},
            { text: 'False'},
        ]
    },  
    {
        id:6,
        test_id:2,
        question: 'Break statement continues with next statement of the loop.',
        answers: [
            { text: 'True'},
            { text: 'False'},
        ]
    },  
    {
        id:7,
        test_id:3,
        question: 'The Var keyword is block scoped, the let keyword is function scoped. ',
        answers: [
            { text: 'True'},
            { text: 'False'},
        ]
    }, 
    {
        id:8,
        test_id:3,
        question: 'Is it true that a callback is a function of Javascript which can be passed as an option or argument of JavaScript? ',
        answers: [
            { text: 'True'},
            { text: 'False'},
        ]
    }, 
    {
        id:9,
        test_id:3,
        question: 'How can negative infinity be derived in javascript?',
        answers: [
            { text: 'By dividing a negative number by zero'},
            { text: 'By adding a negative number to zero'},
        ]
    },
    
];


module.exports = router
