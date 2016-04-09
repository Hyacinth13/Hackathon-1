import React, {Component} from 'react';
import $ from 'jquery';

class Comments extends Component {
	constructor(props){
		super(props);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.updateComments = this.updateComments.bind(this);
		this.deleteComments = this.deleteComments.bind(this);
		this.state = { edit: false };
	}
	toggleEdit() {
		this.setState({ edit: !this.state.edit});
	}
	updateComments(){
		$.ajax({
			url: `/messagecomments/${this.props._id}`,
			type: 'PUT',
			dataType:'JSON',
			data: {name: this.refs.name.value, description: this.refs.description.value }
		}).done( comments => {
			this.toggleEdit();
			this.props.refresh();
		}).fail( msg => {
			console.log(msg);
		});
	}
	deleteComments(){
		$.ajax({
			url:`/messagecomments/${this.props._id}`,
			type: 'DELETE',
			dataType: 'JSON',
		}).done( comments => {
			this.props.refresh();
		}).fail( msg => {
			console.log(msg);
		});
	}

	edit(){
		return(
			<div className='col s12 m3'>
				<div className='comments blue'>
					<div className='comments-content white-text'>
						<input required={true} type='text' ref='name' placeholder='name' defaultValue={this.props.name} />
						<textarea ref='description'>{this.props.description}</textarea>
					<div className='comments-action'>
						<button className='btn' onClick={this.toggleEdit}>Cancel</button>
						<button className='btn' onClick={this.updateComments}>Update</button>
					</div>
					</div>
				</div>
			</div>);
	}
	comments(){
		return(
			<div className='col s12 m3'>
				<div className='comments blue'>
					<div className='comments-content white-text'>
						<span className='comments-title' onClick={this.toggleEdit}>{this.props.name}</span>
						<p>{this.props.description || "Click Message name to add comments"}</p>
						<div className='comments-action'>
							<button className='btn' onClick={this.deleteComments}>Delete</button>
						</div>
					</div>
				</div>
			</div>);
	}

	render() {
		if (this.state.edit)
			return this.edit();
		else
			return this.comments();
	}
}
export default Comments;















