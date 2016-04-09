import React, {Component} from 'react';
import $ from 'jquery';

class Message extends Component {
	constructor(props){
		super(props);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.updateMessage = this.updateMessage.bind(this);
		this.deleteMessage = this.deleteMessage.bind(this);
		this.state = {edit:false};
	}

	toggleEdit() {
		this.setState({edit: !this.state.edit});
	}

	updateMessage() {
		$.ajax({
			url: `/messages/${this.props._id}`, 
			type: "PUT", 
			dataType: "JSON", 
			data: {title: this.refs.title.value, description: this.refs.description.value, }
		}).done(message => {
			this.toggleEdit();
			this.props.refresh();
		}).fail(msg=> {
			console.log(msg);
	    });
	}

	deleteMessage() {
		$.ajax({
			url: `/messages/${this.props._id}`,
			type: "DELETE", 
			dataType: "JSON", 
		}).done(message => {
			this.props.refresh();
		}).fail(msg => {
			console.log(msg);
		});
	}

	edit(){
		return(<div className="col s12 m3">
			     <div className='card purple darken-1'>
				   <div className='card-content white-text'>
					  <input required = {true} type = 'text' ref = 'title' placeholder = "Title" defaultValue = {this.props.title} />
					  <textarea ref = 'description' defaultValue={this.props.description}></textarea>
					</div>
					<div className='card-action'>
					  <button className='btn' onClick = {this.toggleEdit}>Cancel </button>
					  <button className= 'btn' onClick = {this.updateMessage}> Save </button>
				   </div>
				</div>
			  </div>
			);
	}
	message(){
		return(<div className="col s12 m3">
			     <div className='card purple darken-1'>
				    <div className='card-content white-text'>
					  <span className='card-title' onClick={this.toggleEdit}> {this.props.title} </span>
					  <p> {this.props.description || "Click message title to add a description"} </p>
					  <p>{moment(this.props.updated_at).format("MM/DD/YYYY")}</p>
					</div>
					<div className='card-action'>
					  <button className='btn' onClick = {this.deleteMessage}>Delete </button>
					</div>
				</div>
			</div>
			);

	}
	render() {
		if(this.state.edit)
			return this.edit();
		else
		return this.message();
	}
	
}

export default Message;