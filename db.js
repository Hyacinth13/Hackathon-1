var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

//Board(MessagesBoards)
var Board = new Schema ({
	name: {type: String, required: true},
	description: String,
});

//List(MessageLists)
var Message = new Schema({
	name: {type: String, required: true },
	boardId: {type: String, required: true }
});

//Comments(MessageComments)
var Comment = new Schema({
	name: { type: String, required: true },
    description: { type: String, required: true },
    messageId: { type: String, required: true },
});

mongoose.model( 'Board', Board );
mongoose.model( 'Message', Message );
mongoose.model( 'Comment', Comment )
mongoose.connect( 'mongodb://localhost/community-comms' );
