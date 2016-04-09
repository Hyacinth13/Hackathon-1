var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Community = mongoose.model('Community');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

//get the messagelist
router.get('/', function(req, res, next){
	var query = Message.find({});
	query.where('category', req.query.category);
	query.exec(function(err, messages, count){
		res.json(messages);
	});
});

//post(create) and new messagelist
router.post('/', function(req, res, next){
	new Message({
		title: req.body.title,
		description: req.body.description,
		category: req.body.category
	}).save(function(err, message, count){
		if (err) {
			res.json(err)
		} else {
		  res.json(message);
	    }
	});
});

//update a messagelist
router.put('/:id', function(req, res, next){
	Message.findByIdAndUpdate(
		req.params.id,
		{$set: {name: req.body.title, description: req.body.description}},
		function(err, message){
			res.json(message);
		});
});

//delete a messagelist using the id
router.delete('/:id', function(req, res){
	Message.findById(req.params.id, function(err, message){
		message.remove();
		Comment.find({'messageId': req.query.id}).remove().exec(function(err, message){
			res.status(200).send({success: true});
		});
	});
});

module.exports = router;