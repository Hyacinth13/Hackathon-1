var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var MessageBoard = mongoose.model('MessageBoard');
var MessageList = mongoose.model('MessageList');
var MessageComment = mongoose.model('MessageComment');

//Get the individual boards from the index using the id
router.get('/:id', function(req, res, next){
	res.render('messageboard');
});

//Get the baords all together
router.get('/', function(req, res, next){
	MessageBoard.find( function(err, messageboards, count){
		res.json(messageboard);
	})
});

//Create a new messageboard
// route.post('/', function(req, res){
// 	new MessageBoard({
// 		name: req.body.name
// 	}).save(function(err, messageboard){
// 		res.json(messageboard);
// 	})
// });


//update a messageboard using the id

// //update a messageboard using the id

// router.put(':id', function(req, res){
// 	MessageBoard.findByIdAndUpdate(
// 		req.params.id,
// 		{$set: {name: req.body.name, description: req.body.description}},
// 		function(err, messageboard){
// 			res.send(board);
// 		})
// });


//delete a messageboard using the id

// //delete a messageboard using the id
// router.delete(':/id', function(req, res){
// 	MessageBoard.findById(req.params.id, function(err, messageboard){
// 		messageboard.remove();
// 		MessageList.find({ boardId: req.params.id}, function(err, messagelists){
// 			messagelists.forEach(function(err, index){
// 				var messagelist = messagelists[index];
// 				MessageCard.find({listId: list_id}).remove().exec();
// 				messagelist.remove();
// 			});

			// res.status(200).send({success: true});

// 			res.status(200).send({success: true});
// 		});
// 	});
// });

module.exports = router;