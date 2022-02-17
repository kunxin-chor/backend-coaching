// SETUP
const express = require('express');1
const app = express();

// ROUTES
app.get('/faults', function(req,res){
    // add in code to fetch data and to return the data
    // 1. fetch data from the mongodb (whatever choice of database)
    // 2. return the data as JSON
    res.send("getting all faults")
})

app.post('/faults', function(req,res){

})

app.get('/faults/:fault_id/comments', function(req,res){
    const faultId = req.params.fault_id;
    res.send("Seeing the comments for fault with the id of " + faultId);
})

// LISTEN (start server)
app.listen(3000, function(){
    console.log("Server has started");
})