import React from 'react';

const ListRendering = () => {
	return (
		<ul>
		<NamesLi />
		</ul>
	);
}

const NamesLi = () => {

	const NameList = ['Swaroop','Sravya','Dharvi'];
	return NameList.map((name)=>{
		return <li key={name}>{name}</li>
	})
}

export default ListRendering;