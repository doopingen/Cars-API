const express = require('express');

//Setup the express app
const app = express();

app.use('/', require('./routes/cars'));

app.listen(3000, function() {
    console.log("Server listening on 3000")
})
