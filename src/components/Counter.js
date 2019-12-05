import React, { Component } from 'react';

class Counter extends Component{
	constructor(props){
		super(props);
		this.state = {
			counter:0
		}
		this.incrementCounter = this.incrementCounter.bind(this);
		this.decrementCounter = this.decrementCounter.bind(this);
		this.decrement5 = this.decrement5.bind(this);
	}
	decrementCounter(){
		this.setState(
			(prev,props) => ({counter:prev.counter-1}),
			() => {
				console.log(this.state.counter);
			}
		);
	}
	incrementCounter(){
		this.setState({counter:this.state.counter+1});
	}
	decrement5(){
		this.decrementCounter();
		this.decrementCounter();
		this.decrementCounter();
		this.decrementCounter();
		this.decrementCounter();
	}
	render(){
		return(
			<div>
			<h1>Counter value:{this.state.counter}</h1>
			<button onClick={this.incrementCounter}>Inc +</button> | <button onClick={this.decrement5}> Dec _</button>
			</div>
		)
	}

}

export default Counter;