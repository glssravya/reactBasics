import React,{Component} from 'react';

class ConditionalRendering extends Component{
	constructor(props){
		super(props);
		this.state = {
			isLoggedIn:true
		}
	}
	render(){
		//if-else
		/*if(this.state.isLoggedIn){
			return <div>If/else Welcome Sravya</div>;
		}else{
			return <div>if/else Welcome Guest</div>;
		}*/
		//element variables
		/*let message;
		if(this.state.isLoggedIn){
			message = <div>elementvar:Welcome Sravya</div>
		}else{
			message = <div>elementvar:Welcome Guest</div>
		}
		return <div>{message}</div>*/
		//Terenary conditonal operator
		/*let message = (this.state.isLoggedIn)? 'terenary:Welcome Sravya' : 'terenary:Welcome Guest';
		return <div>{message}</div>*/
		//Shortcircuit operator
		return this.state.isLoggedIn  && <div>Shortcircuit:WElcome Sravya</div>
	}
}

export default ConditionalRendering;