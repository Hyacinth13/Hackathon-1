var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var LandLord = new Schema ({
	name: {type: String, required: true},
	description: String,
});

var Community = new Schema ({
	name: {type: String, required: true},
	description: String,
});

//List(MessageLists)
var Message = new Schema({
	title: {type: String, required: true },
	description: {type: String, required: true },
	category: String
});

//Comments(MessageComments)
var Comment = new Schema({
	name: { type: String, required: true },
    description: { type: String, required: true },
    messageId: { type: String, required: true },
});

mongoose.model( 'LandLord', LandLord );
mongoose.model( 'Community', Community );
mongoose.model( 'Message', Message );
mongoose.model( 'Comment', Comment )
mongoose.connect( 'mongodb://localhost/community-comms' );
