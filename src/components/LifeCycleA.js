import React from 'react';
import LifeCycleB from './LifeCycleB';
class LifeCycleA extends React.Component{

	constructor(props){
		super(props);
		console.log('Constructor : LifecycleA');
		this.state = {
			name:"Dharvi"
		}
	}
	static getDerivedStateFromProps(props,state){
		console.log('getDerivedStateFromProps - LifecycleA');
		return null;
	}
	
	componentDidMount(){
		console.log('LifecycleA:ComponentDidMount');
	}
	shouldComponentUpdate(){
		console.log('LifeCycleA:shouldComponentUpdate');
		return true;
	}
	getSnapshotBeforeUpdate(prevP,prevS){
		console.log('LifecycleA :getSnapshotBeforeUpdate');
		return null;
	}
	componentDidUpdate(prevP,prevS,snapshot){
		console.log('LifecycleA:COmponentDidUpdate');
	}
	changeState = () => {
		this.setState({
			name:'codeevolution'
		})
	}
	render(){
		console.log('render - LifecycleA');
		return (<div>LifeCycle A
			<button onClick={this.changeState}>Change</button>
				<LifeCycleB />
			
			</div>);
	}

}

export default LifeCycleA;