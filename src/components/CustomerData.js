import React, { Component } from 'react';

class CustomerData extends Component{
	constructor(){
		super();
		
		this.state = {
			edit:false,
			id:null,
			customerData:[{
				id:"1",
				firstname:"sravya",
				lastname:"GLS",
				age:"28"
			},
			{
				id:"2",
				firstname:"swaroop",
				lastname:"P",
				age:"29"
			},
			{
				id:3,
				firstname:"Dharvi",
				lastname:"P",
				age:"1"
			}]
		};
		this.submitHandler = this.submitHandler.bind(this);
		this.editHandler = this.editHandler.bind(this);
		this.submitUpdateHandler = this.submitUpdateHandler.bind(this);
		this.deleteHandler = this.deleteHandler.bind(this);
	}
	submitHandler(event){
		event.preventDefault();
		console.log(this.state.customerData);
		this.setState({
			customerData:[...this.state.customerData,{
				id:Date.now(),
				firstname:event.target.firstname.value,
				lastname:event.target.lastname.value,
				age:event.target.age.value,
				done:false
			}]
		});
		event.target.firstname.value = '';
		event.target.lastname.value = '';
		event.target.age.value = '';
	}
	editHandler(id,firstname,lastname,age){
		console.log(firstname,id);
		this.setState({
     	 	edit: true,
      		id: id,
      		firstname: firstname,
      		lastname: lastname,
      		age: age
    	});
	}
	submitUpdateHandler(event){
		event.preventDefault();
		this.setState({
			customerData:this.state.customerData.map((customer) => {
				if(customer.id == this.state.id){
					customer.firstname = event.target.firstname.value;
					customer.lastname = event.target.lastname.value;
					customer.age = event.target.age.value;
				}
				return customer;
			}),
			edit:false
		})
	}
	inputHandler= (inputType,event) => {
		this.setState({[inputType]:event.target.value});
	}
	deleteHandler = (id) => {
		this.setState({
      		customerData: this.state.customerData.filter(customer => {
        		if (customer.id !== id) {
          			return customer;
        		}
      		})
    	});
	}
	renderEditForm(){
		if(this.state.edit){
			return (<form onSubmit={this.submitUpdateHandler}>
					<h2>Edit Form</h2>
					<p>
						<label>Firstname:</label>
						<input type="text" name="firstname" onChange={this.inputHandler.bind(this, 'firstname')} value={this.state.firstname} />
					</p>
					<p>
						<label>Lastname:</label>
						<input type="text" name="lastname" onChange={this.inputHandler.bind(this,'lastname')} value={this.state.lastname} />
					</p>
					<p>
						<label>Age:</label>
						<input type="text" name="age" onChange={this.inputHandler.bind(this,'age')} value={this.state.age} />
					</p>
					<button>Submit</button>
				</form>
				);
		}
	}
	renderAddForm(){
		if(!this.state.edit){
			return (<form onSubmit={this.submitHandler} style={{display:"inline-block"}}>
					<h2>Add Form</h2>
					<p>
						<label>Firstname:</label>
						<input type="text" name="firstname" value={this.state.customerData.firstname} />
					</p>
					<p>
						<label>Lastname:</label>
						<input type="text" name="lastname" value={this.state.customerData.lastname} />
					</p>
					<p>
						<label>Age:</label>
						<input type="text" name="age" value={this.state.customerData.age} />
					</p>
					<button>Submit</button>
				</form>
				);
		}
	}
	render(){
		let customerData = this.state.customerData.map(({id,firstname,lastname,age}) => {
			return (<tr key={id}>
						<td>{firstname}</td>
						<td>{lastname}</td>
						<td>{age}</td>
						<td><button onClick={() => this.editHandler(id,firstname,lastname,age)}>Edit</button></td>
						<td><button onClick={() => this.deleteHandler(id)}>Delete</button></td>
						
					</tr>
					)}
			);
		return (
			<div>
				 {this.renderEditForm()}
				 {this.renderAddForm()}				
				<table align="center">
				<thead>
					<tr>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Age</th>
						<th>Operation</th>
					</tr>
				</thead>
				<tbody>
					{customerData}
				</tbody>
				</table>
			</div>

		);
	}

}

export default CustomerData;