import React from 'react';

class LifeCycleB extends React.Component{

	constructor(props){
		super(props);
		console.log('Constructor : LifecycleB');
	}
	static getDerivedStateFromProps(props,state){
		console.log('getDerivedStateFromProps - LifecycleB');
		return null;
	}
	
	componentDidMount(){
		console.log('LifecycleB:ComponentDidMount');
	}
	shouldComponentUpdate(){
		console.log('LifeCycleB:shouldComponentUpdate');
		return true;
	}
	getSnapshotBeforeUpdate(prevP,prevS){
		console.log('LifecycleB :getSnapshotBeforeUpdate');
		return null;
	}
	componentDidUpdate(prevP,prevS,snapshot){
		console.log('LifeCycleB : COmponentDidUpdate');
	}

	render(){
		console.log('render - LifecycleB');
		return <div>LifeCycle B</div>
	}

}

export default LifeCycleB;