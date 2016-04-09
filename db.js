var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

//Board(MessagesBoards)
var MessageBoard = new Schema ({
	name: {type: String, required: true},
	description: String,
});

//List(MessageLists)
var MessageList = new Schema({
	name: {type: String, required: true },
	boardId: {type: String, required: true }
});

//Comments(MessageComments)
var MessageComment = new Schema({
	name: { type: String, required: true },
    description: { type: String, required: true },
    listId: { type: String, required: true },
});

mongoose.model( 'MessageBoard', MessageBoard );
mongoose.model( 'MessageList', MessageList );
mongoose.model( 'MessageComment', MessageComment )
mongoose.connect( 'mongodb://localhost/community-comms' );
