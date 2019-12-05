import React from 'react';

const ChildComponent = (props) =>{

	return (
		<button onClick={() => props.onClick('Dharvi')}>Click me</button>
	)
}

export default ChildComponent;