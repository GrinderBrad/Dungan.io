import React, { Component } from 'react';

import './App.css';



class App extends Component {
  state = {
    newTodo: "",
    todos: []
  };

  inputChange = (e) => {
    this.setState({ newTodo: e.target.value }); 
  };

  onAdd = () => {
    const todos = this.state.todos
    todos.push(this.state.newTodo);
    this.setState({
      todos
    })
  };
  onDelete = (e) => {
    
    var array = this.state.todos;
    var index = array.indexOf(e.target.value)
    array.splice(index, 0);
    this.setState({   
      todos: array
   });
  };

  add = async () => {};
  render() {
    const mytodos = this.state.todos;
    return (
      <div>
        <div className='car'></div>
        <input onChange={this.inputChange} value={this.state.newTodo} />
        <button onClick={this.onAdd}>Add</button>
        {mytodos.map(function(item, index) {
      
          return <div key={index}>{item}<button onClick={this.onDelete}>del</button> </div> 
          
          
        })}
        
      </div>
    );
  }
}

export default App;