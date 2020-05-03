const express = require('express');
const app = express();
var Subjects = require('./subjects');
var Questions = require('./questions');


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}





app.use(allowCrossDomain);  
app.use('/Subjects', Subjects)
app.use('/Questions', Questions)





app.listen(3000, ()=>{
    console.log("Server is Running");
})



