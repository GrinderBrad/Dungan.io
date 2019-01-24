import React, { Component } from 'react';
import './App.css';

import axios from 'axios';


function TodoDumb(props) {
  return (<div>
              <span>{props.text}</span>
              <button onClick={props.onDelete}>DELETE</button>
          </div>)
}

class App extends Component {
  state = {
    newTodo: "",
    todos: []
  };

  inputChange = (e) => {
    this.setState({ newTodo: e.target.value }); 
  };

  onAdd = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto/').then((res) => {
      console.log(res);
    })
    const todos = this.state.todos
    todos.push(this.state.newTodo);
    this.setState({
      todos, newTodo: ''
    })
  };
  onDelete = (index) => {
    var array = this.state.todos;
    array.splice(index, 1);
    this.setState({   
      todos: array
   });
  };

  add = async () => {};
  render() {
    const mytodos = this.state.todos;
    return (
      <div className='App'>
        <div className='list'>
          <input onChange={this.inputChange} value={this.state.newTodo} />
          <button onClick={this.onAdd}>Add</button>
          {mytodos.map((item, index) => {
            return <TodoDumb key={index} text={item} onDelete={() => this.onDelete(index)}/>
          })}
        </div>
        
        
      </div>
    );
  }
}

export default App;