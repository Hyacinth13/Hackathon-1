var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var LandLord = mongoose.model('LandLord');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

//Get the individual boards from the index using the id
router.get('/:id', function(req, res, next){
	res.render('landlord');
});

//Get the baords all together
router.get('/', function(req, res, next) {
 res.render('landlord');
});
module.exports = router;