var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var MessageList = mongoose.model('MessageList');
var MessageComment = mongoose.model('MessageComment');

//get the messagelist
router.get('/', function(req, res, next){
	var query = MessageList.find({});
	query.where('boardId', req.query.boardId);
	query.exec(function(err, messagelists, count){
		res.json(messagelists);
	});
});

//post(create) and new messagelist
router.post('/', function(req, res, next){
	new MessageList({
		name: req.body.name,
		boardId: req.body.boardId
	}).save(function(err, messagelist, count){
		res.json(messagelist);
	});
});

//update a messagelist
router.put('/:id', function(req, res, next){
	MessageList.findByIdAndUpdate(
		req.params.id,
		{$set: {name: req.body.name}},
		function(err, messagelist){
			res.json(messagelist);
		});
});

//delete a messagelist using the id
router.delete('/:id', function(req, res){
	MessageList.findById(req.params.id, function(err, messagelist){
		messagelist.remove();
		MessageComment.find({'listId': req.query.id}).remove().exec(function(err, messagelist){
			res.status(200).send({success: true});
		});
	});
});

module.exports = router;