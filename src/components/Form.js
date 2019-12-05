import React from 'react';

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			'username':"",
			'comments':"",
			'topic':"vue"
		};
		//this.changeHandler = this.changeHandler.bind(this);
		//this.onSubmit = this.onSubmit.bind(this);
	}
	usernameChange= event => {
		this.setState({username:event.target.value});
	}
	commentsChange = event => {
		this.setState({comments:event.target.value});
	}
	changeTopic = event => {
		this.setState({topic:event.target.value});
	}
	onSubmitClick= event => {
		alert(this.state.username);
		event.preventDefault();
	}
	render(){
		const {username,comments,topic} = this.state;
		return(
			<div>
				{this.state.displayText}
			<form>
				<div>
					<label>Username</label>
					<input type="text" name="myData" 
						value={username} 
						onChange={this.usernameChange} />
				</div>
				<div>
					<label>Comments</label>
					<textarea 
						value={comments}
						onChange={this.commentsChange}
						></textarea> 
				</div>
				<div>
					<label>Topic</label>
					<select value={topic} onChange={this.changeTopic}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<button type="submit" onClick={this.onSubmitClick}>Submit</button>
			</form>
			</div>
		)
	}
}

export default Form;