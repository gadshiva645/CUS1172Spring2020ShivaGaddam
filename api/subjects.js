const express = require('express');
var router = express.Router()



router.get('/', (req, res ) => {
    res.send(tests);
});



const tests = [
    {
        id:1,
        name: 'Quiz 1',
        details:"It is related to Hardware"
    },
    {
        id:2,
        name:'Quiz 2',
        details:"It is related to Software"

    }
];

module.exports = router
