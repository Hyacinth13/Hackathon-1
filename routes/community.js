var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Board = mongoose.model('Board');
var Community = mongoose.model('Community');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

//Get the individual boards from the index using the id
router.get('/', function(req, res, next){
	res.render('community');
});

//Get the baords all together
router.get('/', function(req, res, next) {
 Community.find( function( err, messages, count ) {
   res.json(messages);
 });
});
module.exports = router;