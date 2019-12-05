import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import GreetClass from './components/GreetClass';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import LifeCycleB from './components/LifeCycleB';
import CustomerForm from './components/CustomerForm';
import ToDo from './components/ToDo';
import CustomerData from './components/CustomerData';


function App() {
  return (
    <div className="App">
      <CustomerData />
      
    </div>
  );
}

export default App;

/* <Greet name="Dharvi!" title="Baby" />
      <GreetClass name='Sravya' />
      <Counter />
      <ParentComponent />
      <ConditionalRendering />
      <ListRendering />
      <Form />
      <LifeCycleA /> 
       <ToDo />
      */