import React, {Component} from 'react';
import Message from './Message';
import MessageForm from './MessageForm';
import $ from 'jquery';

class Messages extends Component {
	constructor(props){
		super(props);
		this.addMessage = this.addMessage.bind(this);
		this.getMessages = this. getMessages.bind(this);
		this.state = {messages: [] };

	}

	 getMessages() {
	 	$.ajax ({
	 		url: '/messages',
	 		type: "GET",
	 		DataType: "JSON",
	 	}).done(messages => {this.setState({messages: messages});
	 }).fail(msg =>{console.log(msg)
	 });

	 componentDidMount(){
	 	this.getMessages();
	 }

	 addMessage() {
	 	this.setState({messages: [...this.state.message, message] });
	 }

	 }
	 render(){
	 	let messages = this.state.messages( message => {
	 		return(<Message refresh={this.getMessages} key = {`message -${message._id}`} {...message}/>);
	 	});
	 		return(
	 			<div>
	 				<MessageForm addMessage={this.addMessage}/>
	 				<div className = 'row'>
	 					{messages}
	 				</div>
	 			</div>
	 		);
	 }
}

export default Messages; 	
