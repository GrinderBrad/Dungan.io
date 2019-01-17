import React, { Component } from 'react'
import './App.css';


function Table(props){
  return <div>{props.name}</div>
}

class App extends Component {
  state = { 
    inputState: '',
    a: 0,
    b: 64,
    todos: []
  }

  inputChange = (e) => {
    this.setState({ inputState: e.target.value });
  }

  delay = () => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve('HOBA!');
      }, 2000)
    });
  }

  someFunc = () =>{
    console.log(this)
  }

  add = async () => {

  }

  render() {
    const todos = this.state.todos;
    return (
      <div>
        <Table name={'LOH'}/>
        <input type="text" onChange={this.inputChange} placeholder='add some todos'/>
        <button onClick={this.someFunc}>Add</button>
        {todos.map(function(item){
            return <div>{item}</div>
        })}
      </div>
    );
  }
}

export default App;
