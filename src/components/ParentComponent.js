import React from 'react';
import ChildComponent from './ChildComponent';
 
class ParentComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			parent:'Mom'
		}
		this.greetParent = this.greetParent.bind(this);
	}
	greetParent(child){
		alert(`Hello ${this.state.parent} from ${child}`);
	}
	render(){
		return (
			<div>
				<ChildComponent onClick={this.greetParent} />
				
			</div>
		)
	}
}

export default ParentComponent;