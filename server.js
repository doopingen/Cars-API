const express = require('express');
var router = express.Router();
var db = require('./models/');

//Setup the express app
const app = express();

// app.get('/', function(req, res) {
//     // res.send('you hit the root route')
//     // get all todos
//     res.status(200).send({
//       success: 'true',
//       message: 'Cars retrieved successfully',
//       cars: db.cardata.findAll()
//         .then(function(foundCars) {
//             foundCars.forEach(function(cardata) {
//                 JSON.stringify(cardata.make)
//             })
//         })
//     });
//     // get all todos
// });

/* GET todo listing. */
app.get('/', function (req, res, next) {
    db.cardata.findAll({})
        .then(cardata => res.json({
            error: false,
            data: cardata
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

app.listen(3000, function() {
    console.log("Server listening on 3000")
});