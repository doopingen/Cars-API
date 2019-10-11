const express = require('express');
const router = express.Router();
const db = require('../models/');

/* GET car listing. */
router.get('/', function(req, res, next) {
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

/* POST todo. */
router.post('/', function(req, res, next) {
 
});


/* update todo. */
router.put('/:id', function(req, res, next) {

});


/* GET todo listing. */
router.delete('/:id', function(req, res, next) {

});

module.exports = router;