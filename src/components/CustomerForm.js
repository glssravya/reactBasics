import React,{ Component } from 'react';
import SampleInput from './SampleInput';
import CustomerData from './CustomerData';
const formdata = {
	    firstname: {
	        elementType: 'input',
	        elementConfig: {
	            type: 'text',
	            placeholder: 'Firstname'
	        }
	    },
	    lastname: {
	        elementType: 'input',
	        elementConfig: {
	            type: 'text',
	            placeholder: 'Lastname'
	        }
	    },
	    age: {
	        elementType: 'input',
	        elementConfig: {
	            type: 'text',
	            placeholder: 'Age'
	        }
	    },
	}
class CustomerForm extends Component{
	constructor(){
		super();
		this.state = {
			firstname:"",
			lastname:"",
			age:"",
			submit:false,
			customerData:[]
		};
    	this.submitHandler = this.submitHandler.bind(this);
    	this.handleEdit = this.handleEdit.bind(this);
    	this.customerData = [];
	}
	inputHandler = (inputType, event) => {
        console.log(inputType, event.target.value);
        this.setState({
            [inputType]: event.target.value
        })
    }
	submitHandler(event) {
		event.preventDefault();
		this.setState({submit:true});
		this.setState(prevState => ({
  			customerData: [...prevState.customerData,this.state]
		}));
	}
	handleEdit = (id) => {
		console.log(id+'edit');
		this.setState({firstname:this.state.customerData[id].firstname,
					  lastname:this.state.customerData[id].lastname,
					  age:this.state.customerData[id].age
					});

	}

	render(){
		const formArray = [];
        for(let element in formdata){
            formArray.push({name: element, ...formdata[element]});
        }
        let elements = <div>Loading..!</div>
        let customerData;
        elements = formArray.map((element, index) => (
            <SampleInput
                key={index}
                    elementType={element.elementType}
                    elementConfig={element.elementConfig}
                    elementValue={this.state[element.name]}
                    changed={this.inputHandler.bind(this, element.name)} />
        ))
        if(this.state.submit && this.state.customerData.length>0){
        	customerData = this.state.customerData.map((customer,index) => (<tr key={index}>
        		<td>{customer.firstname}</td>
        		<td>{customer.lastname}</td>
        		<td>{customer.age}</td>
        		<td><button onClick={this.handleEdit(index)}>Edit</button></td>
        		</tr>
        	))
        }
		return (
			<div>
			<form onSubmit={this.submitHandler}>
                {elements}
                <button type="submit">submit</button>
            </form>
         	<table>
         		<thead>
	         		<tr>
		         		<th>FIrstname</th>
		         		<th>Lastname</th>
		         		<th>Age</th>
		         	</tr>
         		</thead>
         		<tbody>
         			{customerData}
         		</tbody>
         	</table>
            </div>

		)

	}

}

export default CustomerForm;


