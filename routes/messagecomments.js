var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var MessageComment = mongoose.model('MessageComment');

//get the messagecomment from the messagelist
router.get('/', function(req, res, next){
	var query = MessageComment.find({});
	query.where('listId', req.query.listId);
	query.exec(function(err, messagecomments, count){
		res.json(messagecomments);
	});
});

//post (create) the individual messagecomment for the messagelists
router.post('/', function(req, res, next){
	new MessageComment({
		name: req.body.name,
		description: req.body.description,
		listId: req.body.listId
	}).save(function(err, messagecomment, count){
		res.json(messagecomment);
	});
});

//update the messagecomment by find the id
router.put('/:id', function(req, res, next){
	MessageComment.findByIdAndUpdate(
		req.params.id,
		{$set: {name: req.body.name, description: req.body.description}},
		function(err, messagecomment){
			res.json(messagecomment);
		});
});

//delete a messagecomment from the messagelist it belongs to
router.delete('/:id', function(req, res){
	MessageComment.findById(req.params.id, function(err, messagecomment){
		messagecomment.remove();
		res.status(200).send({success: true});
	});
});

module.exports = router;