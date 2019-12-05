import React from 'react';

const SampleInput = (props) => {
    // console.log(props);
    let element = null;
    switch(props.elementType){
        case 'input':
            element = <input
                type={props.elementConfig.type}
                placeholder={props.elementConfig.placeholder}
                value={props.elementValue}
                onChange={props.changed} />
        break;
        case 'select':
                element = <select defaultValue={props.elementValue} onChange={props.changed}>
                    {props.elementConfig.options.map((data,index) => (
                        <option key={index} value={data.value}>{data.description}</option>
                    ))}
                </select>
        break;
        case 'radio':
                element = props.elementConfig.options.map((list, index) => (
                    <div key={index}>
                    <input
                        type={props.elementConfig.type}
                        value={list.value} /> {list.value}
                    </div>
                ))
        break;
        default:
            element = <input
                type={props.elementConfig.type}
                placeholder={props.elementConfig.placeholder}
                value={props.elementValue}
                onChange={props.changed} />
    }
    return (
        <>
            {element}
        </>
    )
}

export default SampleInput;
