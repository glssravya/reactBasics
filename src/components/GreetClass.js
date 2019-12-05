import React, { Component }from 'react';
class GreetClass extends Component{
	constructor(props){
		super(props);
		this.state = {'name':'User'};
		//this.onNameSubmit = this.onNameSubmit.bind(this);
	}
	onNameSubmit(){
		this.setState({name:'welcome back'});
	}
	render(){
		return (
			<div>
				<h1>Hello {this.state.name} </h1>
				<button onClick={()=>this.onNameSubmit()}>Login</button>
			</div>
		)
	}
}

export default GreetClass;