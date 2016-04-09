import React, {Component} from 'react';
import Message from './Message';
import MessageForm from './MessageForm';
import $ from 'jquery';

class Messages extends Component {
	constructor(props){
		super(props);
		this.addMessage = this.addMessage.bind(this);
		this.getMessages = this.getMessages.bind(this);
		this.state = {messages: [] };

	}

	getMessages() {
		$.ajax ({
			url: '/messages',
			type: "GET",
			data: {category: this.props.category},
			DataType: "JSON"
		}).done  (messages => {
			this.setState({messages: messages})
		}).fail(msg =>{console.log(msg)});
	}

	componentDidMount(){
	 	this.getMessages();
	}

	addMessage(message) {
	 	this.setState({messages: [...this.state.messages, message] });
	}

	render(){
		let messages = this.state.messages.map( message => {
			return(<Message key={message._id} {...message} refresh={this.getMessages}/>);
		})
	   return(
	   	  <div>
	   	    <MessageForm category={this.props.category} addMessage={this.addMessage} />
	   	    {messages}
	   	  </div>)
	   	;
	 }
}

export default Messages; 	
