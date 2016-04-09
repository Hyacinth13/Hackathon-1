var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

//get the messagecomment from the messagelist
router.get('/', function(req, res, next){
	var query = Comment.find({});
	query.where('messageId', req.query.messageId);
	query.exec(function(err, comments, count){
		res.json(comments);
	});
});

//post (create) the individual messagecomment for the messagelists
router.post('/', function(req, res, next){
	new Comment({
		name: req.body.name,
		description: req.body.description,
		messageId: req.body.messageId
	}).save(function(err, comment, count){
		res.json(comment);
	});
});

//update the messagecomment by find the id
router.put('/:id', function(req, res, next){
	Comment.findByIdAndUpdate(
		req.params.id,
		{$set: {name: req.body.name, description: req.body.description}},
		function(err, comment){
			res.json(comment);
		});
});

//delete a messagecomment from the messagelist it belongs to
router.delete('/:id', function(req, res){
	Comment.findById(req.params.id, function(err, comment){
		comment.remove();
		res.status(200).send({success: true});
	});
});

module.exports = router;