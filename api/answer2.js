const express = require('express');
var router = express.Router()



router.get('/:id/:ans',  (req, res ) => {
       question = answers.find(ans=>ans.id==req.params.id);
       if (question.answer == req.params.ans) {
           var Correct = "True";
       }else{
           var Correct = "False";
       }
       res.send( {question_id:req.params.id,userAnswer:req.params.ans,correct:Correct,feedback:question.answer} );
    
});



const answers = [

    {
        id:1,
        answer: '67'
        
    },
    {
        id:2,
        answer: 'Delete'

    },
    {
        id:3,
        answer: 'Bit'
    },      
    
    {
        id:4,
        answer:  'True'
    },              
    {
        id:5,
        answer:  'True'
           
    },  
    {
        id:6,
        answer: 'False'
     
    },  
    {
        id:7,
        answer:  'False'
    }, 
    {
        id:8,
        answer:'True'
        
    }, 
    {
        id:9,
        answers: 'By adding a negative number to zero',
       
    },
    
];


module.exports = router
