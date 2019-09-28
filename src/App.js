import React,{Component} from 'react';
import Todos from './Todos';
import './App.css';

class App extends Component {
  state = {
    todos : [
      {id:1, content: "buy some milk"},
      {id:2, content: "milk has great taste"},
      {id:3, content: "buy Vegetables and Fruits"},
      {id:4, content: "buy all groceries"}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
