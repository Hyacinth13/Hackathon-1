var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Message = new Schema({
	title: {type: String, required: true},
	description: String,
	date: Date
});

var Comment = new Schema({
	description: String,
	date: Date
});

mongoose.model('Comment', Comment);
mongoose.model( 'Message', Message );
mongoose.connect( 'mongodb://localhost/community-comms' );
